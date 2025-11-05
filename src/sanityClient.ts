// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

export const client = createClient({
  projectId: "vs7qjh2w",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image | string) => builder.image(source);
