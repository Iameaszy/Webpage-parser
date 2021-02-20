import { Injectable } from '@nestjs/common';
import { UrlParserOutput } from './graphql/outputs/url-parser.output';


@Injectable()
export class UrlParserService {
  constructor() {}
  parse(url:string):Promise<UrlParserOutput> {

    return {} as Promise<UrlParserOutput>
  }
}