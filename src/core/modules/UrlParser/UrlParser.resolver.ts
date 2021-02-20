import { UrlParserOutput } from './graphql/outputs/url-parser.output';
import { UrlParserService } from './UrlParser.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ForbiddenException, Inject, NotFoundException, UseGuards } from '@nestjs/common';



@Resolver(()=>"UrlParser")
export class UrlParserResolver {
    constructor(
        @Inject(UrlParserService) private urlParserService: UrlParserService,
    ) { }

    @Query(returns => UrlParserOutput)
    async parseUrl(@Args('url') url: string): Promise<UrlParserOutput> {
       return this.urlParserService.parse(url);
    }
}