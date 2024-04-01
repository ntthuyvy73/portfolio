import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "YOUR_PROJECT_ID",
    dataset: "production",
    apiVersion: "2024-01-01",
    // unless you have caching for your front end, `useCdn` should be `true` for most production environments
    useCdn: true,
});
