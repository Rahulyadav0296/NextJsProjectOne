function BlogPostPage({ params }) {
  return (
    <main>
      <p>Blog post</p>
      <p>{params.slug}</p>
    </main>
  );
}

export default BlogPostPage;
