async function test() {
  const res = await fetch("https://devhun-server.vercel.app/jwt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "test@example.com" })
  });
  console.log(res.status);
  const text = await res.text();
  console.log(text);
}
test();
