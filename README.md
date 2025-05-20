# Adansi Edu Consult Website

A modern, responsive website built with Next.js and Firebase for Adansi Edu Consult, an educational consulting firm.

## Features

- Responsive design optimized for all devices
- Modern UI with Tailwind CSS
- Server-side rendering with Next.js App Router
- Firebase integration for form submissions and newsletter signups
- SEO-optimized structure

## Technology Stack

- **Frontend Framework**: Next.js 14+ with App Router
- **TypeScript**: For type safety and better developer experience
- **Styling**: Tailwind CSS
- **Backend Services**: Firebase (Firestore for data storage)
- **Deployment**: Firebase Hosting

## Pages

- **Home**: Landing page with hero section, mission statement, featured packages, and newsletter signup
- **About**: Company information, history, mission, values, and team
- **Packages**: Educational consulting service packages
- **Contact**: Contact form, office information, and map

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd adansiedu-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase

1. Install Firebase CLI if you haven't already:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```
   - Select Hosting
   - Select your Firebase project
   - Set the public directory to "out"
   - Configure as a single-page app: No
   - Set up automatic builds and deploys with GitHub: Optional

4. Deploy:
   ```bash
   firebase deploy
   ```

## Project Structure

```
adansiedu-site/
├── app/ - App Router structure for pages
│   ├── page.tsx - Home page
│   ├── about/
│   │   └── page.tsx - About page
│   ├── packages/
│   │   └── page.tsx - Packages page
│   ├── contact/
│   │   └── page.tsx - Contact page
│   ├── globals.css - Global styles
│   └── layout.tsx - Root layout with common components
├── components/ - Reusable UI components
│   ├── Navbar.tsx - Navigation bar
│   ├── Footer.tsx - Footer component
│   ├── HeroSection.tsx - Hero section for home page
│   ├── MissionBlock.tsx - Mission statement component
│   ├── FeaturedPackages.tsx - Featured packages component
│   ├── NewsletterSignup.tsx - Newsletter signup form
│   └── ContactForm.tsx - Contact form component
├── public/ - Static assets
├── .env.local - Environment variables (not in repo)
├── next.config.js - Next.js configuration
├── package.json - Project dependencies and scripts
├── tailwind.config.js - Tailwind CSS configuration
└── tsconfig.json - TypeScript configuration
```

## License

This project is proprietary and confidential.

## Acknowledgements

- Design inspiration from [design reference]
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)