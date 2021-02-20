import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class webpageParserOutput {
    @Field()
    title: string;
    @Field()
    description: string;
    @Field()
    largestImage: string;
}
