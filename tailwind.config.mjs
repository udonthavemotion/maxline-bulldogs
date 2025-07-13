/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Luxury Cinema Theme
        primary: '#4169E1',    // Royal Blue
        accent: '#D4AF37',     // Gold
        silver: '#C0C0C0',     // Silver
        earth: '#8B4513',      // Saddle Brown
        cream: '#F5F5DC',      // Beige
        charcoal: '#1a1a1a',   // Dark background
        obsidian: '#0f0f0f',   // Darker background
        
        // Extended palette for stud themes
        joker: {
          50: '#FDF4E3',
          100: '#F7E4B8',
          500: '#D2691E',    // Chocolate
          600: '#8B4513',    // Saddle Brown
          700: '#654321',    // Dark Brown
        },
        hannibal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          500: '#2F2F2F',    // Dark Gray
          600: '#1a1a1a',    // Charcoal
          700: '#0f0f0f',    // Black
        },
        substance: {
          50: '#FDFDF8',
          100: '#F8F8F0',
          500: '#F5F5DC',    // Beige
          600: '#E6E6CD',    // Light Gray
          700: '#D3D3D3',    // Light Steel
        },
        nirvana: {
          50: '#F0F8FF',
          100: '#E6F3FF',
          500: '#9370DB',    // Medium Purple
          600: '#8A2BE2',    // Blue Violet
          700: '#4B0082',    // Indigo
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #4169E1 0%, #8B4513 100%)',
        'hero-gradient': 'linear-gradient(to bottom right, rgba(65, 105, 225, 0.8), rgba(139, 69, 19, 0.8))',
        'card-gradient': 'linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(15, 15, 15, 0.9))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'hover-zoom': 'hoverZoom 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hoverZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'silver': '0 0 20px rgba(192, 192, 192, 0.3)',
      }
    },
  },
  plugins: [],
} 