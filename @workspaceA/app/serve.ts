import { createServer } from "vite";

/**
 * Run Vite development server
 */
export const developApp = async (): Promise<void> => {
  const server = createServer({});
  const port = process.env.PORT || 3000;

  await server.listen(port);

  console.log(`development server @ http://localhost:${port}`);
};

developApp();
