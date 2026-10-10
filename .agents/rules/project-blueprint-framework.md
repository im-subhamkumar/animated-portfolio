# Mandatory Project Blueprint Framework

Whenever the user shares any new project idea, always execute this structured lifecycle:

## 1. Deep Analysis & Isolated Project Workspace
- Deeply analyze the project concept using all available skills (`ui-ux-pro-max`, `design`, `design-system`, `brand`, `motion`).
- Always create a **dedicated separate folder** for the project (e.g., `projects/<project-name>` or root folder as requested).
- Never start coding blindly. Always establish the 5 foundation specification documents before writing code.

---

## 2. The 5 Pre-Code Blueprint Documents

Create these individual, deeply analyzed markdown files inside the project folder:

### 📄 `PRD.md` (Project Requirements Document)
- **Problem Statement & Value Proposition**: Why this product exists and the core pain point it solves.
- **Target Audience & User Personas**: Demographics, goals, pain points, motivations.
- **Core Feature Specification**: Ranked (P0 Must-Haves, P1 Should-Haves, P2 Nice-to-Haves) with acceptance criteria.
- **Success Metrics & KPIs**: Conversion rate, load time, engagement signals.

### 🏛️ `Architecture.md` (System Architecture & Structure)
- **Tech Stack Specification**: Framework (React + Vite), Styling (Tailwind CSS), Animation (`motion` via `motion/react`), Icons (`lucide-react`).
- **Directory & File Hierarchy**: Precise tree layout from root to leaf components.
- **Data & State Flow**: Component state, prop contracts, forms, external service integrations.
- **Performance & Security Protocols**: Bundle splitting, image optimization, sanitization, HTTPS.

### 🛡️ `Rules.md` (AI Boundaries, Guardrails & Constraints)
- **Permitted & Preferred Libraries**: `motion/react`, `lucide-react`, Tailwind CSS, standard React hooks.
- **Forbidden Patterns**:
  - NO deprecated imports (e.g. `framer-motion`).
  - NO *lorem ipsum* or generic dummy text. Real, high-impact copywriting only.
  - NO unstyled or generic browser default inputs/buttons.
  - NO desktop-only assumptions; mobile responsiveness is mandatory.
- **Error Handling**: Graceful fallbacks, input validation, user-friendly toast/inline error alerts.
- **Code Standards**: Modular component size, semantic HTML5, zero unnecessary dependencies.

### ⏱️ `Phases.md` (Modular Execution Roadmap)
- Break execution down into distinct, achievable phases (Phase 1, Phase 2, Phase 3...).
- For each phase:
  - Exact components & files to create.
  - Step-by-step deliverable checklist.
  - Verification & testing gate before advancing to the next phase.

### 🎨 `Design.md` (Visual Identity & Design System)
- Powered by `ui-ux-pro-max`:
  - **Color Palette & Tokens**: Primary, accent, neutral darks/lights, background, surface tokens (60-30-10 balance).
  - **Typography Scale**: Google Fonts pairing (e.g. Display font + Body font), line heights, weights.
  - **Spatial Scale & Layout**: 8pt grid, container max-widths, bento grid structures.
  - **Motion & Choreography**: Entry duration, easing curves (`cubic-bezier`), micro-interaction states (hover, tap, view).
  - **Component Aesthetics**: Glassmorphism, subtle borders, gradient accents, elevated card shadows.

---

## 3. Post-Code Context Persistence

### 🧠 `Memory.md` (Active State & Session Memory)
- Created as soon as implementation begins.
- Updated after each major action or phase completion.
- Contains:
  - **Current Phase & Active Task**.
  - **Completed Milestones & File Manifest**.
  - **Key Architectural Decisions & Conventions**.
  - **Immediate Next Steps**.
  - **Known Issues or Blockers**.
- Enables resuming in fresh chats or AI tools without token waste or hallucination.
