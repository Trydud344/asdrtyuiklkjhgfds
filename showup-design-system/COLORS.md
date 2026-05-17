# ShowUp — COLORS.md

## Palette Philosophy

These colors were built for a world that moves in darkness. The palette is deliberately close to monochrome because anonymity does not call attention to itself — but there is always a charged accent waiting at the edges, ready to signal presence, urgency, and collective power. Atomic orange is not decoration; it is the flare in the dark, the heartbeat on the map, the color of action when words are not enough.

## Primary Palette

### --color-primary (Atomic Orange)
- **Value:** `#FF4D00`
- **Role:** The brand's most direct voice. Used for primary CTAs, active states, protest pins on the map, and key highlights that demand action.
- **Character:** The color of a signal flare in a blackout — impossible to ignore, but never garish. It carries the heat of urgency without the panic of emergency.
- **Dark mode:** Unchanged. Atomic orange against black is the defining moment of the brand. It does not dim; it intensifies.
- **Accessibility:** Passes AA contrast on dark backgrounds (#050505, #0A0A0A). Does NOT pass on light backgrounds — never use primary text on white.

### --color-primary-subtle
- **Value:** `#FF4D001A` (10% opacity on dark)
- **Role:** The background tint. Used for hover states on dark surfaces, selected backgrounds, and subtle badges.
- **Character:** The primary color seen through smoked glass — present but not demanding. A whisper of heat in a cold room.
- **Dark mode:** Same value. The subtlety is relative to the already-dark surface.

### --color-primary-on
- **Value:** `#050505`
- **Role:** Text or icon color when placed on an atomic orange surface.
- **Character:** The void inside the flame. Maximum contrast for maximum authority.

## Secondary Palette

### --color-secondary (Cool White)
- **Value:** `#E8E8E8`
- **Role:** Supporting highlights, secondary buttons, inactive map elements, and text that needs to be visible but not dominant.
- **Character:** The light of a phone screen at minimum brightness — visible, but never intrusive. Cooler than warm white, avoiding sentimentality.
- **Dark mode:** Unchanged. It functions as the elevated surface highlight in darkness.

### --color-secondary-subtle
- **Value:** `#E8E8E81A`
- **Role:** Subtle surface differentiation, divider lines on dark backgrounds, ghost button borders.
- **Character:** A breath of fog on a window. There, but barely.

### --color-secondary-on
- **Value:** `#050505`
- **Role:** Text on secondary-colored surfaces.

## Neutral Palette

The neutral family is a cool gray with a trace of warmth — never flat, never clinical. It reads as considered rather than defaulted, like the patina on well-used aluminum.

- **--color-neutral-50:** `#F5F5F5` — The lightest surface, used only in light mode or inverted contexts.
- **--color-neutral-100:** `#E8E8E8` — Primary text on dark. The voice of the interface.
- **--color-neutral-200:** `#D1D1D1` — Secondary text, subdued labels.
- **--color-neutral-300:** `#B4B4B4` — Tertiary text, metadata, timestamps.
- **--color-neutral-400:** `#8A8A8A` — Disabled text, placeholders, inactive elements.
- **--color-neutral-500:** `#6E6E6E` — Border color on light surfaces.
- **--color-neutral-600:** `#525252` — Border color on dark surfaces.
- **--color-neutral-700:** `#3A3A3A` — Elevated surface borders, subtle dividers.
- **--color-neutral-800:** `#262626` — Input field backgrounds, inset zones.
- **--color-neutral-900:** `#141414` — Card backgrounds, elevated surfaces in dark mode.

## Semantic Colors

### --color-success
- **Value:** `#00C853`
- **Role:** Positive outcomes, completed actions, healthy connection states.
- **Character:** Quiet confirmation. The green of a secure channel, not a celebration. It says "done" not "yay."

### --color-warning
- **Value:** `#FFB300`
- **Role:** Caution, reversible risk, things that need attention but aren't broken.
- **Character:** The amber of a caution light, not the red of a stop sign. Alert without panic.

### --color-error
- **Value:** `#FF1744`
- **Role:** Failures, irreversible actions, critical states, loss of connection.
- **Character:** Urgent but not hostile. The color that says "stop" not "you failed." It is the color of a flat line — serious, final, unambiguous.

### --color-info
- **Value:** `#2979FF`
- **Role:** Neutral context, system messages, map layer indicators.
- **Character:** Cool, informational, background-level urgency. Used sparingly — ShowUp does not have much to say that is purely "informational."

## Dark Mode Philosophy

Dark mode here isn't inversion — it's the native state. The brand lives at night, in the rain, in the unlit corners of the city. Surfaces get deeper, not just darker, like looking into the gap between buildings rather than at a wall. Elevation is expressed through surface lightness: the further up a layer goes, the lighter it becomes (from #050505 at the base to #1A1A1A at the highest card level).

Surface rounding follows the same logic: the higher the elevation, the more pronounced the radius. Background surfaces stay sharp or minimally rounded. Cards and modals receive 16px corners. Buttons and badges are pill-shaped. The rounding is elevation-encoded — higher layers feel more approachable, deeper layers feel more grounded.

Light mode exists as a tactical option — for daytime use, for screenshots, for contexts where a dark screen would draw unwanted attention. But it is not the home of the brand. In light mode, the palette inverts: surfaces become light, text becomes dark, but the atomic orange remains unchanged — still the flare, still the signal.

## Color Pairing Rules

**Allowed pairings:**
- Atomic orange + black: The defining combination. High contrast, high energy.
- White + charcoal: The everyday reading experience. Clear, unobtrusive.
- Any neutral + any adjacent neutral: Gradients of information density.

**Forbidden pairings:**
- Atomic orange + semantic red: Two hot colors fighting. They create panic, not urgency.
- Atomic orange on light gray: Insufficient contrast, looks like a mistake.
- Success green + warning amber: These are for different moments. Never place them at equal visual weight.
- Any pastel or desaturated tint: This brand does not do soft. Softness is a security risk.
