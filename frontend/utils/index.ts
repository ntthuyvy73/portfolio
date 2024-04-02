import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { createContext } from "react";

export const client = createClient({
    projectId: "mpninwyw",
    dataset: "production",
    apiVersion: "2024-03-26",
    useCdn: true,
    token: "skJvypCCSfysgVsVHvR4DzpMOou6fGdj7iiGiOwM2S3gP5Rb7yfzc24bYGd50IQ4OeQ70S7a52AhFR2P799K7ySJhvvVH783osv668fJgmxwQGERoDA4gXQ1JOTrE4ugDcR3jKABs7ro2l7plt9BijyPqMdh4Jq6a8kZ0dOlzxuz0OPXpRan",
});

const builder = imageUrlBuilder(client);

export const getUrl = (source) => (source ? builder.image(source).url() : "");

export const LinkContext = createContext();