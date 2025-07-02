"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUsername = void 0;
exports.getUsernames = getUsernames;
exports.getNewUsernameForm = getNewUsernameForm;
const express_validator_1 = require("express-validator");
const queries_1 = require("../db/queries");
async function getUsernames(req, res) {
    const usernames = await (0, queries_1.getAllUsernames)();
    res.render("index", { usernames });
}
function getNewUsernameForm(req, res) {
    res.render("form");
}
const validateUsername = [
    (0, express_validator_1.body)("username")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Username must be at least 3 characters long")
        .isAlphanumeric()
        .withMessage("Username must contain only letters and numbers"),
];
const createNewUsername = [
    validateUsername,
    async (req, res) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", { errors: errors.array() });
        }
        const { username } = req.body;
        await (0, queries_1.insertUsername)(username);
        res.redirect("/");
    },
];
exports.createNewUsername = createNewUsername;
