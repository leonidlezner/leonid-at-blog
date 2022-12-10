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
  if (!area || !Settings.areas.includes(area)) {
    throw new Error("Area not found in file path");
  } else {
    return area;
  }
}

export function updatePostData(post: any, area: string) {
  post.frontmatter.url = `/${post.frontmatter.area}/${post.frontmatter.slug}`;
  post.frontmatter.area = area;
  post.frontmatter.excerpt = postExcerpt(post.compiledContent());
  return post;
}
