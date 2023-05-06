import { Router } from "express";

const router = Router();

// create tweet
router.post("/", (req, res) =>
  res.status(501).json({ error: "Not Implemented" })
);

// get one tweet
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// upd tweet
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// del tweet
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented ${id}` });
});
// list tweet
router.get("/", (req, res) =>
  res.status(501).json({ error: "Not Implemented" })
);

export default router;
