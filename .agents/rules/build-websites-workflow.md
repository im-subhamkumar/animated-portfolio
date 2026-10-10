# 2026 Website Building Approach & Standards

Follow this strict end-to-end framework based on the 2026 Production Website Guide:

## 1. Stack Foundation
- **Framework**: React + Vite
- **Animations**: `motion` library (`import { motion, AnimatePresence } from "motion/react"`)
  *(Never use deprecated 'framer-motion' imports)*
- **Icons**: `lucide-react`
- **Styling**: Tailwind CSS + curated design tokens

## 2. Design Intelligence & Skills
- Apply the **`ui-ux-pro-max`** skill for all visual, layout, typography, color, spacing, and interaction decisions.
- Follow priority hierarchy:
  1. Accessibility (WCAG contrast ≥ 4.5:1, touch target ≥ 44×44px, visible focus rings)
  2. Performance (CLS < 0.1, sub-3s load time)
  3. Responsive Layout (Tested mobile-first, zero horizontal scroll)
  4. Purposeful Motion (Smooth, contextual, non-distracting)

## 3. Component Sourcing (21st.dev Workflow)
- Assemble section-by-section:
  1. `navbar`
  2. `hero`
  3. `features` (bento grids, cards)
  4. `testimonials` / social proof
  5. `pricing` / services
  6. `contact` / working CTA
  7. `footer`
- Adapt prompts from `21st.dev` to match client branding and color palette.

## 4. The Iteration Loop
- **ASK**: Describe one section in plain English.
- **LOOK**: Check in the browser at `http://localhost:5173`.
- **FIX**: Be specific about issues (e.g., *"heading font too large on 375px screens, spacing above CTA button is tight"*).
- **SAVE**: Commit to git as save points (`git commit -am "section done"`).

## 5. Pre-Delivery & Quality Checklist
Before handing over to clients:
- [ ] Looks and works correctly on real mobile screens (not just resized desktop window)
- [ ] Loads in under 3 seconds
- [ ] Real copy and real high-res images (NO lorem ipsum, NO generic placeholders)
- [ ] Working contact form, email link, or WhatsApp action
- [ ] SEO tags: `<title>`, `<meta name="description">`, and favicon configured
- [ ] Live deployment on Netlify / Vercel with HTTPS
