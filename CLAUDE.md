# CLAUDE.md — Personal Website (Me)

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript — no TypeScript, no `.ts`/`.tsx` files
- **UI**: MUI v6 + Emotion (`@mui/material`, `@mui/icons-material`)
- **State**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **HTTP**: Axios (`config/http.js`)
- **Forms**: react-hook-form + yup
- **Animations**: Framer Motion
- **Dates**: moment + jalali-moment (Persian calendar support)
- **Toasts**: react-toastify
- **Carousel**: Swiper

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run lint     # ESLint
```

## Project Structure

```
app/
  layout.js                        # root layout — providers, fonts, toast
  (main)/
    layout.js                      # main layout — Header, Footer, UserContextProvider
    page.js                        # home page — composes section components
    style.js                       # page-level styled components
    _components/
      SectionName/
        index.js                   # component logic
        style.js                   # MUI styled components — all styles here
        _components/               # nested sub-components if needed
components/
  layout/
    Header.js
    Footer.js
    style.js
  SomeSharedComponent.js           # globally reusable components
config/
  http.js                          # Axios instance with auth interceptors
  auth.js                          # NextAuth authOptions (Keycloak)
  authClient.js                    # client-side auth helpers (logout)
  nextAuthToken.js                 # SSR token extraction from cookies
  theme/
    theme.js                       # MUI theme root (direction, palette, components, typography)
    palettes/
      primary.js                   # dark theme palette
      light.js                     # light theme palette
      index.js                     # exports { dark, light }
    components/                    # MUI component overrides (Button, Card, TextField…)
    typography.js
    shadows.js
context/
  ThemeSwitcherContextProvider.js  # dark/light toggle + MUI ThemeProvider
  LocalizationProvider.js          # fa/en i18n, direction, dictionary
  StoreProvider.js                 # Redux Provider
  UserContextProvider.js           # server-fetched user data
constants/
  routes.js                        # ROUTE_PATHS
  general.js
store/
  index.js
  utils.js                         # createThunkFromApi
  slices/
    <domain>/
      api.js                       # endpoint URL constants
      <domain>Api.js               # authApi = { method: () => http.get(endpoint) }
      <domain>Slice.js             # createSlice + extraReducers
hooks/
localization/
  config.js                        # LOCALES, DEFAULT_LOCALE, getDirection
  messages.js                      # fa/en dictionaries
```

## Styling Rules

**All styles go in the colocated `style.js` file — never inline, never CSS classes.**

```js
// style.js — always "use client" at top
"use client";

import { Box, styled } from "@mui/material";

export const CardRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: 8,
  border: "1px solid",
  borderColor: theme.palette.divider,
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",      // always pair with backdropFilter
}));
```

- Spacing: always `theme.spacing()` — no raw `px` values
- Responsive: `theme.breakpoints.down("md")` inside the styled callback
- Glassmorphism cards: `backdropFilter + WebkitBackdropFilter + border + borderColor: theme.palette.divider`
- `borderRadius: 8` for cards/chips/inputs
- Section animated backgrounds: use `sectionAnimatedBackground(theme, options)` from `app/(main)/style.js`

```js
// section background glow helper
import { sectionAnimatedBackground } from "../../style";

export const MySection = styled(Box)(({ theme }) => ({
  position: "relative",
  ...sectionAnimatedBackground(theme, { opacity: 0.6, duration: "12s" }),
}));
```

- Named exports from `style.js`, default export from `index.js`

## Component Conventions

```js
// index.js
"use client";   // only if the component uses hooks/events — omit for server components

import { HeroRoot, HeroTitle } from "./style";  // import all styled components from style.js

function Hero() {
  const { dictionary } = useLocalization();
  // ...
}

export default Hero;
```

- Function components, never class components
- Default export for the component itself
- Colocate sub-components in `_components/` inside the section folder
- Use `Grid2` (not `Grid`) from MUI v6

## Localization

Custom i18n system — NOT next-intl or i18next.

```js
const { locale, direction, dictionary, isRtl, setLocale, toggleLocale } = useLocalization();

// All user-visible text from dictionary
<Typography>{dictionary.hero.title}</Typography>
```

- Add new strings to `localization/messages.js` under both `fa` and `en` keys
- Default locale: `fa` (RTL), secondary: `en` (LTR)
- Direction is applied automatically to MUI theme and `document.documentElement`
- Locale/theme persisted via cookies (`black-five-locale`, `black-five-theme`)

## Theme

```js
const { theme, setTheme, toggleTheme } = useContext(ThemeSwitcherContext);
// THEMES.dark | THEMES.light
```

- Palettes in `config/theme/palettes/` — `primary.js` (dark), `light.js`
- Custom palette keys: `theme.palette.modules.*` (glassmorphism, glow colors), `theme.palette.colors.*`
- `theme.palette.text.text` — secondary body text (not `.secondary` which is gold)
- Extend palette keys only inside the relevant palette file, not inline

## HTTP / API

```js
// store/slices/auth/api.js — endpoint constants
export const userInformation = "/api/client/users/me";

// store/slices/auth/authApi.js — API client
import http from "@/config/http";
import { userInformation } from "./api";

export const authApi = {
  userInformation: async () => await http.get(userInformation),
};

// store/slices/auth/authSlice.js — Redux slice
export const getUserInformation = createThunkFromApi("auth/getUserInformation", authApi.userInformation);
```

- All backend calls through `config/http.js`
- All backend paths prefixed `/api/client/` — rewritten to `NEXT_PUBLIC_API_URL` in `next.config.js`

## Redux

```js
import { createThunkFromApi } from "@/store/utils";

export const someAction = createThunkFromApi("domain/actionName", domainApi.method);

// in extraReducers:
builder.addCase(someAction.fulfilled, (state, { payload }) => {
  state.someKey = payload?.data;
});
```

- RTK `createSlice` — one slice per domain under `store/slices/`
- `createThunkFromApi` wraps async API calls into thunks
- Custom `useDispatch` hook from `hooks/useDispatch.js`

## Path Alias

`@/` → project root (`./`)

```js
import { useLocalization } from "@/context/LocalizationProvider";
import http from "@/config/http";
```

## Environment Variables

```
NEXT_PUBLIC_API_URL=      # backend base URL
```

See `.env.example` for full list. Never commit `.env.local`.
