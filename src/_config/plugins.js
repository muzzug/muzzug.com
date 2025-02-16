import { EleventyI18nPlugin } from "@11ty/eleventy";
import rssPlugin from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

// Exporting plugins
export const i18nPlugin = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "cs",
    errorMode: "allow-fallback",
  });
};

export const rss = rssPlugin;

// Markdown plugin with footnotes support
export const markdownPlugin = {
  initArguments: {},
  configFunction: (eleventyConfig) => {
    let markdownLib = markdownIt({ html: true }).use(markdownItFootnote);
    eleventyConfig.setLibrary("md", markdownLib);
  },
};

// Syntax highlighting plugin
export const syntaxHighlightPlugin = syntaxHighlight;
