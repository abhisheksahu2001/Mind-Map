import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import db from "@astrojs/db";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), db(), tailwind()]
});