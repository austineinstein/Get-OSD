# Get OSD

The explorer uses the deployed FanCradle Worker API by default:

`https://blue-lake-2cdb.fancradle.workers.dev/api/v1/explore`

Set `VITE_API_URL` when running against another compatible API, such as a local
gateway during development.

## Explorer network errors

If the explorer shows `network_error` while the Worker responds successfully to
`curl`, inspect the browser response for `Access-Control-Allow-Origin`. A
browser reports a missing CORS header as a network failure even when the API
returns HTTP 200. The deployed Worker must include the app origin in its
`ALLOWED_ORIGINS` configuration, or explicitly allow `*` for a public
read-only API.

Verify the deployed configuration with:

```sh
curl -i -H 'Origin: https://get-osd.vercel.app' \
	https://blue-lake-2cdb.fancradle.workers.dev/api/v1/explore/block/latest
```

The response must contain `Access-Control-Allow-Origin` before browser clients
can call the API.

The production Worker deployment sequence is:

```sh
cd cloudflare-worker
npx wrangler login
npx wrangler secret put ALLOWED_ORIGINS
# Enter: https://get-osd.vercel.app
npx wrangler deploy
```

The Worker should normalize configured origins by trimming whitespace and
trailing slashes, handle `OPTIONS` with `204 No Content`, and attach CORS
headers to both success and error responses. A successful API status alone is
not sufficient for browser access.
It was known as Real Blues.


Now it's something else entirely.


Get started


Clone the repo. Run it locally. Make it yours.

`git clone github.com/austineinstein/get-osd`

`cd get-osd/oustor`

`npm install`

`npm run dev`

Or deploy directly from GitHub when you're ready.

Why is the UI separate?

Because your interface shouldn't be tied to how you deploy.

The deployment is yours.

The UI is yours.

Run the interface locally and experiment with it before anything goes live. Change it. Break it. Rebuild it. Make it fit the way you work.

Nothing needs to be deployed while you're figuring it out. (https://docs.google.com/document/d/1GQL2o4OWZUd_rVXHprTLA6xzZ1MKYu77OZKo9ojn8-I/edit?usp=drivesdk)


Local first. Deploy when ready.

You control the interface.

You control the experience.

You decide when it goes live.

"Follow this link to join the active repo — it's free! →" 

Deploy from GitHub →
