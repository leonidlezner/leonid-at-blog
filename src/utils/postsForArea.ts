export default function postsForArea(
  posts: Record<string, any>[],
  area: string
) {
  const filteredPath = `src/posts/${area}/`;

  return posts
    .sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate).valueOf() -
        new Date(a.frontmatter.pubDate).valueOf()
    )
    .filter(
      (post) => post.file.includes(filteredPath) && !post.frontmatter.draft
    );
}
