import { Router } from "express";

const router = Router();

// create user
router.post("/", (req, res) =>
  res.status(501).json({ error: "Not Implemented" })
);

// get one user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// upd user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// del user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented ${id}` });
});
// list users
router.get("/", (req, res) =>
  res.status(501).json({ error: "Not Implemented" })
);

export default router;
