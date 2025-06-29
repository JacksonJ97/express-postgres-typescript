"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usernames_1 = require("../controllers/usernames");
const router = (0, express_1.Router)();
router.get("/", usernames_1.getUsernames);
router.get("/new", usernames_1.getNewUsernameForm);
router.post("/new", ...usernames_1.createNewUsername);
exports.default = router;
