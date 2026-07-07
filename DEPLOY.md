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

Canonical public URL after DNS is connected:

`https://israelshmuelilaw.com/`

## Custom Domain

For stronger search presence, the site uses `israelshmuelilaw.com`.

Keep these files aligned with the final domain:

- canonical URL in `index.html`
- Open Graph URL in `index.html`
- `robots.txt`
- `sitemap.xml`
- JSON-LD `url` field in `index.html`

Then submit `https://israelshmuelilaw.com/` and `https://israelshmuelilaw.com/sitemap.xml` in Google Search Console.

## Wix Option

The current deliverable is plain HTML/CSS. It can be recreated manually in Wix Studio, or the domain can be managed through Wix while the static site is hosted on GitHub Pages, Netlify or Cloudflare Pages.

## Verify Before Launch

Check these details before sending the page to Google:

- Phone number: `050-476-6560`
- Email: `yisrael.shmueli@gmail.com`
- Address: `האשל 5, קיסריה`
- Project descriptions and external links
- Final domain in SEO files
