# Deployment Notes

## GitHub Pages

This site is static and can be served directly from GitHub Pages without a build step.

1. Upload/keep these files in the repository root:
   - `index.html`
   - `styles.css`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
2. In GitHub, open Settings -> Pages.
3. Set Source to `Deploy from a branch`.
4. Select branch `main` and folder `/root`.
5. Save and wait for the Pages URL to appear.

Expected temporary URL:

`https://orid-maker.github.io/israel-shmueli-site/`

## Custom Domain

For stronger search presence, use a real domain such as `israelshmueli.co.il` or another exact-name domain.

After choosing the final domain, update:

- canonical URL in `index.html`
- Open Graph URL in `index.html`
- `robots.txt`
- `sitemap.xml`
- JSON-LD `url` field in `index.html`

Then submit the final URL and sitemap in Google Search Console.

## Wix Option

The current deliverable is plain HTML/CSS. It can be recreated manually in Wix Studio, or the domain can be managed through Wix while the static site is hosted on GitHub Pages, Netlify or Cloudflare Pages.

## Verify Before Launch

Check these details before sending the page to Google:

- Phone number: `050-969-7280`
- Email: `yisrael.shmueli@gmail.com`
- Address: `האשל 5, קיסריה`
- Project descriptions and external links
- Final domain in SEO files
