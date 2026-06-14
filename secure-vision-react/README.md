# SecureVision AI - React Frontend

Advanced Neural Surveillance & Activity Recognition system rebuilt in React.

## Project Structure

```
secure-vision-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Title and branding
│   │   ├── CameraCard.jsx   # Webcam canvas viewport
│   │   ├── StatsPanel.jsx   # Status, predictions, init button
│   │   └── AlertPopup.jsx   # Security breach alerts
│   ├── App.jsx              # Main application logic
│   ├── App.css              # Styling (OxygenOS 16 theme)
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies
└── dist/                    # Production build
```

## Features

- **Neural Surveillance**: TensorFlow.js + Teachable Machine pose detection
- **Threat Detection**: Automatically detects suspicious activities (classes 3+)
- **Evidence Capture**: 6-frame burst capture with timestamp overlay
- **Voice Alerts**: Text-to-speech warnings every 5 seconds
- **Evidence Download**: Save security incidents as PNG collages
- **Real-time Pose Tracking**: Skeleton overlay on detected persons

## Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Model

Uses Teachable Machine model: `https://teachablemachine.withgoogle.com/models/jLeJTw1rQ/`

## Deployment

The `dist/` folder contains the production build ready for GitHub Pages or any static host.
