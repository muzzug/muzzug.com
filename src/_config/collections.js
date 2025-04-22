export const blog_cz = (collection) => {
  const posts = collection
    .getFilteredByGlob("src/cs/blog/*/*.md")
    .filter(post => !post.data.rssOnly)
    .sort((a, b) => b.date - a.date);
    
  
  // Group posts by year
  const groupedByYear = posts.reduce((acc, post) => {
    const year = post.date.getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  
  // Extract tags and count occurrences
  const tagCounts = posts.reduce((acc, post) => {
    const tags = post.data.tags || [];
    tags.forEach(tag => {
      if (!acc[tag]) acc[tag] = 0;
      acc[tag]++;
    });
    return acc;
  }, {});

  // Sort tags alphabetically
  const tags = Object.entries(tagCounts)
    .sort(([tagA], [tagB]) => tagA.localeCompare(tagB))
    .map(([tag, count]) => ({ tag, count }));

  // Return grouped posts by year and the tags with counts
  return {
    groupedByYear: Object.entries(groupedByYear).sort((a, b) => b[0] - a[0]),
    tags, // Tags with their counts
  };
};

export const blog_en = (collection) => {
  const posts = collection
    .getFilteredByGlob("src/en/blog/*/*.md")
    .filter(post => !post.data.rssOnly)
    .sort((a, b) => b.date - a.date);  

  // Group posts by year
  const groupedByYear = posts.reduce((acc, post) => {
    const year = post.date.getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  // Extract tags and count occurrences
  const tagCounts = posts.reduce((acc, post) => {
    const tags = post.data.tags || [];
    tags.forEach(tag => {
      if (!acc[tag]) acc[tag] = 0;
      acc[tag]++;
    });
    return acc;
  }, {});

  // Sort tags alphabetically
  const tags = Object.entries(tagCounts)
    .sort(([tagA], [tagB]) => tagA.localeCompare(tagB))
    .map(([tag, count]) => ({ tag, count }));

  // Return grouped posts by year and the tags with counts
  return {
    groupedByYear: Object.entries(groupedByYear).sort((a, b) => b[0] - a[0]),
    tags, // Tags with their counts
  };
};

// RECENT POSTS

export const recentPosts_cz = (collection) => {
  const posts = collection
    .getFilteredByGlob("src/cs/blog/*/*.md")
    .sort((a, b) => b.date - a.date)
    .slice(0, 5); // Get the last 5 posts
  return posts;
};

export const recentPosts_en = (collection) => {
  const posts = collection
    .getFilteredByGlob("src/en/blog/*/*.md")
    .sort((a, b) => b.date - a.date)
    .slice(0, 5); // Get the last 5 posts
  return posts;
};


// RSS
  
  export const rss_cz = (collection) => {
    return collection.getFilteredByGlob("src/cs/blog/*/*.md").sort((a, b) => b.date - a.date);
  };
  
  export const rss_en = (collection) => {
    return collection.getFilteredByGlob("src/en/blog/*/*.md").sort((a, b) => b.date - a.date);
  };

