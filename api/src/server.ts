import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express()

app.use(express.json())
app.use(cors({ origin: true }))

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
export default app;