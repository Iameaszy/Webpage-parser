import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvTypes } from 'src/config/types';
import { Cache } from 'cache-manager';
import * as puppeteer from 'puppeteer';
import { ParsedUrl } from './types';
import { PAGE_CACHE_EXPIRY } from '../constants';

@Injectable()
export class PuppeteerAdapter {
    constructor(private config: ConfigService<EnvTypes>, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async cacheUrl(url: string, parsedUrl: ParsedUrl) {
        await this.cacheManager.set(url, parsedUrl, { ttl: PAGE_CACHE_EXPIRY });
    }
    async getCacheUrl(url: string): Promise<ParsedUrl | null> {
        return await this.cacheManager.get(url);
    }

    async parseUrl(url: string): Promise<ParsedUrl> {
        let parsedUrl = await this.getCacheUrl(url);
        console.log('parsed url from cachec', parsedUrl);
        if (parsedUrl) return parsedUrl;

        const browser = await puppeteer.launch();
        const newPage = await browser.newPage();
        await newPage.setDefaultNavigationTimeout(0);
        await newPage.goto(url);
        const pageTitle = await newPage.title();
        const pageMetaDescription = await newPage.$eval(
            "head > meta[name='description']",
            (element) => (element as any).content,
        );
        const largestImage = await newPage.evaluate(
            () =>
                Array.from(document.querySelectorAll('img')).sort(
                    (a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight,
                )[0].src,
        );

        console.log('page title', pageTitle);
        console.log('page meta description', pageMetaDescription);
        console.log('largest image', largestImage);

        parsedUrl = {
            title: pageTitle,
            description: pageMetaDescription,
            largestImage,
        };

        await this.cacheUrl(url, parsedUrl);
        return parsedUrl;
    }
}
