"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsernames = getAllUsernames;
exports.insertUsername = insertUsername;
const pool_1 = __importDefault(require("./pool"));
async function getAllUsernames() {
    const { rows } = await pool_1.default.query("SELECT * FROM usernames");
    return rows;
}
async function insertUsername(username) {
    await pool_1.default.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}
