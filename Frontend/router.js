"use strict";
import { Router, renderFileToString } from "../deps.js";

const router = new Router();

router.get("/", async(context) => {
    try {
        context.response.body = await renderFileToString(
            Deno.cwd() + "/Frontend/main.ejs", {}
        );
        context.response.type = "html";
    } catch (error) {
        console.log(error);
    }
});

export { router };