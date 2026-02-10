# Noah Calmette | Creative Developer Portfolio

A modern, interactive portfolio website built with **React** and **Vite**. This project focuses on polished UI interactions, smooth motion, and a unique "system-like" aesthetic.

## 🚀 Features

### 🎨 Core Experience
- **Interactive Sidebar Navigation**:
  - Fully collapsible sidebar with smooth width transitions.
  - **Embedded Music Player**: Custom HTML5 audio player supporting playlists, scrubbing, and direct Spotify links.
  - **Active State Highlighting**: Sidebar links light up automatically as you scroll through sections (`Home`, `About`, `Projects`, `Contact`).
- **Responsive Design**:
  - **Desktop (>1200px)**: Persistent sidebar with multi-column layouts.
  - **Mobile/Tablet (<1200px)**: Sidebar transforms into a slide-out drawer (Burger menu interaction) to maximize content space.
  - Adaptive grids for the "About" and "Projects" sections.

### 🛠 Tech & Tools
- **Framework**: React + Vite
- **Styling**: Pure CSS / CSS Modules (No heavy UI frameworks)
- **Icons**: `react-icons` (Feather Icons, FontAwesome 6)
- **Hooks**: Custom hooks like `useKonamiCode`. 

### 🥚 Easter Eggs
- **Konami Code**: Enter `↑ ↑ ↓ ↓ ← → ← → B A` on your keyboard to trigger a simulated Blue Screen of Death (BSOD) and unlock hidden messages.

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx       # Main shell, handles Sidebar & Mobile Menu state
│   ├── Sidebar.jsx      # Navigation & Music Player logic
│   ├── MusicPlayer      # (Inside Sidebar) Audio controls & Playlist logic
│   ├── Home.jsx         # Landing section with 3D-style character card
│   ├── About.jsx        # "Now" card, stats, and hobbies grid
│   ├── Projects.jsx     # Project showcase with Tech Stack badges
│   ├── Contact.jsx      # Floating label contact form
│   └── Bsod.jsx         # Hidden "Blue Screen of Death" component
├── hooks/
│   └── useKonamiCode.js # Custom hook for key sequence detection
├── assets/              # Images, MP3s, and static resources
└── App.jsx              # Application entry & Global routing
```

## ⚡ Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 🎵 Customization

To update the music playlist, edit the `playlist` array in `src/components/Sidebar.jsx`. Ensure you have the corresponding `.mp3` files in your `public/music/` folder.

```javascript
const playlist = [
  {
    title: 'Your Song Title',
    artist: 'Artist Name',
    albumArt: '/path-to-cover.jpg',
    src: '/music/filename.mp3',
    spotify: 'https://spotify-link...'
  },
  // ...
];
```

---
*Created by Noah Calmette*
