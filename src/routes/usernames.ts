import { Router } from "express";
import {
  getUsernames,
  getNewUsernameForm,
  createNewUsername,
} from "../controllers/usernames";

const router = Router();

router.get("/", getUsernames);
router.get("/new", getNewUsernameForm);
router.post("/new", ...createNewUsername);

export default router;
