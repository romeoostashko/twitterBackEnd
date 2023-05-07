import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// create user!
router.post("/", async (req, res) => {
  try {
    const { email, name, username } = req.body;

    const result = await prisma.user.create({
      data: { email, name, username, bio: "Hi everyone" },
    });
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
});

// get one user!
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: Number(id) } });
  res.json(user);
});

// upd user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { bio, name, image } = req.body;
  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: { bio, name, image },
    });
    res.json(result);
  } catch (e) {
    res.status(400).json(e);
  }
});

// del user!
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await prisma.user.delete({ where: { id: Number(id) } });
    res.status(204).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
});
// list users!
router.get("/", async (req, res) => {
  const allUser = await prisma.user.findMany();
  res.status(200).json(allUser);
});

export default router;
