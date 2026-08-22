# Get OSD UI (React + Vite + TypeScript + Tailwind)

This is a minimal frontend for the "Get OSD" explorer API. It submits a standardized JSON payload to the API and displays the raw JSON response.

Run locally

1. Install dependencies

```bash
npm install
```

2. Create a .env file (optional)

Copy `.env.example` to `.env` and update VITE_API_URL if your API runs on a different origin/port.

3. Start dev server

```bash
npm run dev
```

Open http://localhost:5173

Notes

- Make sure your API allows CORS from the UI origin (http://localhost:5173) during development.
- To build for production run `npm run build` and serve the `dist` directory.
