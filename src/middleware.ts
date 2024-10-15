import { auth } from "@/app/auth";
import { NextRequest } from "next/server";

export default auth((req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  if (pathname.startsWith("/admin")) {
    console.log("i am middleware", pathname, req.nextUrl.password);
  }
});

// export const middleware = auth(function middleware(req: NextRequest) {
//   console.log("I am middleware", pathname);
// });

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
