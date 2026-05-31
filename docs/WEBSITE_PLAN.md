# Personal Website — Build Plan

## Identity

| Field        | Value                           |
|--------------|---------------------------------|
| Name         | Mehdi Rashidi                   |
| Title        | Frontend Developer              |
| Primary Lang | English (FA supported via i18n) |
| Theme        | Dark + Light toggle             |

---

## Sections (page order)

### 1. Hero
**Goal:** First thing the visitor sees — quick intro and CTA

**Content:**
- Greeting line: `"Hello, I'm"`
- Name: `Mehdi Rashidi`
- Role (typewriter animation): `Frontend Developer`
- Short tagline: one sentence about what you do
- CTA buttons: `View My Work` → anchor to Projects / `Download CV` → PDF
- Social icons: GitHub, LinkedIn, Email

**Design notes:**
- Animated glow background (reuse `sectionAnimatedBackground`)
- Name in accent color
- Typewriter effect on role via Framer Motion

---

### 2. About Me
**Goal:** More about you — personality, skills, background

**Content:**
- Profile photo or avatar
- Bio paragraph: a few sentences about your experience, interests, approach
- Skill badges — grouped by category:
  - **Frontend:** React, Next.js, TypeScript, MUI, Tailwind, Framer Motion
  - **Tools:** Git, Figma, Vite, Webpack
  - **Other:** *(to be filled)*
- Years of experience or a small stat
- Download CV button

**Design notes:**
- Two-column layout: photo left, text right (direction-aware)
- Skills as Chip/Badge with icons
- Subtle entrance animation on scroll

---

### 3. Projects
**Goal:** Showcase the best work

**Content (placeholder — to be filled later):**

Each project item:
- `title`: project name
- `description`: short paragraph
- `tags`: tech stack array
- `liveUrl`: live link (optional)
- `githubUrl`: repo link (optional — omit/comment when private)
- `image`: screenshot or thumbnail
- `featured`: boolean — featured projects render as a wider card

**Data location:** `localization/messages.js` under `projects` key

```js
projects: [
  {
    title: "Project Name",
    description: "Short description of what it does and what problem it solves.",
    tags: ["Next.js", "MUI", "Redux"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",  // remove when private
    featured: true,
  },
]
```

**Design notes:**
- Grid: featured projects as wide cards, others as smaller cards
- Hover: overlay with links
- Tech badges color-coded

---

### 4. Experience
**Goal:** Work history timeline

**Content (placeholder — to be filled later):**

Each item:
- `company`: company name
- `role`: job title
- `period`: e.g. `"Jan 2024 – Present"`
- `description`: paragraph or bullet list of achievements
- `tags`: tech stack used
- `current`: boolean — current job gets accent highlight

**Design notes:**
- Vertical timeline with connecting line
- Current item (`current: true`) highlighted with accent color
- Scroll-triggered entrance animation

---

## Links

| Label      | Value                   | Visible by default |
|------------|-------------------------|--------------------|
| GitHub     | *(to be added)*         | Yes                |
| LinkedIn   | *(to be added)*         | Yes                |
| Email      | m3.work.2026@proton.me  | Yes                |
| Resume/CV  | *(PDF to be uploaded)*  | Yes                |

> Project GitHub links: when a repo is private, omit the `githubUrl` field — the button won't render.

---

## Color Palette — Proposal

The current project palette (Navy/Gold) fits an auction platform, not a personal portfolio.
Proposed new palette:

### Dark Theme
| Token                 | Value      | Usage             |
|-----------------------|------------|-------------------|
| `background.default`  | `#0d0d0d`  | page body         |
| `background.paper`    | `#141414`  | cards             |
| `text.primary`        | `#f0f0f0`  | primary text      |
| `text.secondary`      | `#888888`  | secondary text    |
| `primary.main`        | `#6366f1`  | accent — Indigo   |
| `secondary.main`      | `#a5b4fc`  | lighter accent    |

### Light Theme
| Token                 | Value      | Usage             |
|-----------------------|------------|-------------------|
| `background.default`  | `#fafafa`  | page body         |
| `background.paper`    | `#ffffff`  | cards             |
| `text.primary`        | `#111111`  | primary text      |
| `text.secondary`      | `#555555`  | secondary text    |
| `primary.main`        | `#4f46e5`  | accent — Indigo   |

> Accent color is flexible — change it if you prefer something else.

---

## Navigation

```
[Logo / Name]  ·  About  ·  Projects  ·  Experience  ·  [GitHub icon]  [Theme toggle]
```

- Sticky header with blur backdrop
- Mobile: Hamburger → Drawer
- Smooth scroll to sections (reuse existing `SmoothScrollProvider`)
- No auth / Keycloak — stripped out for the personal site

---

## Content To Fill In Later

- [ ] Bio paragraph (2-3 sentences about yourself)
- [ ] Profile photo or avatar
- [ ] Full skill list (with exact names)
- [ ] Projects (name, description, tech, links)
- [ ] Work experience (company, role, period, achievements)
- [ ] GitHub profile link
- [ ] LinkedIn profile link
- [ ] Resume PDF file
- [ ] Hero tagline (one-liner under your name)

---

## Build Order

1. `config/theme` — new palette (dark + light), strip auth-era tokens
2. `app/layout.js` — remove Keycloak/auth providers, simplify
3. `Header` — simple nav, no auth buttons
4. `Hero` section
5. `About` section
6. `Projects` section (with placeholder data)
7. `Experience` section (with placeholder data)
8. `Footer`
9. Fill in real content
