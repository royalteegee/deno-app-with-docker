import { serve } from "https://deno.land/std/http/server.ts";

serve((req) => new Response("WELCOME!!! Your application is a SUCCESS!"), {
  port: 8080,
});

console.log(`HTTP server is running at: http://localhost:8080/`);
