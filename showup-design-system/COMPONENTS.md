# ShowUp — COMPONENTS.md

## Global Component Principles

Every component in this system has a resting state and an active state, and the distance between them is never abrupt. The system believes in mechanical precision — elements do not snap; they engage. Nothing happens without acknowledgment, and nothing overshoots. A button press feels like a switch flipping, not a rubber band releasing. A card appears like a drawer sliding open, not a balloon inflating. The physics are industrial, not organic.

All components rest on dark surfaces by default. Light mode is a tactical inversion, not a different world. The character of each component — its weight, its edge, its response — remains constant across modes.

## Rounded Geometry Philosophy

ShowUp's interface has shifted from sharp-edged equipment to precision-machined devices with softened corners. The rounding is muscular, not bubbly — think of the radius on a matte-black AirPods case or the edge of an iPhone in a dark room. Buttons are pill-shaped. Cards have 16px corners. Inputs are rounded but still feel like data entry fields, not chat bubbles. The one place the edge stays sharp is the logo mark — the abstracted scale remains rectilinear, creating a deliberate tension between the uncompromising identity and the approachable interface.

---

## Button

### Primary Button
- **Character:** The thing that starts things. The most visually weighted interactive element in any view. There is never more than one true primary action visible at a time. Primary buttons are atomic orange — they are the signal in the darkness, and they must be used with that gravity in mind.
- **Resting:** Solid atomic orange fill (#FF4D00) with black text (#050505). Pill-shaped (9999px border radius) for primary actions, or 12px radius for secondary contexts. The button is a capsule of intent — rounded but dense, like a machined button on serious hardware.
- **Hover:** The element brightens slightly — a 10% lightness increase, like the surface warming under a finger. The transition is 150ms with smooth easing. A subtle inner border (1px inset in rgba(255,255,255,0.15)) appears to suggest depth beneath the surface.
- **Pressed / Active:** A subtle inward press — the scale reduces to 0.98, the element physically acknowledging the touch before the action fires. The background darkens by 10%. The text remains black and unmoved. This is not a depression; it is a mechanical confirmation.
- **Disabled:** Loses vibrancy rather than changing color. The atomic orange desaturates to a muted amber. The text becomes neutral-500. The pill shape stays, the signal dies. Disabled buttons are present but silent.
- **Shape character:** Pill-shaped (full radius) for primary and destructive actions. 12px radius for secondary and ghost buttons. The rounding is generous but never cartoonish — this is premium hardware, not a messaging app.

### Secondary Button
- **Character:** The alternative. The button that says "there is another way." Visually lighter than primary but still confident. Used when two actions are present, or when the primary action would be too aggressive for the context.
- **Resting:** Transparent background with a 1.5px solid border in neutral-600 (#525252). White or neutral-100 text. 12px border radius — rounded but not pill-shaped, creating a clear hierarchy below the primary button.
- **Hover:** The border brightens to neutral-500, and a subtle background fill appears (neutral-900 at 50% opacity). The rounding keeps it approachable while the border maintains its technical character.
- **Pressed:** Background fills to solid neutral-900. Border becomes neutral-400. Scale reduces to 0.98. The press is quieter than the primary button but still mechanically acknowledged.

### Ghost / Outline Button
- **Character:** The quietest button. No border in the resting state — just text, floating. Used for tertiary actions, destructive confirmations, or moments where the UI needs to get out of the way.
- **Resting:** Transparent background. Text in neutral-300 or neutral-400. 12px border radius on the touch target area — the ghost button has shape even when empty.
- **Hover:** A subtle background tint appears (neutral-900 at 30%), filling a 12px rounded rectangle. The text brightens to neutral-200.
- **Pressed:** Background becomes solid neutral-900. Text becomes neutral-100. Scale reduces to 0.98.

### Destructive Button
- **Character:** For irreversible actions — leave protest, delete account, revoke token. Communicates danger without inducing anxiety.
- **Resting:** Solid semantic red (#FF1744) background with black text. Pill-shaped (full radius), same muscular rounding as the primary button. The destructive action carries the same visual weight as the primary — both are consequential.
- **Hover:** Brightens by 10%. A subtle pulse animation may accompany hover (slow, 2s cycle) to suggest consequence. The pill shape makes the pulse feel like a heartbeat.
- **Pressed:** Scale reduces to 0.97 — a deeper press than standard buttons, communicating gravity. The action fires only after a deliberate press-and-hold (500ms) in the most destructive contexts.

### Icon Button
- **Character:** A button that is only a symbol. Used for map controls, toolbar actions, and compact UI zones.
- **Resting:** 48px minimum touch target. Circular background (full radius) in transparent or neutral-900. Icon in neutral-300. The circle makes the icon feel like a physical button on a control panel.
- **Hover:** Circular background brightens to neutral-800. Icon brightens to neutral-100. The circle creates a target — precise and satisfying.
- **Pressed:** Circular background becomes neutral-700. Icon becomes white. Scale reduces to 0.95 — a tight, mechanical press.
- **Label requirement:** Icon buttons must have an accessible label, and in most contexts should show a tooltip on hover/long-press. The tooltip uses Caption size, neutral-100 text, neutral-800 background, 8px border radius.

---

## Card

- **Character:** A card in ShowUp is a container for protest information — location, time, participant count, urgency. It is a discrete unit of dissent. Each card makes a promise: *this is happening, and you can be part of it.*
- **Surface:** Background is neutral-900 (#141414) or slightly elevated at #1A1A1A. 16px border radius — generous but not playful. The rounded corners soften the container without making it feel like a chat bubble. No border by default, but a 1px solid border in neutral-800 may be used for definition. Shadow is minimal in dark mode — elevation is expressed through surface lightness, not drop shadow. In light mode, a subtle shadow (sm) appears.
- **Hover:** The card lifts — barely. In dark mode, the surface lightens by one step (to #1A1A1A or #202020). In light mode, the shadow deepens slightly. A 1px border in neutral-700 may appear. The transition is 200ms, smooth — the rounded corners make the movement feel like a tray sliding forward, not a block shifting.
- **Active / Selected:** A 3px left border in atomic orange appears with rounded ends (the border-radius follows the card's 16px corners), or the entire card gains a subtle atomic orange outer glow (8px blur, 8% opacity). The card is now "marked."
- **Empty state:** A card with no content shows a dashed border in neutral-700 (with rounded corners matching the card) and centered ghost text in neutral-500: "No active events in this zone." No illustrations, no friendly characters. Just information.

---

## Input Field

- **Character:** Where the user speaks. These elements are receivers, not broadcasters — they should feel calm, open, expectant. In ShowUp, inputs are often used for search coordinates, filter terms, or anonymous messages. They must feel secure.
- **Resting:** Background is neutral-800 (#262626) or transparent with a 1.5px border in neutral-700. 12px border radius — the input feels like a machined port, not a text box. Text is neutral-100. Placeholder text is neutral-500 — a suggestion, never a requirement. Light, fading, non-anxious.
- **Focused:** The border activates. A 2px solid line in atomic orange or neutral-400 appears. The element has the user's attention and it knows it. The background may lighten slightly. The rounded corners keep the focus ring smooth and continuous — no sharp breaks.
- **Filled / Has value:** The text becomes neutral-100 (if not already). A small clear button (×) may appear on the right, in neutral-500, becoming neutral-300 on hover. The clear button is circular (full radius) for consistency with icon buttons.
- **Error state:** The border becomes semantic red (#FF1744). The error message appears below in Caption size, semantic red, with a 4px margin. The message is honest and specific: "Coordinates out of range" not "Invalid input." The field does not shake or bounce — it simply states the problem, framed in rounded honesty.
- **Disabled:** Same principle as button — presence without availability. Background becomes neutral-900. Border becomes neutral-800. Text becomes neutral-600. The placeholder remains visible but ghosted. The rounded corners remain, maintaining the object's identity even when inactive.

---

## Navigation

- **Type:** Bottom tab bar for mobile, vertical sidebar for desktop/tablet. The navigation is persistent — it never disappears without user intent. In a tool where the user may be moving through crowds, the nav is a fixed point of reference.
- **Mobile (Bottom Tab Bar):** 4–5 items maximum. Each item is an icon + label (Label size, 11px, all caps, wide tracking). The active item is indicated by an atomic orange pill-shaped background behind the icon, or atomic orange color on the icon and label. Inactive items are neutral-500. The background is neutral-900 with a 1px top border in neutral-800. No background blur — this is not a glassmorphism app. Solid, opaque, reliable. The pill-shaped active indicator makes the nav feel like physical buttons on a device.
- **Desktop (Sidebar):** 180–220px width. Items are stacked vertically with 8px spacing. Each item is a full-width row with an icon (20px) and label (Body size, 14px). Active item has an atomic orange left border (3px, rounded ends) and neutral-800 background with 8px border radius. Hover brightens the background to neutral-800 with the same rounded treatment. The sidebar background is neutral-900 or the page background itself.
- **Active state:** Color communicates priority. Atomic orange pill for the current section. White for available sections. Neutral-500 for disabled sections.
- **Transition:** Switching sections is a 250ms fade with a 20px slide. The outgoing content fades and slides slightly left; the incoming content fades and slides from the right. The movement is smooth — the rounded corners make the panels feel like cards being dealt, not machinery engaging.

---

## Modal / Dialog

- **Character:** Modals in ShowUp are interventions. They stop the user because something requires confirmation or attention. They are not conversational; they are procedural.
- **Arrival:** The modal appears with a 200ms fade-in combined with a 16px scale-up (from 0.97 to 1.0). 20px border radius on the modal container — like an iOS sheet sliding up from the bottom of a dark room. The background dims to a solid overlay (neutral-900 at 80% opacity). No blur — blur is computationally expensive and visually soft. ShowUp is matte, not frosted.
- **Departure:** Reverse of arrival. 150ms fade-out, scale-down. The modal does not linger.
- **Structure:** Title (H3), body text (Body), action buttons (Primary + Secondary, or Primary + Ghost). The title is direct: "Leave this event?" not "Are you sure you want to leave?" Buttons inside the modal are pill-shaped, creating a satisfying contrast with the modal's own rounded frame.

---

## Toast / Notification

- **Character:** Brief, factual, unobtrusive. Toasts are the system's voice when it needs to say something without demanding attention.
- **Entrance:** Slides in from the bottom (mobile) or top-right (desktop) with a 300ms decelerate easing. 16px margin from screen edges. The toast has 12px border radius — a soft capsule of information arriving in your periphery.
- **Persistence:** 4 seconds for non-critical, 8 seconds for critical. User can swipe to dismiss (mobile) or click × (desktop). The × is a circular icon button for consistency.
- **Exit:** Slides out in the direction it came, 200ms.
- **Visual:** Neutral-800 background, 1px border in neutral-700, 12px border radius. Icon (16px) on the left — atomic orange for success, semantic red for error, neutral-400 for info. Text is Body size, neutral-100. No progress bar, no countdown circle.

---

## Badge / Tag

- **Character:** Metadata made visible. Badges indicate status — "Live," "Planning," "Ended," "Urgent." They are small, sharp, and read instantly.
- **Size:** Caption or Label size. Padding is tight (4px 10px). Border radius is full (pill-shaped). Badges are capsules of status — small, precise, unmistakable.
- **Color logic:** Atomic orange background for "Live" or "Urgent." Neutral-700 background for "Planning." Neutral-800 background for "Ended." Text is always high-contrast — black on orange, white on dark grays.
- **Usage:** Inline with headers, in card headers, or floating on map pins. Never stacked more than two deep. The pill shape makes badges feel like status LEDs on hardware.

---

## Empty State

- **Character:** The absence of data is not a failure — it is information. An empty state in ShowUp says "nothing is here" without apologizing for it.
- **Full-page:** Large icon or symbol (48px, neutral-600) inside a 96px circular container with neutral-900 background, H2-sized heading in neutral-300, Body-sized explanation in neutral-500. No illustrations of sad characters or empty boxes. The circular container creates a focal point — a void where content will eventually live.
- **Inline:** A single line of Body text in neutral-500 within a rounded bordered box (12px radius): "No messages in this thread."
- **Invitation:** Always provides a next step. If the user can create something, a pill-shaped Primary or Secondary button appears below the text. If not, the text simply states the fact and ends.

---

## Loading State

- **Character:** Uncertainty is acknowledged but not dramatized. Loading states in ShowUp are honest — they tell you something is happening without performing anxiety.
- **Skeleton screens:** Used for lists and cards. Blocks of neutral-800 with rounded corners (8px radius) and a subtle shimmer animation (neutral-800 to neutral-700 to neutral-800, 1.5s loop). The rounded corners make the skeleton feel like placeholder cards, not wireframes. No wave effect, no gradient sweep — just a steady pulse, like a slow heartbeat.
- **Spinner:** A 2px stroke circle in atomic orange, rotating at a steady 1s cycle. The circle is fully rounded — the spinner is a ring, not a polygon. Used for buttons and inline actions. Never multi-colored, never dashed.
- **Progress:** A 4px height bar with full radius (pill-shaped), atomic orange fill, neutral-800 track. Used for file uploads or map tile loading. The bar advances in discrete steps rather than smooth flow — mechanical, chunked progress filling a capsule.

---

## Tooltip

- **Character:** A brief annotation. Tooltips appear only when necessary — never for decorative purposes.
- **Trigger:** Hover (desktop) or long-press (mobile, 500ms).
- **Delay:** 400ms before appearing. The user must demonstrate intent.
- **Dismissal:** On mouse leave, click elsewhere, or after 3 seconds.
- **Visual:** Neutral-800 background, 1px border in neutral-700. Caption size text in neutral-200. Padding is 6px 10px. Border radius is 8px — a small soft capsule of information. No arrow/pointer — the tooltip sits flush against its target or with a 4px gap.
