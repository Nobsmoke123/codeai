import {
  generateResetPasswordEmail,
  generateVerifyEmailTemplate,
} from "@/utils/emails";
import { PrismaClient } from "@/utils/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    // sendResetPassword: async ({ user, url }) => {
    //   const html = generateResetPasswordEmail({
    //     username: user.name.toString().split(" ")[0],
    //     url,
    //   });

    //   const result = await resend.emails.send({
    //     from: "CodeAI <noreply@yourdomain.com>",
    //     to: user.email,
    //     subject: "CodeAI - Reset password",
    //     html,
    //   });

    //   console.log("The result is: ", result);
    // },
    // resetPasswordTokenExpiresIn: 3600,
    // revokeSessionsOnPasswordReset: true,
    autoSignIn: true,
    // requireEmailVerification: true,
  },
  emailVerification: {
    // sendVerificationEmail: async ({ user, url }) => {
    //   const html = generateVerifyEmailTemplate({ username: user.name, url });
    //   const result = await resend.emails.send({
    //     from: "CodeAI <noreply@yourdomain.com>",
    //     to: user.email,
    //     subject: "CodeAI - Verify email",
    //     html,
    //   });
    //   console.log("The result is: ", result);
    // },
    // sendOnSignUp: true,
    // autoSignInAfterVerification: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
