# Muscle Project

An interactive educational platform focused on muscle physiology and fitness knowledge.

## Features

- Interactive quiz system with comprehensive muscle physiology questions
- Real-time leaderboard tracking
- Animated scroll-based sections with engaging content
- Mobile-responsive design
- Progress tracking and scoring system

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd muscle-project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **State Management**: Zustand
- **Form Handling**: React Hook Form

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── sections/       # Page sections
│   ├── quiz/          # Quiz-related components
│   └── leaderboard/   # Leaderboard components
├── hooks/              # Custom React hooks
├── lib/               # Utilities and shared logic
├── pages/             # Page components
└── assets/            # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.
