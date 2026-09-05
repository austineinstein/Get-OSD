# Get OSD UI (React + Vite + TypeScript + Tailwind)

This is a minimal frontend for the "Get OSD" explorer API. It submits a standardized JSON payload to the API and displays the raw JSON response.

Run locally

1. Install dependencies

```bash
npm install
```

2. Create a .env file (required when the API is hosted separately)

Copy `.env.example` to `.env` and set `VITE_API_URL` to the Fancradle API endpoint provided for your deployment. The value is baked into the production bundle at build time. If the API is served by the same origin, omit the variable and the UI will use `/api/v1/explore`.

3. Start dev server

```bash
npm run dev
```

Open http://localhost:5173

Notes

- Make sure your API allows CORS from the UI origin (http://localhost:5173) during development.
- The Fancradle API must accept `POST /api/v1/explore` requests with the JSON payload shown in the explorer.
- To build for production run `npm run build` and serve the `dist` directory.
