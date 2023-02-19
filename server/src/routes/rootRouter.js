import express from "express";
import edamamRouter from "./api/v1/edamamRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import ingredientsRouter from "./api/v1/ingredientsRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/recipes", edamamRouter)
rootRouter.use("/api/v1/ingredients", ingredientsRouter)

//place your server-side routes here

export default rootRouter;
