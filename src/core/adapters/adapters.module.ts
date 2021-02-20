import { CacheModule, Module } from '@nestjs/common';
import { AdapterService } from './adapters.service';
import { PuppeteerAdapter } from './puppeteer/Puppeteer';

@Module({
    imports: [CacheModule.register()],
    providers: [AdapterService, PuppeteerAdapter],
    exports: [PuppeteerAdapter, AdapterService],
})
export class AdaptersModule {}
