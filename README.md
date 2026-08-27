# bradleytjandra.com

Personal site, served by GitHub Pages from the `master` branch.

Most pages are plain static HTML (`index.html`, `cv/`, `anagram/`). The blog is
built with Jekyll.

## Adding a blog post

Create a file in `_posts/` named `YYYY-MM-DD-slug.md`:

```markdown
---
title: "Post title"
date: 2026-08-28
---

Body in Markdown.
```

It publishes at `/blog/slug/` and appears automatically on `/blog`.

## Local preview

Requires Ruby. Then:

```bash
bundle install
bundle exec jekyll serve
```

Site serves at http://localhost:4000.
