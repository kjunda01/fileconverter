// logger.ts
import { Request, Response, NextFunction } from "express";
import chalk from "chalk";

// Middleware de logging
export const logger = (req: Request, res: Response, next: NextFunction) => {
  const now = new Date();
  const dia = String(now.getDate()).padStart(2, "0");
  const mes = String(now.getMonth() + 1).padStart(2, "0"); // meses vão de 0-11
  const ano = now.getFullYear();
  const hora = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const seg = String(now.getSeconds()).padStart(2, "0");

  const formattedDate = `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;

  // Pega IP real do cliente, considerando proxy
  const ip = req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.ip;

  console.log(chalk.green(`[${formattedDate}]`) + chalk.yellow(` [${ip}]`) + ` ${req.method} ${req.url}`);

  next();
};
