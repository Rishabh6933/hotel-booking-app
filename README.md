# Havenly — Hotel Discovery App

Havenly is a production-minded hotel listing experience built with React and the Demo Hotels REST API. It presents 499 real API listings through a polished, responsive interface designed to feel like a modern travel product rather than a CRUD demo.

## Features

- Hotel discovery, detail pages, photo galleries, ratings, and INR price formatting
- Debounced name search, city filtering, multiple sort modes, and client-side pagination
- Responsive layouts for mobile, tablet, and desktop
- Loading skeletons, friendly error recovery, empty states, and custom 404
- Persistent favourites and light/dark theme via local storage
- Lazy-loaded imagery, accessible controls, and scroll-to-top behaviour

## Tech stack

React 19, Vite, React Router, Axios, Lucide React, modern CSS, and React Hooks.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, preview it with `npm run preview`, and lint with `npm run lint`.

## API

Data comes from [Demo Hotels API](https://demohotelsapi.pythonanywhere.com/) via `GET /hotels/`. The API supplies name, price, thumbnail, rating, location, description, and gallery photos. Because all API cities are Indian and no country field is provided, the UI labels locations as India. Amenities and live availability are presented conservatively with an explicit confirmation note.

## Structure

```text
src/
  components/   Reusable navigation, cards, filters, states, and controls
  hooks/        Hotel data, theme, favourites, and debounce hooks
  pages/        Home, Hotels, HotelDetails, and NotFound routes
  services/     Dedicated Axios API layer
  styles/       Global design system and responsive styling
  utils/        Formatting helpers
```
