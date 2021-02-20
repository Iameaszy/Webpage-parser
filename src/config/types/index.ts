export type DatabaseTypes = {
    host: string,
    port: number,
    user: string,
    password: string,
    name: string,
}

export enum Environment {
    qa = "qa",
    development = "development",
    production = "production",
    staging = "staging"
}
//export type Environment = "qa" | "development" | "production" | "staging";

export type EnvTypes = {
    emailApikey: string;
    smsApikey: string;
    port: number;
    database: DatabaseTypes;
    secret: string;
    environment: Environment;
    appUrl: string;
    appEmail: string;
    defaultSendingEmailAddress: string;
    mailgunDomain: string;
    rootDir: string;
    workDir: string;
    uploadDir: string;
    cloudinaryApiKey: string;
    cloudinaryApiSecret: string;
    cloudinaryCloudName: string;
}
