export function GET() {
  return Response.json(
    {
      api: {
        version: "1.0.0",
      },
    },
    { status: 200 }
  );
}
