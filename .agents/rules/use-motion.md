# Use Motion for Animations

Always use the **Motion** library (https://motion.dev) for animations and transitions in this project and all upcoming projects.

- Import from `"motion/react"` for React projects (e.g., `import { motion, AnimatePresence } from "motion/react"`)
- Import from `"motion"` for vanilla JS projects
- Prefer Motion's declarative animation API over raw CSS animations where appropriate
- Use `AnimatePresence` for enter/exit animations
- Use `useScroll`, `useTransform`, and other Motion hooks for scroll-driven animations
