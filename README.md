# Relax & Enjoy Podcast Website

This is a personal podcast website built with the [AstroPaper](https://github.com/yyy0806/astro-paper) theme, featuring podcast episodes, an "Unlucky Calendar", and a global food recommendations map.

🏠 **Live Demo**: [https://www.easypod.fun/](easypod.fun)

<!-- Scale to 1/4 of container width -->
<img src="/public/logo.png" alt="logo" width="25%" />
---

## Key Features

- **Podcast Page**: Automatically fetches the latest episodes via RSS (`https://feed.xyzfm.space/6vnv3ae7g34t`).
- **Social Links**: Supports links to platforms like Xiaoyuzhou, Apple Podcasts, and Spotify.
- **Unlucky Calendar**: Implemented with [FullCalendar](https://fullcalendar.io/) to log and view life’s unfortunate events.
- **Global Food Map**: Displays regional food recommendations using a map component (Leaflet or Mapbox).
- **Default Styling**: Retains AstroPaper’s original typography and layout, with bilingual (EN/CN) support.

---

## Tech Stack

- **Framework**: Astro
- **Theme**: AstroPaper
- **Styling**: Tailwind CSS
- **Calendar**: @fullcalendar/react, @fullcalendar/daygrid, @fullcalendar/timegrid
- **Map**: Leaflet or Mapbox GL JS
- **Deployment**: Vercel

---

## Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/qsyk.git
   cd qsyk
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open in browser**:
   ```
   http://localhost:3000
   ```

---

## Configuration

- **RSS Source**: Update `podcastFeedUrl` in `src/config.ts` or the relevant component.
- **Calendar Events**: Maintain your unlucky events list in `src/data/calendar-events.ts` following FullCalendar’s data format.
- **Food Map Markers**: Add or edit location coordinates and descriptions in `src/data/food-map.ts`.
- **Font Settings**: If you need to adjust Chinese fonts, configure `font-family` in `astro.config.mjs` or override in `src/styles/global.css`.

---

## Deployment

1. **Push changes to GitHub**:
   ```bash
   git push origin main
   ```
2. **Connect to Vercel**: Log in to Vercel and link your GitHub repository.
3. **Select `main` branch**: Vercel will build and publish automatically.

---

## Contributing

Contributions are welcome. Please fork the repo and submit a pull request.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request on GitHub.

---

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

