import { FastifyInstance } from "fastify";
import {
  createUser,
  login,
  getAllUsers,
  refreshToken,
  resetPassword,
} from "../controllers/userController";

async function userRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/register",
    handler: createUser,
  });
  fastify.route({
    method: "POST",
    url: "/login",
    handler: login,
  });
  fastify.route({
    method: "POST",
    url: "/refresh-token",
    handler: refreshToken,
  });
  fastify.route({
    method: "POST",
    url: "/reset-password",
    handler: resetPassword,
  });
  fastify.route({
    method: "GET",
    url: "/user",
    handler: getAllUsers,
  });
}

export default userRoutes;
