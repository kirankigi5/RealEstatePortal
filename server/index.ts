import type { Request, Response, NextFunction } from "express";
import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic, log } from "./vite";
import path from "path"; // <-- Add this import


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

registerRoutes(app);

// --- Safe favicon handler ---
app.get('/favicon.ico', (req, res) => {
  const faviconPath = path.resolve(process.cwd(), 'dist', 'favicon.ico');
  res.sendFile(faviconPath, err => {
    if (err) res.status(204).end(); // No Content if missing
  });
});
// ----------------------------

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

serveStatic(app);

export default app;

// ✅ ES module-safe check
if (import.meta.url === `file://${process.argv[1]}`) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
}