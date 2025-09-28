export async function POST(req) {
  const body = await req.json();

  console.log("Webhook event:", body);

  return new Response("ok", { status: 200 });
}