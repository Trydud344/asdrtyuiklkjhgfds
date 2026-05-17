# ShowUp — IMAGERY.md

## Photography Direction

### Subject Matter

Photographs in the ShowUp ecosystem show environments and evidence, not individuals. The camera points at the crowd, not the face. It points at the street, the barricade, the empty plaza before the arrival, the aftermath. When people appear, they are backs, silhouettes, shadows, hands raised, feet moving. The identity of the individual is never the subject — the geometry of the collective is.

### People Direction

- **Demographic representation:** Deliberately ambiguous. Ages, ethnicities, and genders are mixed and often unidentifiable. The crowd is the demographic.
- **Emotional expression:** Not posed-smiling. Genuine states: determination, exhaustion, solidarity, anger, anticipation. Faces are rarely visible; emotion is read through posture, gesture, and context.
- **Interaction quality:** Candid and documentary. The photographer is a participant, not a director. Images feel snatched, not staged — even when they are composed.

### Light

Artificial or mixed — streetlights, phone screens, flares, headlights, the glow of a shop window. Natural light is acceptable only when it is harsh (midday sun on asphalt) or dying (dusk, overcast). The light reveals structure: the line of a building, the curve of a road, the density of a crowd. It conceals identity: faces in shadow, figures backlit, details lost in silhouette.

### Color Treatment

Photos are cool or neutral by default. Warmth appears only from artificial light sources — a streetlamp, a phone screen, a flare. Desaturation is common but not universal; when color appears, it is treated as evidence, not decoration. A color grade may be applied to align with the palette: lifted blacks, slightly cool shadows, and a trace of the atomic orange in highlight rolloff. Photos are never stock-neutral here — they breathe the same air as the rest of the system.

### Composition

- **Documentary crops:** Tight when necessary, generous when possible. A wide shot of an empty street says as much as a close-up of a raised fist.
- **Geometric framing:** Horizontal and vertical lines are emphasized — the architecture of protest. The camera is often level; Dutch angles are rare and only used to communicate disorientation.
- **Negative space:** Used deliberately. A single figure in a large frame is not loneliness; it is scale. It says: *this is bigger than one person.*

### What to Actively Avoid

- Stock photos of smiling protesters with perfect signs.
- Heroic low-angle shots of individuals that romanticize leadership.
- Warm, golden-hour filters that sentimentalize conflict.
- Images that identify individuals clearly enough for facial recognition.
- Cluttered compositions with no focal point — chaos is real, but the image must still read.
- Photos of police or military used as decoration. If they appear, they are context, not subject.

---

## Illustration Direction

ShowUp does not use illustrations in the traditional sense. The brand's visual language is too grounded, too material, too serious for drawn characters or decorative graphics. When non-photographic visuals are needed, they take the form of:

- **Geometric diagrams:** Maps, schematics, flow charts of movement.
- **Data visualizations:** Heat maps, timeline graphs, participant density plots.
- **UI chrome:** The interface itself is the illustration.

If an illustration style must be established for empty states or onboarding, it should be:
- **Style:** Technical, schematic, vector-line. Like a diagram in a tactical manual.
- **Line quality:** Single-weight strokes (1–2px), precise angles, no curves. The line work should feel like it was plotted, not drawn.
- **Color within illustration:** Limited to the brand palette. Atomic orange for emphasis, neutrals for structure, black for void.

---

## Icon Language

### Style

Line icons, 1.5px stroke weight, 0px corner radius (sharp angles) or 1px maximum. No filled icons except at very small sizes (16px and below) where line icons lose legibility. The icon style is technical and schematic — each icon should look like it was extracted from a control panel or a subway map.

### Stroke Weight

Icon stroke weight (1.5px) is deliberately lighter than the heaviest text weight but heavier than body text. Icons are siblings to the type system, not decorations. At small sizes (16px), stroke weight may increase to 2px to maintain visibility.

### Size Grid

Icons live on a 24×24px base grid with 2px padding on all sides (20×20px live area). At 16px, they use a 16×16 grid with 1px padding. At 48px (app icon territory), they scale proportionally. The grid is strict — elements align to whole pixels at 1× scale.

### Character

Icons in this system are precise without being sterile. They communicate faster than words but never feel like shortcuts. Each one should look like it was drawn by the same engineer. Common metaphors:
- Navigation: compass, map pin, layers, crosshair.
- Actions: send (arrow), flag (pennant), shield, lock, eye (crossed).
- Status: flame (live), clock (pending), check (done), exclamation (alert).

### Usage Rules

- An icon may appear alone only when its meaning is universally understood within the context (× for close, ← for back, ⚙ for settings).
- An icon must have a label when its meaning is contextual or ambiguous (a flag icon might mean "report" or "save" — label it).
- Never use decorative icons that do not serve a functional purpose. Every icon is a tool, not an ornament.

---

## Texture & Surface Treatment

### Grain and Noise

A subtle static grain overlay (2–4% opacity, monochromatic) may be applied to large dark backgrounds or hero sections. This texture evokes surveillance footage, CRT monitors, and the material reality of digital resistance. It should be barely perceptible — the user should feel it before they see it. Never apply to text-bearing surfaces or small components.

### Gradients

Gradients are used sparingly and with purpose. When they appear, they are linear, moving between two neutrals (e.g., #0A0A0A to #141414), or from transparent to a solid color. No rainbow gradients, no mesh gradients, no decorative fades. A gradient in ShowUp suggests depth, atmosphere, or the edge of a shadow.

### Patterns

No repeating decorative patterns. The only pattern-like elements are:
- Grid lines on the map (neutral-800, 1px).
- Data visualization patterns (dots, hashes) in the semantic colors.
- The static grain mentioned above.

### What Makes a Surface Feel "ShowUp"

A ShowUp surface is:
- **Matte:** No gloss, no sheen, no glassmorphism blur. Surfaces are opaque and grounded.
- **Slightly textured:** Either through the grain overlay or through subtle color variation (±2% lightness).
- **Geometrically defined:** Edges are sharp. Corners are tight. Alignment is exact.
- **Dark by default:** Even "light" surfaces in dark mode are charcoal, not gray. The darkness is a material, not an absence.

A surface that is glossy, rounded, pastel, or blurry is not a ShowUp surface.
