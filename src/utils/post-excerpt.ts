export default function postExcerpt(postContent: string) {
  const endOfExcerpt = postContent.indexOf("<!-- excerpt -->");

  if (endOfExcerpt > 0) {
    const excerpt = postContent.slice(0, endOfExcerpt);
    return excerpt;
  } else {
    return undefined;
  }
}
