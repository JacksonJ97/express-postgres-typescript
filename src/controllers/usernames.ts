import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { getAllUsernames, insertUsername } from "../db/queries";

async function getUsernames(req: Request, res: Response) {
  const usernames = await getAllUsernames();
  res.render("index", { usernames });
}

function getNewUsernameForm(req: Request, res: Response) {
  res.render("form");
}

interface CreateUsernameRequest extends Request {
  body: { username: string };
}

const validateUsername = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long")
    .isAlphanumeric()
    .withMessage("Username must contain only letters and numbers"),
];

const createNewUsername = [
  validateUsername,
  async (req: CreateUsernameRequest, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("form", { errors: errors.array() });
    }

    const { username } = req.body;
    await insertUsername(username);
    res.redirect("/");
  },
];

export { getUsernames, getNewUsernameForm, createNewUsername };
