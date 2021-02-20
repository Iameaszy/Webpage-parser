import { Injectable, BadRequestException } from '@nestjs/common';
import { isURL } from 'class-validator';
import { PuppeteerAdapter } from 'src/core/adapters/puppeteer/Puppeteer';
import { webpageParserOutput } from './graphql/outputs/url-parser.output';

@Injectable()
export class webpageParserService {
    constructor(private puppeteerService: PuppeteerAdapter) {}
    parse(url: string): Promise<webpageParserOutput> {
        if (!isURL(url)) throw new BadRequestException('Invalid url format');

        return this.puppeteerService.parseUrl(url);
    }
}
