# Netflix GPT

- Created react app using Vite

```
npm create vite@latest netflixgpt -- --template vue
```

- Configured Tailwind from tailwindcss.com - https://tailwindcss.com/docs/installation/using-vite
- Routing of App
- Header
- Login Form
- Sign up Form
- Form Validation
- useRef hook
- Firebase setup
- Deploy firebase app to prod
- Create Signup User Account
- Implement signin user api
- created redux store with userSlice
- implement signout
- signin and signout state changed
- Update profile api
- Navigation to browse
- BugFix: private routing when user is logged in or signed out
- BugFix: Unsubscribed to the unAuthStateChanged callback
- Adding TMDB authorization to .env file
- Registered TMDB API & created an app and got access token
- Made a call to now playing api from TMDB. Also saved authorization key in .env file
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies, useTopRatedMovies, useUpcomingMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)

# Features

- Login / Signup page

  - Sign In / Sign Up Form

- Browser (after authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movie Suggestions
      - MovieLists \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Routing

- install react router
  `npm i -D react-router`

# Firebase

- install firebase
  `npm i firebase`
- install firebase tools
  `npm i -g firebase-tools`
- Login to firebase
  `firebase login`
- Initialize
  `firebase init`
- Deploy
- put public directory as build
- Deployed to firebase: https://netflixgpt-ca2b9.web.app

# Redux toolkit

- npm i -D @reduxjs/toolkit
- npm i -D react-redux
