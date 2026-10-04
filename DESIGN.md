# Poki

## Overview

**Product:** Poki
**URL:** https://poki.com/nl
**Surface type:** marketing
**Audience:** Business decision-makers and potential customers
**Brand character:** Conversion-focused marketing presence with a balanced color system and 3 typefaces.

> **Note:** Surface detection confidence is low. Verify the inferred audience and brand context before relying on this file.

### Design Principles

- Consistency over novelty — reuse existing patterns before inventing new ones.
- Token-driven — every visual decision references a token, not a magic number.
- Accessible by default — compliance is a baseline, not a feature.

## Colors

| Token | Value | Role |
|-------|-------|------|
| color-5 | `#FFFFFF` | Background |
| color-3 | `#83FFE7` | Surface |
| color-1 | `#002B50` | Text Primary |
| color-2 | `#009CFF` | Accent |
| color-4 | `#F0F5FC` | Border |

## Typography

**Font stack:** Torus, Proxima Nova, Times New Roman

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 0px | Captions, metadata |
| text-sm | 12px | Labels, secondary text |
| text-base | 16px | Body text (default) |
| text-lg | 36px | Subheadings, emphasis |

**Weight scale:** 400 · 700
**Line heights:** 40px · 24px · 20px

## Spacing

**Base unit:** 8px

`space-1: 3px` · `space-2: 6px` · `space-3: 8px` · `space-4: 10px` · `space-5: 16px` · `space-6: 24px` · `space-7: 32px`

## Shapes

**Border radius:** `radius-sm: 0px 0px 16px 16px` · `radius-md: 0px 0px 16px` · `radius-lg: 0px 16px 0px 0px` · `radius-xl: 3px 14px 14px 0px` · `radius-full: 16px` · `radius-6: 16px 0px 0px 16px`

## Elevation

- **shadow-sm:** `rgba(93, 107, 132, 0.2) 1px 2px 3px 1px`
- **shadow-md:** `rgba(93, 107, 132, 0.2) 0px 3px 5px 3px`
- **shadow-lg:** `rgba(93, 107, 132, 0.3) 0px 7px 10px 4px`

## Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)`
- **duration-slow:** `transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)`
- **duration-slow:** `transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)`

## Components

- **Buttons:** 7 detected
- **Links:** 280 detected
- **Inputs:** 1 detected
- **Navigation:** 2 elements
- **Lists:** 1 detected
- **Images:** 263 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (0px 0px 16px 16px, 0px 0px 16px, 0px 16px 0px 0px, 3px 14px 14px 0px, 16px, 16px 0px 0px 16px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Buttons:** 7 detected
- **Links:** 280 detected
- **Inputs:** 1 detected
- **Navigation:** 2 elements
- **Lists:** 1 detected
- **Images:** 263 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
