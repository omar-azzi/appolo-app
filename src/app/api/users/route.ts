

// http://localhost:3000/api/users

export async function GET(request: any) {
  const users = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return new Response(JSON.stringify(users));
}
