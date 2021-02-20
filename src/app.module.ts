import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ConfigModule } from '@nestjs/config';
import { join } from "path";
import configuration from './config/configurations';
import { AppService } from './app.service';
import { UrlParserModule } from "./core/modules/UrlParser/UrlParser.module";

@Module({
  imports: [
    UrlParserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [AppService]
})
export class AppModule { }
