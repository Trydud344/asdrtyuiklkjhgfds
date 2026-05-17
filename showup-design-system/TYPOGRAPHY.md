# ShowUp — TYPOGRAPHY.md

## Font Choices

**Space Grotesk** is the brand's voice — a geometric sans-serif with just enough irregularity to avoid sterility. It carries the precision of technical documentation and the personality of contemporary editorial design. At display sizes, it feels architectural and authoritative; at body sizes, it remains highly legible without becoming anonymous. It was chosen because it holds the tension between corporate competence and underground credibility — it looks like it could appear on a government form or a protest poster, and that ambiguity is the point.

**Space Mono** is the system's secondary voice — used for metadata, coordinates, tokens, timestamps, and any data that needs to feel exact and untampered. It is the font of burner phone screens and terminal windows. Its presence signals: *this information is technical, verified, and raw.*

Both fonts are drawn from the same design lineage (Colophon Foundry), ensuring that they feel like siblings rather than strangers. The relationship is one of hierarchy, not contrast.

## The Type Scale

### Display / Hero
- **Size:** 56px / 3.5rem
- **When:** Full-screen moments, launch screens, empty states with call-to-action, campaign statements.
- **Feeling:** Architectural. This text makes the space around it feel smaller. It is not loud — it is large, which is different.
- **Weight:** Bold (700). Never Regular. Never timid.
- **Usage:** Maximum 1–2 lines. Never body copy size. Never used twice in the same viewport. Display type is a cannon, not a rifle — fire it once.
- **Letter spacing:** Tight (-0.02em). The letters huddle together for authority.

### H1 / Page Title
- **Size:** 40px / 2.5rem
- **When:** Top of every major section or screen. Once per view.
- **Feeling:** Authoritative but not heavy — the header that names the room you just entered.
- **Weight:** Bold (700). Never Regular.
- **Usage:** Every major screen has one H1. Never two. If you need a second title, it is an H2.
- **Letter spacing:** Tight (-0.02em).

### H2 / Section Header
- **Size:** 28px / 1.75rem
- **When:** Major sub-sections within a page or screen.
- **Feeling:** Confident organization. The H2 says "this is a new territory" without shouting.
- **Weight:** Semibold (600).
- **Letter spacing:** Normal (0em).

### H3 / Subsection
- **Size:** 20px / 1.25rem
- **When:** Subsections within a section. The smallest header that still feels like a header.
- **Feeling:** Precise, tactical. The H3 is often the label for a list of actions or a cluster of data.
- **Weight:** Semibold (600).
- **Letter spacing:** Normal (0em).

### H4 / Fine Subdivision
- **Size:** 16px / 1rem
- **When:** Use sparingly. Labels within cards, table column headers, fine-grained organization.
- **Feeling:** Administrative but not bureaucratic. Small, sharp, exact.
- **Weight:** Semibold (600). All caps with wide tracking (0.05em) is permitted and often preferred at this level.
- **Letter spacing:** Wide (0.05em) when all caps.

### Body / Primary
- **Size:** 16px / 1rem
- **When:** The default reading size. Descriptions, explanations, protest details, user-generated content.
- **Feeling:** The comfortable speaking voice. Not small, not large — exactly the size at which the user forgets about the type and reads the meaning.
- **Weight:** Regular (400) or Medium (500) for emphasis.
- **Line height:** Relaxed (1.7). This brand does not crowd its type. The user may be reading in motion, in low light, under stress — give the words room.

### Body / Secondary
- **Size:** 14px / 0.875rem
- **When:** Supporting text, descriptors, captions on images, secondary explanations.
- **Feeling:** Present but deferential. The secondary body knows its role is to support, not lead.
- **Weight:** Regular (400).
- **Line height:** Normal (1.5).

### Caption
- **Size:** 12px / 0.75rem
- **When:** Metadata, timestamps, distance indicators, participant counts, map zoom levels.
- **Feeling:** Technical, exact, small. The caption is where Space Mono often appears — coordinates, tokens, times.
- **Weight:** Regular (400).
- **Line height:** Normal (1.5).
- **Letter spacing:** Wide (0.05em) when used for labels or metadata.

### Label
- **Size:** 11px / 0.6875rem
- **When:** Form labels, table headers, UI taxonomy, button labels, navigation items.
- **Feeling:** The smallest authoritative voice. All caps, wide tracking, precise.
- **Weight:** Medium (500) or Semibold (600).
- **Letter spacing:** Widest (0.15em). Always all caps. Labels are not sentences; they are category names.

### Monospace / Data
- **Size:** 14px / 0.875rem (default), scales down to 12px / 0.75rem for dense data.
- **When:** Access tokens, coordinates, timestamps, technical metadata, code blocks, verification hashes.
- **Feeling:** The uneditable truth. Monospace text in ShowUp carries the authority of a machine — it has not been styled, only displayed.
- **Weight:** Regular (400).
- **Line height:** Snug (1.3). Monospace benefits from tighter leading.

## Hierarchy Principles

- Never two display-weight texts in the same viewport. One commanding voice at a time.
- Body text is always the most comfortable size on the target platform — never forced small for density. A protest description at 16px is more useful than twice as much text at 12px.
- Line height is generous by default — this brand doesn't crowd its type. Users read ShowUp on streets, in crowds, under duress.
- When in doubt, go larger. Space is not waste. In a dark interface, negative space creates focus and reduces eye strain.
- Headers create structure; body text creates meaning; captions create context. Never use a header where a caption would suffice, and never bury critical information in a caption.

## Platform Adaptations

**Web**
Base size is 16px. The scale scales fluidly between viewports using CSS `clamp()` — Display ranges from 40px on mobile to 72px on desktop. The type system assumes a comfortable reading distance (arm's length for mobile, slightly further for desktop).

**iOS**
Space Grotesk replaces SF Pro Display/Body. Dynamic Type support is implemented by mapping the brand scale to iOS text styles (Large Title → Display, Title 1 → H1, etc.). If the custom font fails to load, the system falls back to SF Pro — which is geometric enough to not feel alien.

**Android**
Space Grotesk replaces Roboto. Material's type scale expectations are met by mapping Display through Caption to the brand scale. Roboto is the fallback — it shares enough geometric DNA with Space Grotesk that the transition is acceptable, though Roboto is warmer and less architectural.
