import { type NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filterComments);
}

export async function POST(request: Request) {
  const body = await request.json();
  const comment = {
    id: comments.length + 1,
    text: body.text,
  };
  comments.push(comment);
  return Response.json(comment);
}
