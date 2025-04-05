import express from "express";
import userDetails from "../Database/UserDB.json" with { type: "json" };
import crypto from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";

const router = express.Router();

router.get("/student", async (req, res) => {

  

})

router.post("/login", async (req, res) => {
  

})


export default router;