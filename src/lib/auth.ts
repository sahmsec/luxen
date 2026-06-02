import { betterAuth } from "better-auth";
import { db, mongoClient } from "./mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    trustHost: true,
    database: mongodbAdapter(db, { client: mongoClient }),
    user: {
        additionalFields: {
            phoneNumber: { type: "string", required: false },
            address: { type: "string", required: false },
            city: { type: "string", required: false },
            zipCode: { type: "string", required: false },
        }
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }
    },
    secret: process.env.BETTER_AUTH_SECRET,
});
