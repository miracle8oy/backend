import fastify from "fastify";
import dotenv from "dotenv";
import multer from "fastify-multer";
import cors from "@fastify/cors";

import userRoutes from "./routes/userRoute";

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

const app = fastify({
  logger: {
    level: "info",
    serializers: {
      req(request) {
        return {
          method: request.method,
          url: request.url,
        };
      },
    },
  },
});

dotenv.config();
app.register(cors, { origin: "*" });
app.register(multer.contentParser);

app.decorateRequest("email", "");
app.decorateRequest("id", 0);

// register route
app.register(userRoutes);

app.get("/", async (req, rep) => {
  rep.type("application/json").code(200);
  return {
    status: true,
    message: "Ping!",
  };
});

app.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(
    `
🚀 Server ready at: ` + address
  );
});
