import { Field, ObjectType } from "@nestjs/graphql";



@ObjectType()
export class UrlParserOutput {
    @Field()
    title:string;
    @Field()
    desciption:string;
    @Field()
    largestImageLink:string;
}