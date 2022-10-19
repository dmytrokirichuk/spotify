# Shopify Dashboard

Spotify dashboard to test Spotify APIs and handling responses

## Screencast

![screencast](https://user-images.githubusercontent.com/105731228/196606748-5d20d216-9cc7-40e8-9079-6ccf459e7637.gif)

You can find deployed version at: https://spotify-six-lyart.vercel.app/

## Get Started

1. Install dependencies: `yarn`.
2. Add the `.env` file and add a variables: `REACT_APP_SPOTIFY_CLIENT_ID` and `REACT_APP_SPOTIFY_CLIENT_SECRET`. You can use `.env.template` as a template.
3. Run `yarn start` and visit https://localhost:3000.

## Linting

- `yarn prettier` - automatically fixes code style according to prettier rules
- `yarn lint` - checks for eslint, prettier

CI/CD pipeline automatically runs linter checks on push.