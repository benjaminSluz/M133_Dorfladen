"use strict";
import { Application } from "./deps.js";
import { router } from "./Frontend/router.js";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });