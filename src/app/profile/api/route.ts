import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const requestCookies = request.cookies;
  const _requestHeaders = headers();
  const _requestCookies = cookies();
  _requestCookies.set("theme", "dark");
  console.log("headers from request: ", requestHeaders.get("Authorization"));
  console.log("cookies from request: ", requestCookies.get("theme"));
  console.log(
    "headers from next/headers: ",
    _requestHeaders.get("Authorization")
  );
  console.log("cookies from next/header", _requestCookies.get("theme"));
  return new Response("<h1>Profile Route</h1>", {
    headers: {
      "Content-Type": "text/html",
      //   "set-cookie": "theme=dark",
    },
  });
}
