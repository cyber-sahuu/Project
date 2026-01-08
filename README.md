# Portfolio Website

A modern, mobile-first single-page portfolio website built with HTML, CSS, Vanilla JavaScript, and Node.js (Express).

## 🚀 Deployment
Deploy Anywhere 

| Platform | Deploy |
|---------|--------|
| ![Render](https://img.shields.io/badge/RENDER-46E3B7?style=for-the-badge&logo=render&logoColor=black) | [![Deploy on Render](https://img.shields.io/badge/DEPLOY_ON_RENDER-000000?style=for-the-badge)](https://render.com) |
| ![Railway](https://img.shields.io/badge/RAILWAY-0B0D0E?style=for-the-badge&logo=railway&logoColor=white) | [![Deploy on Railway](https://img.shields.io/badge/DEPLOY_ON_RAILWAY-000000?style=for-the-badge)](https://railway.app) |
| ![Vercel](https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white) | [![Deploy on Vercel](https://img.shields.io/badge/DEPLOY_ON_VERCEL-000000?style=for-the-badge)](https://vercel.com) |

## HTML PROMPT
```
Act as an expert Frontend Developer.

Create a modern, mobile-first single-page portfolio website
using ONLY HTML, CSS, and Vanilla JavaScript in ONE HTML file.

STRICT RULES:
- Output ONLY the final complete HTML file
- Do NOT add explanations, comments, or extra text
- Do NOT change structure, animation, colors, or layout
- Must be pixel-perfect and behavior-perfect

DESIGN REQUIREMENTS:

1) Theme & Fonts
- Use Google Font: Poppins (300, 400, 600, 700)
- Use Font Awesome 6 icons
- Dark mode by default
- Automatic light mode using prefers-color-scheme
- Smooth transitions between modes

2) Layout
- Centered card layout
- Max width: 450px
- Full viewport height
- Mobile-first design

3) Profile Image Section
- Circular profile image (132px)
- Image URL: এখানে আপনার ছবির লিংক তৈরি করে দিবেন
- Remove any black or static circles
- Add ONE animated spinning color ring using conic-gradient
- Colors must be:
  #0ea5e9, #22d3ee, #818cf8, #c084fc
- Continuous smooth rotation (2s linear infinite)
- Inner cut-out must match background color automatically (light/dark)

4) Name & Verification
- Name text: এখানে আপনার নাম লিখবেন
- Add verified badge using Font Awesome stack
- Verified color: Twitter-style blue

5) BIO Typing Animation
- Place the typing text directly under the name section
- This section represents the BIO
- Text color must use the accent color
- Font weight: medium
- Font size optimized for mobile
- Typing text:
  BIO এখানে আপনার বায়ো লিখবেন
- Implement smooth typing animation (no deleting)
- Include a blinking cursor "|"
- Cursor color must match accent color
- Animation starts automatically on page load
- Text remains visible after typing completes

6) Info Card
- Rounded card with shadow
- Rows with label on left and value on right
- Content:
  Age: এখানে আপনার বয়স দিবেন
  Gender: এখানে আপনার জেন্ডার দিবেন
  Religion: এখানে আপনার ধর্ম দিবেন
  Country: এখানে আপনার দেশের নাম দিবেন
  Address: এখানে আপনার এড্রেস দিবেন

7) Contact Button
- Full-width gradient button
- Text: "Contact Me"
- On click:
  - Smoothly expand/collapse contact section
  - Icon changes (down/up arrow)
  - Animated height + opacity

8) Contact Section
- Hidden by default
- Grid layout (2 columns)
- Buttons with icons and brand colors
- Links:
  Facebook (full width): এখানে আপনার ফেসবুক আইডি লিংক দিবেন
  Messenger: এখানে আপনার ম্যাসেঞ্জার লিংক দিবেন
  WhatsApp: এখানে আপনার হোয়াটসঅ্যাপ লিংক দিবেন
  Telegram: এখানে আপনার টেলিগ্রাম আইডির লিংক দিবেন
  YouTube: এখানে আপনার ইউটিউব চ্যানেলের লিংক দিবেন

9) Footer
- Text:
  © 2026 এখানে আপনার নাম দিবেন. All rights reserved.
- Social icons row:
  Facebook
  WhatsApp
  Telegram
  YouTube

10) Animations
- Fade-in on load
- Typing animation
- Spinning gradient ring
- Button press scale effect

OUTPUT:
Return ONLY the final HTML code that produces EXACTLY this website.
```
## 🛠 Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Node.js
- Express.js

## 📁 Project Structure

```text
portfolio/
├── index.js
├── portfolio.html
├── package.json
└── README.md
```
## ▶️ How to Run
1. Install dependencies:
```npm install```

2. Start the server:
```npm start```

3. Open in browser:
http://localhost:3000

## ✏️ Customization
- Edit portfolio.html to change content, colors, and layout
- Replace profile image URL with your own image link
- Update personal information directly in HTML

## 👤 Author
OSMAN TECHVERSE

## 📄 License
This project is free to use for personal and educational purposes.
