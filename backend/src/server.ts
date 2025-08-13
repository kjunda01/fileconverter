import express from "express";
import { downloadRoutes } from "./routes/downloadRoutes";
import "@dotenvx/dotenvx/config";
import chalk from "chalk";

const app = express();

// Usar as rotas da home no path raiz
app.use("/download", downloadRoutes);

const PORT: number = parseInt(process.env.PORT || "3000", 10);
const HOST: string = process.env.HOST || "0.0.0.0";



app.listen(PORT, HOST, () => {
  console.log(chalk.blueBright(`🚀 Server rodando em http://${HOST}:${PORT}`));
});
