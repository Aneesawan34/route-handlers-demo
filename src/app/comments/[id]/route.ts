import { comments } from "../data";
interface PARAMS {
  params: { id: string };
}
export async function PUT(request: Request, { params }: PARAMS) {
  const body = await request.json();
  const _id = Number(params.id);
  let indexOfObject = comments.findIndex((val) => val.id == _id);
  if (indexOfObject === -1) {
    return Response.json(comments);
  } else {
    const updatedComment = { id: _id, text: body.text };
    comments[indexOfObject] = updatedComment;
    return Response.json(updatedComment);
  }
}

export async function DELETE(_request: Request, { params }: PARAMS) {
  const _id = Number(params.id);
  let indexOfObject = comments.findIndex((val) => val.id == _id);
  if (indexOfObject === -1) {
    return Response.json(comments);
  } else {
  }
  const deletedObject = comments[indexOfObject];
  comments.splice(indexOfObject, 1);
  return Response.json(deletedObject);
}
