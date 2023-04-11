import { Router } from "express";

const router = Router();

router.get("/ping", async (req, res) => {
  res.json("Pong!!");
});

export default router;
