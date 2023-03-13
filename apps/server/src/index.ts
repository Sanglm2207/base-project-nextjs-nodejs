import Fastify from "fastify";

const PORT = parseInt(process.env.PORT ?? "8080");

const fastify = Fastify();

fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server is listening at ${address}`);
});
