## FoodWagen

FoodWagen is a Next.js + TypeScript web app for managing featured meals. Users can browse the catalog, open modals to add or edit dishes, and remove entries, all backed by the Food mock API.

### Requirements

- Node.js 18+
- npm (or pnpm/yarn/bun)

### Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site. Environment variables are not required for local development; the mock API base URL is defined in `app/api/food.ts`.

### Key Commands

- `npm run dev` – start the development server
- `npm run lint` – run lint checks
- `npm run test` – execute the test suite

### API Reference

All data is served from `https://6852821e0594059b23cdd834.mockapi.io/Food`. The app performs CRUD operations and supports filtering by name (`?name=<query>`).

### Project Structure

- `app/components` – reusable UI elements and modals
- `app/store` – Zustand store for global state
- `app/api` – fetch helpers that wrap the mock API

### Deployment

Deploy on Vercel (recommended) or any platform that supports Next.js. Ensure the production deployment is accessible over HTTPS before submission.
