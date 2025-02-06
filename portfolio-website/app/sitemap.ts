import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.azicode.com.br/",
      lastModified: new Date().toISOString(),
    },
  ];
}
