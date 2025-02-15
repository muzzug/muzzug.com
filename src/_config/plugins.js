import { EleventyI18nPlugin } from "@11ty/eleventy";
import rssPlugin from "@11ty/eleventy-plugin-rss";

// Exporting plugins
export const i18nPlugin = (eleventyConfig) => {
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
      defaultLanguage: "cs",  
      errorMode: 'allow-fallback'
    });
  };


export const rss = rssPlugin;
