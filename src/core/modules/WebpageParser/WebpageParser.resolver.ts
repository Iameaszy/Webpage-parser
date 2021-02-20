import { webpageParserOutput } from './graphql/outputs/url-parser.output';
import { webpageParserService } from './WebpageParser.service';
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(() => 'webpageParser')
export class webpageParserResolver {
    constructor(@Inject(webpageParserService) private webpageParserService: webpageParserService) {}

    @Query(() => String)
    sayHello(): string {
        return 'Hello World!';
    }

    @Mutation(() => webpageParserOutput)
    async parseUrl(@Args('url') url: string): Promise<webpageParserOutput> {
        return this.webpageParserService.parse(url);
    }
}
