
import { Router, Request, Response } from "express";

export const downloadRoutes = Router();

downloadRoutes.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
 