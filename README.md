# ElevenLabs Text-to-Speech Next.js App

A beautiful, modern web application that generates audio from text using the ElevenLabs API, built with Next.js 14+ App Router.

## Features

- **Text-to-Speech**: Enter any text and generate audio using ElevenLabs' high-quality AI voices
- **In-Browser Playback**: Listen to the generated audio immediately
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop devices
- **Modern UI**: Enhanced gradient-based design with smooth animations and transitions
- **Intuitive UX**: Clear workflow with visual feedback during processing

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **API**: ElevenLabs Text-to-Speech API

## Setup & Running

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure API Key**
   - Open `.env` file
   - Add your ElevenLabs API key:
     ```env
     ELEVENLABS_API_KEY=your_api_key_here
     ```
   - You can get your API key from [ElevenLabs Dashboard](https://elevenlabs.io/speech-synthesis)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open the App**
   Visit `http://localhost:3000` in your browser

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository
2. Sign up/log in to [Vercel](https://vercel.com)
3. Create a new project and import your repository
4. Add your `ELEVENLABS_API_KEY` as an environment variable in Vercel project settings
5. Deploy!

### Deploy to Other Platforms

You can also deploy to platforms like Netlify, Railway, or any other provider that supports Next.js deployments. Make sure to set the `ELEVENLABS_API_KEY` environment variable in your deployment settings.

## Technical Decisions

1. **Next.js App Router**: Chosen for its modern React features, server components, and improved performance
2. **API Routes**: Used Next.js API routes for backend functionality to keep everything in one project
3. **Environment Variables**: API key is stored securely as an environment variable
4. **Client Components**: UI components that require interactivity are marked as client components
5. **Tailwind CSS**: For rapid UI development with a consistent design system
6. **TypeScript**: For better developer experience and type safety
7. **Gradient Design**: Modern gradient-based UI with smooth transitions and animations for enhanced user experience

## How It Works

1. User enters text in the input field
2. When "Generate Audio" is clicked, the app sends a request to the Next.js API route
3. The API route uses the ElevenLabs SDK to convert text to speech
4. The generated audio is streamed back to the client
5. The audio is played in the browser using the HTML5 audio element
6. After generation, the UI transforms to show the audio player with a reset option

## Project Structure

```
app/
  ├── api/
  │   └── generate/
  │       └── route.ts     # API route for text-to-speech conversion
  ├── page.tsx             # Main application page
  └── layout.tsx           # Root layout
components/
  ├── PromptInput.tsx      # Text input component with enhanced UI
  └── AudioPlayer.tsx      # Audio player component with styling
utils/
  └── api.ts               # Utility functions for API calls
```

## UI Improvements

The application features a modern, visually appealing interface with:

- **Gradient Text Header**: Eye-catching gradient text for the main heading
- **Enhanced Textarea**: Larger input area with placeholder examples
- **Animated Buttons**: Interactive buttons with hover effects and loading states
- **Visual Feedback**: Clear status indicators and error messaging
- **Smooth Transitions**: Animations for hover states and UI transformations
- **Dark Mode Support**: Full dark mode compatibility with appropriate color schemes
- **Responsive Layout**: Adapts beautifully to all screen sizes