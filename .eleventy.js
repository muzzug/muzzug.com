import * as collections from "./src/_config/collections.js";
import * as filters from "./src/_config/filters.js";
import * as plugins from "./src/_config/plugins.js";
import * as functions from "./src/_config/functions.js";


console.log("Registered Collections:", Object.keys(collections));
console.log("Registered Filters:", Object.keys(filters));
console.log("Registered Plugins:", Object.keys(plugins));
console.log("Registered Functions:", Object.keys(functions));



export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy('src/favicon.ico');

  console.log("Eleventy environment:", process.env.NODE_ENV);

  eleventyConfig.addGlobalData("env", process.env.NODE_ENV || "development");


  console.log("Recent posts:", collections.recentPosts_cz);


  // Collections

  for (const [name, collectionFn] of Object.entries(collections)) {
    eleventyConfig.addCollection(name, collectionFn);
  }

  // Filers

  Object.entries(filters).forEach(([name, filterFunction]) => {
    eleventyConfig.addFilter(name, filterFunction);
  });

  // Functions

  Object.entries(functions).forEach(([name, func]) => {
    eleventyConfig.addShortcode(name, func);
  });

  // Plugins
  
  Object.entries(plugins).forEach(([name, plugin]) => {
    eleventyConfig.addPlugin(plugin);
  });
  
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css',
  });


  

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
