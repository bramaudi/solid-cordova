# solid-cordova

Build cordova apps using Solid & TailwindCSS.

## Features

- Bundle with Parcel v2
- File-based routing
- Styling with TailwindCSS

## Usage

```
git clone https://github.com/bramaudi/solid-cordova
npm install
npm run start # start development server
npm run build # build for production
```

## About routing system

Routing simply done with [solid-app-router](https://github.com/solidjs/solid-app-router) using config routes method, the routes file is stored in `src/routes.ts` and this will frequently update by automation script whenever parcel detect any changes inside `src/pages`, so feel free to just create page in there.