import { resolve } from "path";
import { Environment, EnvTypes } from "./types";

export default (): EnvTypes => {
    const environment = process.env.NODE_ENV as Environment || "development";
    return {
        port: parseInt(process.env.PORT || "3000", 10),
        database: {
            host: environment !== 'development' ? process.env.DB_HOST || 'postgres' : "localhost",
            port: parseInt(process.env.DB_PORT || "5432", 10),
            user: process.env.DB_USER || "gofapay",
            password: process.env.DB_PASSWORD || "gofapay",
            name: process.env.DB_NAME || "gofapay",
        },
        secret: process.env.SECRET || "secret",
        environment,
        emailApikey: process.env.EMAIL_API_KEY || "",
        smsApikey: process.env.SMS_API_KEY || "",
        appUrl: process.env.APP_URL || "https://gofapay-backecnd-qa.herokuapp.com",
        appEmail: process.env.APP_EMAIL || "gofapay@gmail.com",
        defaultSendingEmailAddress: process.env.DEFAULT_SENDING_EMAIL_ADDRESS || "",
        mailgunDomain: process.env.MAILGUN_DOMAIN || "",
        rootDir: resolve(__dirname, "../../"),
        workDir: resolve(__dirname, "../"),
        uploadDir: resolve(__dirname, "../", "upload"),
        cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
        cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || "",
        cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || 'gofapay'
    }
};