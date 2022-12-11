import Settings from "../settings.json";
import postExcerpt from "./post-excerpt";

export function filterAndSortPosts(posts: Record<string, any>[]) {
  return posts
    .sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate).valueOf() -
        new Date(a.frontmatter.pubDate).valueOf()
    )
    .filter((post) => !post.frontmatter.draft);
}

export function getArea(path: string): string {
  const area = path.match(/\/src\/posts\/([a-z]+)\//)?.[1];

  // Check the white list of areas
  if (area == undefined || !Settings.areas.includes(area)) {
    throw new Error("Area not found in file path");
  } else {
    return area;
  }
}

export function updatePostData(post: any, area: string) {
  post.frontmatter.area = area;
  post.frontmatter.url = `/${area}/${post.frontmatter.slug}`;
  post.frontmatter.excerpt = postExcerpt(post.compiledContent());

  if (post.frontmatter.pubDate == undefined) {
    throw new Error("Post has no pubDate: " + post.file);
  }

  if (post.frontmatter.slug == undefined) {
    throw new Error("Post has no slug: " + post.file);
  }

  if (post.frontmatter.title == undefined) {
    throw new Error("Post has no title: " + post.file);
  }

  return post;
}
