declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    NEXT_SECRET: string;
    NEXT_PUBLIC_API_URI: string;
    NEXTAUTH_URL: string;
  }
}
