# Setup Guide - AI Forum 2025 Landing Page

## Quick Start

1. **Navigate to project folder:**
   ```bash
   cd ai-forum-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit http://localhost:3000

## Form Submission Setup

### Option 1: Telegram Integration

1. Create a Telegram bot via [@BotFather](https://t.me/botfather)
2. Get your bot token
3. Get your chat ID (use [@userinfobot](https://t.me/userinfobot))
4. Create `.env.local` file:
   ```env
   TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
   TELEGRAM_CHAT_ID=123456789
   ```
5. Uncomment the `sendToTelegram` function in `app/api/register/route.ts`

### Option 2: Email Integration

#### Using Resend

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Create `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
4. Install Resend:
   ```bash
   npm install resend
   ```
5. Uncomment and configure the email function in `app/api/register/route.ts`

#### Using SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Create `.env.local`:
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```
4. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

### Option 3: Database Integration

#### Using Prisma + PostgreSQL

1. Install Prisma:
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

2. Update `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/aiforum"
   ```

3. Create schema in `prisma/schema.prisma`:
   ```prisma
   model Registration {
     id           String   @id @default(cuid())
     name         String
     email        String
     phone        String
     organization String
     createdAt    DateTime @default(now())
   }
   ```

4. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

## Customization Guide

### 1. Update Event Information

**File:** `app/components/Hero.tsx`
- Change event title (line 11)
- Update subtitle (line 14)
- Modify description (line 17)

**File:** `app/components/About.tsx`
- Update event description (line 16-19)
- Change key topics array (line 3-10)

### 2. Update Speakers

**File:** `app/components/Speakers.tsx`
- Modify speakers array (line 3-26)
- Add/remove speaker entries

### 3. Update Contact Info

**File:** `app/components/Footer.tsx`
- Change contact details (line 15-17)
- Update social media links (line 22-70)

### 4. Customize Colors

Replace Tailwind color classes throughout:
- Blue: `blue-600`, `blue-700`, etc.
- Purple: `purple-600`, `purple-500`, etc.

### 5. Change Fonts

**File:** `app/layout.tsx`
- Update font imports from Google Fonts or local fonts

## Building for Production

```bash
# Build the application
npm run build

# Test production build locally
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in project settings
5. Deploy

### Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. New site from Git
4. Add environment variables
5. Deploy

### Manual Deployment

Build and upload to any Node.js hosting:
```bash
npm run build
```

Upload `.next`, `public`, `package.json`, and `node_modules` to your server.

## Testing Checklist

- [ ] All sections display correctly
- [ ] Navigation scrolls smoothly
- [ ] Form validates all fields
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] Error handling works
- [ ] Responsive on mobile devices
- [ ] All links work
- [ ] Social media links functional

## Troubleshooting

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Form not submitting
1. Check browser console for errors
2. Verify API route at `/api/register`
3. Check environment variables
4. Test API endpoint directly

## Support

For issues:
1. Check the [README.md](README.md)
2. Review Next.js documentation
3. Check the project repository issues

## Next Steps

1. ✅ Test the site at http://localhost:3000
2. ✅ Customize content and styling
3. ✅ Set up form submission
4. ✅ Test on mobile devices
5. ✅ Build for production
6. ✅ Deploy to hosting platform
