# AI Xchange - Enterprise AI Platform

A modern landing page for Aligned Automation's internal AI agents marketplace, built with **Vite + React + Tailwind CSS**.

## Project Structure

```
aixchange/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:5173`

## Features

- **Modern UI**: Dark theme with glassmorphism effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**:
  - Smooth scrolling navigation with dynamic pill indicator
  - Collapsible accordion sections
  - Horizontal scrolling marketplace with navigation buttons
  - Hover effects and animations
- **Performance**: Optimized with Vite for fast HMR and builds
- **Icons**: Lucide React icons throughout the UI

## Key Sections

1. **Hero** - Main landing section with animated title and subtitle
2. **Vision** - Overview of AI integration strategy
3. **Strategic Framework** - Three pillars of enterprise AI (collapsible)
4. **Agent Marketplace** - Showcase of six AI agents with hover effects
5. **Footer** - Company info and links

## Technologies

- **React 18.3** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3.4** - Styling
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## Customization

### Colors
- Primary background: `#050505`
- Accent text: `#fff` / `#aaa`
- Border color: `#222`

Modify `src/App.jsx` inline styles or use Tailwind's arbitrary values.

### Content
Edit the `impactAreas` and `agents` arrays in `src/App.jsx` to customize sections and marketplace items.

## Next Steps

Ready for fine-tuning! You can now:
- Modify components and content
- Adjust styling and animations
- Add new sections or pages
- Integrate with backend APIs
