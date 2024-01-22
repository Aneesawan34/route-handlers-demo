import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
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
