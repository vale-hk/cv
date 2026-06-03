---
name: Valeska Álvarez Romero Identity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424842'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#737971'
  outline-variant: '#c2c8bf'
  surface-tint: '#47664b'
  primary: '#47664b'
  on-primary: '#ffffff'
  primary-container: '#86a789'
  on-primary-container: '#1f3c25'
  inverse-primary: '#adcfaf'
  secondary: '#6a5f00'
  on-secondary: '#ffffff'
  secondary-container: '#f4e256'
  on-secondary-container: '#6e6300'
  tertiary: '#466649'
  on-tertiary: '#ffffff'
  tertiary-container: '#85a787'
  on-tertiary-container: '#1e3c23'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c8ebca'
  primary-fixed-dim: '#adcfaf'
  on-primary-fixed: '#03210c'
  on-primary-fixed-variant: '#304d35'
  secondary-fixed: '#f7e459'
  secondary-fixed-dim: '#dac83f'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#c8ecc8'
  tertiary-fixed-dim: '#acd0ad'
  on-tertiary-fixed: '#03210b'
  on-tertiary-fixed-variant: '#2f4e33'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Metropolis
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Metropolis
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Metropolis
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  accent-italic:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Metropolis
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Metropolis
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Metropolis
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  container-max: 1200px
---

## Brand & Style

This design system establishes a sophisticated and human-centric digital presence for Valeska Álvarez Romero. The brand personality is rooted in professional clinical expertise balanced with an approachable, warm empathy. The target audience includes parents seeking speech therapy for children, adults requiring rehabilitation, and professional peers.

The design style is **Refined Minimalism with Glassmorphic accents**. It utilizes heavy whitespace to convey a sense of calm and clarity, while subtle translucent layers provide depth without overwhelming the clinical focus. "Striking borders"—ultra-thin but high-contrast—frame content to create a sense of structure and precision, mirroring the accuracy required in speech pathology. The overall emotional response should be one of quiet confidence, safety, and modern elegance.

## Colors

The palette is anchored by a signature **Botanical Gradient**, transitioning from a soft, muted sage green (`#86A789`) to a warm, sun-kissed yellow (`#F8E559`). This choice represents growth, communication, and vitality.

- **Primary:** Soft Green, used for primary actions and background washes to evoke tranquility.
- **Secondary:** Warm Yellow, used sparingly for highlights, icons, and call-to-order accents to provide energy.
- **Tertiary:** Deep Forest, used for high-contrast text and interactive states to ensure accessibility.
- **Neutral:** A "Paper" white base (`#FBFBFB`) keeps the interface feeling light and clinical.

Apply the primary-to-secondary gradient only to large-scale hero elements or primary buttons to maintain professional restraint.

## Typography

The typography strategy pairs geometric precision with editorial flair. **Metropolis** serves as the workhorse typeface, offering a clean, modern, and highly legible alternative to Century Gothic that feels contemporary across all digital screens.

**Playfair Display (Italic)** is utilized as a "Human Accent." It should be used for pull-quotes, testimonials, or secondary headings to break the geometric rigidity and introduce a sense of hand-crafted elegance and personal touch. 

Maintain generous line heights (1.6x for body text) to ensure readability for users who may have cognitive or visual processing challenges, aligning with the inclusive nature of speech therapy.

## Layout & Spacing

This design system employs a **Fixed Content Grid** within a fluid viewport. Content is centered within a 1200px container to maintain an editorial, "boutique" feel on ultra-wide monitors.

- **Desktop:** 12-column grid with 24px gutters. Use wide margins (80px+) to create a "frame" around the content.
- **Mobile:** Single column with 20px side margins.
- **Rhythm:** An 8px linear scale governs all padding and margins. Vertical rhythm should be generous; allow sections to breathe to prevent information density from causing user fatigue.

Layouts should favor asymmetrical compositions—for example, a large headline on the left with significant whitespace on the right—to emphasize the sophisticated, professional nature of the brand.

## Elevation & Depth

Depth is achieved through **Tonal Layering and Micro-Borders** rather than heavy shadows.

1.  **Surfaces:** Use a subtle backdrop blur (12px to 20px) on navigation bars and modal overlays to create a "frosted glass" effect over the botanical gradients.
2.  **Borders:** Instead of deep shadows, use 1px solid borders in a slightly darker shade of the background color (or a 10% opacity black). This creates "striking" definitions that look sharp on high-resolution displays.
3.  **Shadows:** When necessary for functional elevation (e.g., a floating appointment button), use a single, ultra-diffused "Ambient" shadow: `0 10px 30px rgba(79, 111, 82, 0.08)`. This tints the shadow with the primary forest green for a more natural, organic feel.

## Shapes

The shape language is **"Soft-Structured."** While the brand is professional and precise, sharp corners are avoided to remain welcoming and human.

- **Base Radius:** 0.25rem (4px) for small components like checkboxes or input fields.
- **Large Radius:** 0.75rem (12px) for cards and containers, providing a modern, friendly silhouette.
- **Interactive Elements:** Buttons should use the base radius (Soft) rather than pill shapes to maintain the sophisticated, geometric aesthetic established by the typography.

## Components

### Buttons
Primary buttons feature the Soft Green to Warm Yellow gradient with white Metropolis Bold text. Secondary buttons use a "Ghost" style: a 1px border in Soft Green with no fill, transitioning to a light green tint on hover.

### Cards
Cards are defined by a white background, a 1px soft-grey border, and no shadow. The "striking" element is a 4px accent line of the primary gradient at the very top or left edge of the card.

### Input Fields
Fields should be minimalist: a bottom-border only (2px) that transforms into the primary green when focused. Labels should use `label-sm` (uppercase, bold) positioned above the field.

### Accents & Icons
Icons should be thin-line (2px stroke) and monolinear. Use the Warm Yellow for icon fills or accents to draw the eye to key features or services.

### Lists
Use custom "check" icons in Soft Green. List items should have increased vertical padding (16px) to maintain the airy, premium feel of the layout.