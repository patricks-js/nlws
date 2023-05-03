import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

import cors from "@fastify/cors";

const prisma = new PrismaClient();

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  });

  await fastify.register(cors, {
    origin: true
  });

  fastify.get("/pools/count", () => {
    prisma.pool.findMany();
    return { count: 1239174 };
  });

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
