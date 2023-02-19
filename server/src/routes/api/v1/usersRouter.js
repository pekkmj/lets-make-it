import express from "express";
import passport from "passport";
import { User } from "../../../models/index.js";
import UserSerializer from "../../../serializers/UserSerializer.js";

const usersRouter = new express.Router();

usersRouter.post("/", async (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ username, email, password });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ errors: error });
  }
});

usersRouter.get("/:username", async (req, res) => {
  const { username } = req.params
  try {
    const user = await User.query().findOne({username})
    const serializedUser = await UserSerializer.getSummary(user)
    return res.status(200).json({ user: serializedUser })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default usersRouter;
