# AI Forum 2025 Landing Page

A modern and responsive landing page for the AI Forum 2025 event, built with Next.js 14, Tailwind CSS, and React Hook Form.

## Features

- ✨ Modern, responsive design (mobile + desktop)
- 🎯 Hero section with event title and CTA
- 📖 About section with key topics
- 👥 Featured speakers section
- 📝 Registration form with validation
- 🔔 Form submission alerts
- 🚀 Smooth scrolling navigation
- 📱 Mobile-friendly navigation
- 🎨 Gradient backgrounds and animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Language**: TypeScript

## Getting Started

### Installation

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-forum-landing/
├── app/
│   ├── api/
│   │   └── register/route.ts     # API endpoint for form submission
│   ├── components/
│   │   ├── Navigation.tsx        # Sticky navigation
│   │   ├── Hero.tsx              # Hero section
│   │   ├── About.tsx             # About section
│   │   ├── Speakers.tsx          # Speakers section
│   │   ├── RegistrationForm.tsx  # Registration form
│   │   └── Footer.tsx            # Footer
│   ├── globals.css
│   └── page.tsx                  # Main page
└── package.json
```

## Form Submission Configuration

Edit `app/api/register/route.ts` to integrate with:

**Option 1: Telegram Bot**
```env
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
```

**Option 2: Email Service** (Resend, SendGrid, etc.)
```env
RESEND_API_KEY=your_key
```

**Option 3: Database** (Prisma, MongoDB, Supabase, Firebase)

## Customization

- **Hero**: Edit `app/components/Hero.tsx`
- **About/Topics**: Edit `app/components/About.tsx`
- **Speakers**: Edit `app/components/Speakers.tsx`
- **Footer/Contacts**: Edit `app/components/Footer.tsx`
- **Styles**: Modify Tailwind classes or `app/globals.css`

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js host.

## Team Roles

- **PM**: Tasks, deadlines, goals
- **Frontend Dev**: Layout and logic
- **Designer**: Visuals and branding
- **QA**: Testing and validation

## Timeline

- **Week 1**: MVP with core features
- **Week 2**: Testing and deployment
