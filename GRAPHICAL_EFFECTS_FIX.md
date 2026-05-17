# Fixing Graphical Effects Not Showing in Firefox + Adblockers

This guide covers why the fonts and visual effects in this project break specifically on **Firefox with adblockers**, and exactly how to fix each one.

---

## Quick Diagnosis — Open DevTools First

Before anything else, open `http://localhost:3000` in Firefox, press **F12**, and check two things:

1. **Console tab** — Look for red errors. Anything mentioning `WebGL`, `getContext`, or `SecurityError` means Firefox's privacy features are blocking canvas/WebGL.
2. **Network tab** — Reload the page. Filter by `Font`. If you see `.woff2` requests returning `200`, fonts are loading. If you see no font requests at all, the bundle is broken.

---

## 1. LightRays (WebGL) — Blank Canvas

### What it is
`LightRays.js` uses `ogl` (a WebGL library) to render animated light rays onto a `<canvas>` element. This is the large ambient glow effect in the hero section.

### Why it's broken on Firefox + adblockers

**Firefox's fingerprinting protection kills WebGL.** This is the #1 cause.

Firefox has two levels of canvas/WebGL protection:

| Protection Level | Setting | Effect on WebGL |
|---|---|---|
| **Enhanced Tracking Protection (Strict)** | Settings → Privacy & Security → Strict | Blocks known fingerprinting scripts. May not block localhost WebGL, but some adblocker filter lists flag canvas usage. |
| **Resist Fingerprinting** | `about:config` → `privacy.resistFingerprinting` | **Injects noise into all canvas readback and can silently break WebGL context creation.** This is the most likely culprit. |

Adblockers like **uBlock Origin** in "hard mode" or with the **EasyPrivacy** + **Fanboy's Enhanced** filter lists can also block WebGL because it's used for browser fingerprinting.

### How to verify

Open the browser console (F12 → Console) and run:
```js
document.createElement('canvas').getContext('webgl') ? 'WebGL works' : 'WebGL BLOCKED'
```
If it returns `WebGL BLOCKED`, Firefox or your adblocker is killing it.

### How to fix

**Option A — Exempt localhost from fingerprinting protection (recommended for development)**

1. Navigate to `about:config` in Firefox
2. Search for `privacy.resistFingerprinting`
3. If it's `true`, either:
   - Set it to `false` (disables fingerprint resistance globally), OR
   - Add `localhost` to `privacy.resistFingerprinting.exemptedDomains` (comma-separated list)

**Option B — Disable adblocker for localhost**

1. Open your adblocker's dashboard (e.g., uBlock Origin → click the icon → the big power button)
2. Disable it for `localhost` specifically
3. Reload the page

**Option C — Click the shield icon in the address bar**

Firefox shows a shield icon (🛡) next to the URL. Click it and toggle **Enhanced Tracking Protection** off for this site. The page reloads automatically.

**Option D — Add a CSS/HTML fallback for when WebGL fails**

If the site needs to work for visitors who have strict privacy settings, add a static gradient fallback. In `App.css`, add:

```css
/* Fallback when WebGL canvas is empty */
.App-rays-background::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(
    ellipse 80% 70% at 50% 100%,
    rgba(255, 77, 0, 0.08) 0%,
    rgba(255, 77, 0, 0.03) 30%,
    transparent 70%
  );
  pointer-events: none;
}
```

This will show a soft orange glow even when WebGL is blocked. The real WebGL canvas (z-index: 3) renders on top when it works.

---

## 2. ParticleField (Canvas 2D) — Invisible Dots

### What it is
`ParticleField.js` draws small orange dots rising upward using the Canvas 2D API. Used in the Signal and Identity sections.

### Why it might be broken

Canvas 2D drawing (`.arc()`, `.fill()`) is **not** blocked by fingerprinting protection — only readback methods like `toDataURL()` and `getImageData()` are affected. So this component should work even with strict privacy settings.

If particles are invisible, the likely cause is that the **parent container has zero height**, making the canvas 0×0 pixels.

### How to verify

In DevTools, find a `.particle-field` element inside `.App-signal-section`. Check its computed height. If it's `0`, the positioning is wrong.

### How to fix

The `.particle-field` CSS uses `position: absolute; inset: 0` which means it relies on its parent having `position: relative` (or any non-`static` positioning). Check that `.App-signal-section` and `.App-identity-section` have `position: relative` set in `App.css`:

```css
.App-signal-section {
  /* ...existing styles... */
  position: relative;  /* ← must be present for particle-field to fill the section */
}

.App-identity-section {
  /* ...existing styles... */
  position: relative;  /* ← same here */
}
```

Both of these already have `position: relative` in the current `App.css`. If particles are still invisible, the issue is the IntersectionObserver threshold — the particles only start rendering when 10% of the container is visible. Scroll the section into view and wait a moment.

---

## 3. BorderGlow (Card Hover Glow) — No Glow on Hover

### What it is
`BorderGlow.js` + `BorderGlow.css` create a colored edge glow that follows your cursor when you hover over feature cards.

### Why it's broken

There are two CSS issues in `BorderGlow.css` that affect Firefox:

#### Issue A — Missing `-webkit-mask-image` on `::before` and `.edge-light`

The `::after` pseudo-element has both `mask-image` and `-webkit-mask-composite`, but the `::before` and `.edge-light` rules only have unprefixed `mask-image` with **no** `-webkit-mask-image` fallback.

While modern Firefox (53+) supports the unprefixed `mask-image`, **older Firefox and some mobile browsers** may still need both properties. More importantly, if your browser applies the CSS in a context where only `-webkit-` prefixed masking is respected (e.g. inside `isolation: isolate` stacking contexts), the mask silently fails.

**Fix:** Add `-webkit-mask-image` alongside every `mask-image` in `BorderGlow.css`:

For `::before` (around line 61):
```css
  -webkit-mask-image:
    conic-gradient(
      from var(--cursor-angle) at center,
      black calc(var(--cone-spread) * 1%),
      transparent calc((var(--cone-spread) + 15) * 1%),
      transparent calc((100 - var(--cone-spread) - 15) * 1%),
      black calc((100 - var(--cone-spread)) * 1%)
    );
  mask-image:
    conic-gradient(
      from var(--cursor-angle) at center,
      black calc(var(--cone-spread) * 1%),
      transparent calc((var(--cone-spread) + 15) * 1%),
      transparent calc((100 - var(--cone-spread) - 15) * 1%),
      black calc((100 - var(--cone-spread)) * 1%)
    );
```

For `::after` (around line 83), add `-webkit-mask-image` with the same value as `mask-image`:
```css
  -webkit-mask-image:
    linear-gradient(to bottom, black, black),
    radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%),
    radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%),
    radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%),
    radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%),
    radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%),
    conic-gradient(from var(--cursor-angle) at center, transparent 5%, black 15%, black 85%, transparent 95%);
  mask-image:
    /* ...same as current... */;
```

For `.edge-light` (around line 103):
```css
  -webkit-mask-image:
    conic-gradient(
      from var(--cursor-angle) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%
    );
  mask-image:
    conic-gradient(
      from var(--cursor-angle) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%
    );
```

#### Issue B — `mix-blend-mode: plus-lighter` not supported in Firefox < 118

The `.edge-light` rule uses `mix-blend-mode: plus-lighter` (line 109). This was added to Firefox in version **118** (September 2023). If you're on an older Firefox, this property is silently ignored and the entire edge glow layer becomes invisible because the blend mode defaults to `normal`, which changes how the semi-transparent glow composites.

**Fix:** Add a fallback:
```css
.border-glow-card > .edge-light {
  /* ...existing styles... */
  mix-blend-mode: screen;           /* fallback for older browsers */
  mix-blend-mode: plus-lighter;     /* modern browsers override the line above */
}
```

---

## 4. GradualBlur (Frosted Blur at Section Edges) — Missing Blur

### What it is
`GradualBlur.js` places layered `<div>` elements with `backdrop-filter: blur()` at the bottom of sections to create a frosted glass fade-out effect.

### Why it's broken on Firefox

**`backdrop-filter` may be disabled in your Firefox.**

Firefox has supported `backdrop-filter` since version 103 (July 2022), but some Firefox configurations (especially hardened profiles like those from `arkenfox/user.js`) disable it via `about:config`.

### How to verify

In DevTools → Console, run:
```js
CSS.supports('backdrop-filter', 'blur(1px)') ? 'backdrop-filter works' : 'backdrop-filter DISABLED'
```

### How to fix

1. Go to `about:config`
2. Search for `layout.css.backdrop-filter.enabled`
3. Set it to `true`
4. Reload the page

If you cannot change this setting (e.g. for your site's visitors), the existing fallback in `GradualBlur.css` is already in place:
```css
@supports not (backdrop-filter: blur(1px)) {
  .gradual-blur-inner > div {
    background: rgba(0, 0, 0, 0.3);
    opacity: 0.5;
  }
}
```
This provides a semi-transparent overlay instead of a true blur when `backdrop-filter` is unsupported.

---

## 5. ShinyText (Headline Shimmer) — Frozen/No Animation

### What it is
`ShinyText.js` creates a moving shine effect on the hero headline text using a `linear-gradient` background with `background-clip: text`.

### Why it might not animate

#### Cause A — `prefers-reduced-motion` is enabled

If your Linux desktop has "Reduce Motion" / "Reduce Animation" enabled (GNOME: Settings → Accessibility → Seeing), Firefox tells websites to skip animations. The `motion` library (Framer Motion) respects this system setting and may throttle or skip `useAnimationFrame`.

**Fix:** Check your OS accessibility settings and turn off reduced motion for development, OR add this override in `index.css`:
```css
@media (prefers-reduced-motion: reduce) {
  /* Override reduced motion for this site's text effects */
  .shiny-text {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### Cause B — Text is visible but not shimmering

The shine is created via `background-clip: text` + `WebkitTextFillColor: transparent`. Firefox has supported `background-clip: text` unprefixed since **version 120** (November 2023). If you're on Firefox 119 or older, the text gradient won't clip to the text shape — it'll just be invisible or show the gradient behind the text.

**Fix:** Update Firefox to 120+, or add the prefix in `ShinyText.js` (already present in the code: `WebkitBackgroundClip: 'text'`).

---

## 6. Fonts (Space Grotesk / Space Mono) — Wrong Font Rendering

### Current state

The fonts are already self-hosted via `@fontsource/space-grotesk` and `@fontsource/space-mono` npm packages, imported in `src/index.js`. The Google Fonts CDN links have been removed from `index.html`. The `.woff2` files are bundled into the webpack output and served from localhost.

**Fonts should work regardless of adblockers.** They are served from the same origin as the app (localhost), not from a third-party CDN.

### If fonts still look wrong

1. **Hard refresh:** Press `Ctrl+Shift+R` to bypass cache
2. **Verify in DevTools:** Elements → select any heading → Computed tab → search "font-family". It should say `Space Grotesk`. If it says `system-ui` or `sans-serif`, the font isn't loading.
3. **Check the Network tab:** Filter by "Font" or "woff2". You should see 7 font files loading (5 Space Grotesk weights + 2 Space Mono weights). If they're missing, run `npm install` and restart the dev server.

---

## 7. Summary — What To Do Right Now

### Step 1: Firefox settings (30 seconds)

Open `about:config` and check these three settings:

| Setting | Required Value | What it fixes |
|---|---|---|
| `privacy.resistFingerprinting` | `false` | WebGL (LightRays), Canvas (ParticleField) |
| `layout.css.backdrop-filter.enabled` | `true` | GradualBlur |
| `webgl.disabled` | `false` | LightRays |

### Step 2: Adblocker (10 seconds)

Click the **shield icon** 🛡 in Firefox's address bar next to `localhost:3000` → turn off Enhanced Tracking Protection for this site. Or disable your adblocker for localhost.

### Step 3: Hardware acceleration (check once)

Firefox Settings → General → Performance → uncheck "Use recommended performance settings" → ensure "Use hardware acceleration when available" is **checked**.

### Step 4: Hard refresh

Press `Ctrl+Shift+R` to clear cached assets and reload.

### Step 5: Code fixes (if targeting Firefox users in production)

If the site needs to work for visitors with strict privacy settings:

1. Add the `-webkit-mask-image` prefixes to `BorderGlow.css` (see Section 3 above)
2. Add the `mix-blend-mode: screen` fallback to `BorderGlow.css` (see Section 3 above)
3. Add the static gradient fallback to `App.css` for when WebGL fails (see Section 1 above)
4. The `GradualBlur.css` fallback for `backdrop-filter` is already in place — no change needed

---

## 8. Firefox Version Requirements

All effects in this project require a modern Firefox. Here are the minimum versions:

| Feature | CSS/API Used | Min Firefox Version |
|---|---|---|
| LightRays | WebGL | 4+ (but privacy settings can block it) |
| BorderGlow | `conic-gradient()`, `mask-composite` | 83+ |
| BorderGlow edge glow | `mix-blend-mode: plus-lighter` | **118+** |
| GradualBlur | `backdrop-filter` | **103+** |
| ShinyText | `background-clip: text` (unprefixed) | **120+** |
| ParticleField | Canvas 2D | All versions |
| Fonts | `@font-face` + woff2 | All modern versions |

**Recommended: Firefox 120+** to see all effects correctly.
