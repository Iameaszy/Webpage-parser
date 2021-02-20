import { Module } from '@nestjs/common';
import { webpageParserService } from './WebpageParser.service';
import { webpageParserResolver } from './WebpageParser.resolver';
import { AdaptersModule } from 'src/core/adapters/adapters.module';

@Module({
    imports: [AdaptersModule],
    providers: [webpageParserService, webpageParserResolver],
    exports: [webpageParserService, webpageParserResolver],
})
export class webpageParserModule {}
