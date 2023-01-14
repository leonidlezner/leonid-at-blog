import {
  filterAndSortPosts,
  getArea,
  updatePostData,
} from "../utils/postsUtils";

import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";

import Settings from "../settings.json";

const postImportResult = import.meta.glob<true, string, any>(
  "../posts/**/*.{md,mdx}",
  {
    eager: true,
  }
);

const posts = filterAndSortPosts(Object.values(postImportResult));

export const get = () =>
  rss({
    title: Settings.name,
    description: Settings.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => {
      const area: string = getArea(post.file);
      const updatedPost = updatePostData(post, area);
      return {
        link: updatedPost.frontmatter.url,
        title:
          "[" +
          Settings.titles[`posts-${area}` as keyof typeof Settings.titles] +
          "] " +
          updatedPost.frontmatter.title,
        pubDate: updatedPost.frontmatter.pubDate,
        content: sanitizeHtml(post.frontmatter.excerpt),
      };
    }),
  });
