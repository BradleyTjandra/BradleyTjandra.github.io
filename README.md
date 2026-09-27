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

## brad.tj short domain

`brad.tj` is a separate domain (DNS/redirects managed in Cloudflare, not this
repo) that mirrors paths onto this site, e.g. `brad.tj/blog/your-job` →
`https://bradleytjandra.com/blog/your-job`.

This is done with a Cloudflare Worker, `brad-tj-redirect`, routed on
`*brad.tj/*`. By default it 301s any request to the same path on
bradleytjandra.com (query string included). It also supports one-off
overrides to send specific paths somewhere else entirely (e.g. a future
`brad.tj/twitter` → a Twitter profile) — see the `overrides` object in the
Worker's code, editable at Cloudflare dashboard → Workers & Pages →
`brad-tj-redirect` → Edit code.

The zone's old "redirect to bradleytjandra" Redirect Rule (a blanket
domain-level forward that dropped the path) has been disabled in favor of
the Worker, but left in place, disabled, as a fallback.

## Local preview

Requires Ruby. Then:

```bash
bundle install
bundle exec jekyll serve
```

Site serves at http://localhost:4000.
