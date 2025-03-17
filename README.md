# Modern Web Design Portfolio

A sleek, modern web portfolio showcasing professional web design and development services. Built with Next.js, Tailwind CSS, and modern UI components.

![Project Screenshot](public/images/screenshot.png)

## Features

- **Responsive Design**: Fully responsive layout that looks great on all devices
- **Interactive Carousel**: Auto-scrolling carousel with custom controls
- **Modern UI Elements**: 
  - Transparent scroll header that appears on scroll
  - Minimalist footer with comprehensive navigation
  - Beautiful gradient text elements
  - Glass morphism effects
- **Dark Mode Support**: Compatible with light and dark mode preferences
- **Performance Optimized**: Fast loading times and smooth animations
- **Custom Typography**: Enhanced with modern variable fonts (Outfit, Inter, etc.)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Google Fonts (Geist, Outfit, Inter, etc.)
- **UI Components**: Custom components with shadcn/ui structure
- **Animation**: CSS transitions and Tailwind animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-web-portfolio.git
   cd modern-web-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.js           # Root layout with fonts
│   ├── page.js             # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   │   └── button.jsx      # Button component
│   ├── Carousel.jsx        # Feature carousel
│   ├── Header.jsx          # Transparent scroll header
│   ├── Footer.jsx          # Site footer
│   └── ConfettiCursor.jsx  # Interactive cursor effect
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── favicon.ico         # Site favicon
└── tailwind.config.js      # Tailwind configuration
```

## Customization

### Fonts

The project uses Google Fonts with Next.js font optimization. You can modify the fonts in `app/layout.js`:

```javascript
import { Inter, Outfit, Plus_Jakarta_Sans, Space_Grotesk, Lexend } from "next/font/google";

// Font configurations
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Add to body className
<body className={`${inter.variable} ${outfit.variable} antialiased`}>
```

### Colors

The primary color scheme uses indigo and purple gradients. Modify the gradients in the relevant components or update the theme in `tailwind.config.js`.

### Images

Replace the carousel images in the `public/images/` directory with your own. Update the image paths in the `Carousel.jsx` component.

## Deployment

Deploy on Vercel for the best experience with Next.js:

```bash
npm run build
# or
vercel deploy
```
