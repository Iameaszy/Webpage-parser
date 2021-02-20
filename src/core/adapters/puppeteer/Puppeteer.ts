import {  CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvTypes } from 'src/config/types';
import { Cache } from 'cache-manager';


@Injectable()
export class PuppeteerAdapter {
    constructor(
        private config: ConfigService<EnvTypes>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
    }

    parseUrl(url:string){
        
    }

}
