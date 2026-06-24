# Editorial Motion Polish

## Objective

Polish the complete Israel Shmueli legal landing page with a soft paper surface and restrained motion inspired by the interaction principles of Austin Knight's portfolio, while preserving the site's full content, navigation, SEO, contact information, project links, and approved brand assets.

## Visual Direction

- Add a low-contrast paper grain over the full page using a fixed, pointer-transparent texture layer.
- Keep the existing sky-blue, pale-blue, charcoal, and white palette. The approved burgundy detail remains confined to the logo assets.
- Preserve the current image-led hero, centered layout, Hebrew typography, and legal-office tone.
- Avoid decorative blobs, large gradients, card nesting, and portfolio-style visual spectacle.

## Motion System

- Introduce section and item reveals using `IntersectionObserver`: 12-16px vertical travel, a small blur, and a 650-750ms eased transition.
- Stagger repeated service, project, fact, source, and contact items by 45-60ms.
- Apply very slow hero-image parallax and a subtle floating response to the IS mark. Movement must remain under 5% of the element size.
- Add a compact scrolled state to the sticky header with a quiet shadow and slightly reduced logo scale.
- Add restrained hover feedback to buttons, cards, links, and project blocks using border, shadow, and 2-4px translation changes.
- Use native CSS and JavaScript only. No animation framework or smooth-scroll library will be added.

## Accessibility And Performance

- Respect `prefers-reduced-motion: reduce`: disable parallax, reveal travel, floating animation, and smooth transitions.
- Do not hide readable content when JavaScript is unavailable. Reveal classes are applied only after the motion script initializes.
- Keep the texture non-interactive and low-opacity; it must not reduce text contrast.
- Avoid layout shifts by animating only `transform`, `opacity`, `filter`, and shadows.

## Implementation Shape

- Add `motion.css` after the existing stylesheet.
- Add deferred `motion.js` before the closing body tag.
- Keep motion behavior isolated from the content and base layout files.
- Apply motion targets programmatically to existing semantic sections and repeated items.

## Verification

- Verify desktop at approximately 1280x900 and mobile at approximately 390x844.
- Confirm no horizontal overflow, clipped Hebrew text, missing logo assets, or console errors.
- Confirm the site remains usable with JavaScript disabled and with reduced motion enabled.
- Publish to GitHub Pages and verify the live HTML, CSS, JavaScript, favicon, and logo assets return HTTP 200.

## Non-Goals

- No content rewrites, new factual claims, page routes, CMS, forms, or framework migration.
- No imitation of Austin Knight's branding, typography, or exact compositions.
