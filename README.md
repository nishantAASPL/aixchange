# AI Xchange - Enterprise AI Platform

A modern, production-ready landing page for Aligned Automation's internal AI agents marketplace, built with **Vite + React + Tailwind CSS**.

## 🚀 Features

### Core Components
- **Cinematic Loading Screen** - Animated splash with staggered transitions
- **Hero Section** - Full-viewport video background with overlay
- **Vision Section** - 4-card grid with benefits and visual hierarchy
- **Agent Marketplace** - Horizontal scrolling cards with interactive modals
- **AI Newsletter** - Featured content carousel
- **Policies & Guardrails** - Comprehensive security and compliance documentation
- **Navigation** - Morphing pill indicator with smooth scroll-to sections

### Design & UX
- **Dark/Light Mode** - Toggle with persistent localStorage preferences
- **Responsive Design** - Mobile-first with Tailwind CSS
- **Glassmorphism Effects** - Backdrop blur with semi-transparent layers
- **Smooth Animations** - Staggered entrance, hover effects, cinematic transitions
- **Light Navy Accents** - Strategic white and navy UI elements for visual depth
- **Interactive Modals** - Agent detail cards with landscape layout
- **Custom SVG Graphics** - Context-relevant placeholder visuals

### Technical
- **Vite + React** - Fast HMR and optimized production builds
- **CSS Custom Properties** - Theme management for light/dark modes
- **Responsive Video** - MP4 hero background with fallback
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

## 📦 Project Structure

```
aixchange/
├── public/                    # Static assets
│   ├── aligned-logo.svg      # Company logo
│   └── hero-bg.mp4           # Hero video background
├── src/
│   ├── App.jsx               # Main React component (2000+ lines)
│   ├── main.jsx              # React entry point
│   ├── index.css             # Global styles + CSS variables
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind setup
├── postcss.config.js         # PostCSS plugins
├── .gitignore                # Git exclusions
└── README.md                 # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/nishantAASPL/aixchange.git
cd aixchange

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The development server will open at `http://localhost:5173`

## 🎨 Key Sections

### 1. Hero Section
- Full-viewport video background (1280x720 MP4)
- Animated title and compelling copy
- Cinematic entrance animations
- Overlay gradient for text readability

### 2. Vision Section
- 4-card benefit grid layout
- Light navy borders with hover effects
- Colorful icons (gold, cyan, green, pink)
- Business-focused copy about AI integration

### 3. Agent Marketplace
- 6 production-ready AI agents
- Horizontal scroll with navigation buttons
- Interactive detail modals with:
  - Landscape layout (left visual, right content)
  - Built On, Data Access, Can Help With, Access Points
  - "Get Access" CTA button
- Responsive card sizing

### 4. AI Newsletter
- 3 featured articles/content cards
- Date, category, and excerpt display
- "Read Article" CTA per card
- Horizontal scroll carousel

### 5. Policies & Guardrails Page
- Separate page component
- 4 policy pillars with detailed content
- Full-screen layout with back navigation
- Comprehensive governance documentation

## 🎨 Customization Guide

### Theme & Colors
Edit CSS custom properties in `src/index.css`:
```css
:root {
  --bg-base: #050505;           /* Dark background */
  --accent-light: #e8f0ff;      /* Light blue accents */
  --accent-navy: #1a2744;       /* Navy borders */
  /* ... more variables ... */
}

[data-theme="light"] {
  /* Override for light mode */
}
```

### Agent Data
Edit the `agents` array in `src/App.jsx` (line ~600):
```javascript
const agents = [
  {
    id: 'agent-id',
    title: "Agent Name",
    headline: "Short description",
    description: "Longer description",
    tags: ['Tag1', 'Tag2'],
    builtOn: 'Copilot Studio or Azure AI Studio',
    dataAccess: [...],
    canHelpWith: [...],
    accessPoints: [...],
    visual: VisualComponent
  }
  // ... more agents
];
```

### Newsletter Content
Edit the `newsletters` array in `src/App.jsx` (line ~760):
```javascript
const newsletters = [
  {
    id: 'nl-id',
    title: 'Article Title',
    excerpt: 'Brief description...',
    date: 'Apr 15, 2026',
    category: 'Guide',
    image: '📚' // Emoji icon
  }
  // ... more articles
];
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
# Creates optimized dist/ folder
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/aixchange/',
  // ... rest of config
}
```

## 📊 Browser Support
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 📝 Push to GitHub

The project is initialized as a git repository. To push to GitHub:

### Option 1: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not already done
# https://cli.github.com/

# Authenticate with GitHub
gh auth login

# Push to remote
git push -u origin main
```

### Option 2: Using SSH
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add your SSH key to GitHub
# https://github.com/settings/ssh/new

# Update remote to use SSH
git remote set-url origin git@github.com:nishantAASPL/aixchange.git

# Push to remote
git push -u origin main
```

### Option 3: Using Personal Access Token (PAT)
```bash
# Create a PAT on GitHub
# https://github.com/settings/tokens

# When prompted for password, use the token instead
git push -u origin main
```

## 📚 Technologies

- **React 18.3** - UI library with hooks
- **Vite 5** - Next-gen build tool
- **Tailwind CSS 3.4** - Utility-first CSS
- **Lucide React** - Icon library (100+ icons)
- **PostCSS 8** - CSS transformations
- **Autoprefixer** - Vendor prefixes

## 📄 License

Internal project for Aligned Automation Services Pvt. Ltd.

## 👤 Authors

- **Project Lead**: Nishant Mishra (nishant.mishra@alignedautomation.com)

---

**Repository**: https://github.com/nishantAASPL/aixchange.git

**Last Updated**: April 2026
