import { Module } from "@nestjs/common";
import { UrlParserService } from "./UrlParser.service";
import { UrlParserResolver } from "./UrlParser.resolver";


@Module({
  imports: [],
  providers: [UrlParserService, UrlParserResolver],
  exports: [UrlParserService, UrlParserResolver]
})
export class UrlParserModule { }
