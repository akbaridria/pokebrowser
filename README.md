# PokeBrowser

A modern Pokémon browser built with React, TypeScript, and Vite.

## Try It Out

[Live Demo](https://pokebrowser.vercel.app)

## Tech Stack

### Frontend Framework
- **React 19** – UI library
- **TypeScript** – Type safety
- **Vite** – Fast build tool

### Styling
- **Tailwind CSS** – Utility-first CSS framework

### UI Component Library
- **shadcn/ui** – Headless, accessible UI components
- **Radix UI** – Accessible UI primitives
- **Lucide React** – Icon library

### State & Data Management
- **TanStack React Query** – Data fetching and caching
- **nuqs** – Query string state management

### Routing
- **React Router 7** – Routing

## Folder Structure

```
.
├── public/                  # Static assets
├── src/
│   ├── api/                 # API client and endpoints
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable UI components
│   │   ├── header/          # Header and its subcomponents 
│   │   └── ui/              # UI primitives (Button, Card, etc.)
│   ├── hooks/               # Custom React hooks (debounce, api integration hooks and etc)
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components (home, detail, layouts)
│   ├── providers/           # Context providers (e.g., theme)
│   ├── routes/              # App route definitions
│   ├── types.ts             # TypeScript types // we can also make it a folder for large project.
│   ├── App.tsx              # App root component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Features

- Browse Pokémon with multiple grid views
- Search and filter Pokémon
- Detailed Pokémon stats and abilities
- Responsive design for mobile and desktop
- Theme switcher (light/dark mode)
- Lazy image loading for performance
- Accessible UI components