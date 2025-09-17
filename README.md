# AA Music Distribution Website

A modern, responsive music distribution platform built with React, TypeScript, and Vite.

## Features

- 🎵 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 📊 **Analytics Dashboard** - Track your music's performance across platforms
- 🎨 **Interactive Components** - Built with Framer Motion for smooth animations
- 📱 **Mobile Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎯 **Multiple Pages** - Home, Dashboard, and Privacy Policy pages

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 4.5.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js 20.10.0 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd aa-music-distribution
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is ready for deployment on Vercel, Netlify, or any static hosting service.

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy!

The project includes a `vercel.json` configuration file for optimal deployment.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ContactForm.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── PlatformLogos.tsx
│   ├── Services.tsx
│   └── VideoSection.tsx
├── pages/              # Page components
│   ├── Dashboard.tsx
│   ├── HomePage.tsx
│   └── PrivacyPolicy.tsx
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
