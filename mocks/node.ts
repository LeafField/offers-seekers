import { handler } from "./handler";
import { setupServer } from "msw/node";

export const server = setupServer(...handler);
