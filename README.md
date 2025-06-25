# RealEstatePortal – Complete Guide

Welcome to RealEstatePortal! This is a modern, visually appealing real estate website built with React, TypeScript, Tailwind CSS, and Google Apps Script for backendless form submissions. This README will guide you through every step, from understanding the project to deploying it live with your own custom domain. No technical background required!

---

## Table of Contents
1. Project Overview
2. Features
3. How the Project Works
4. Folder Structure Explained
5. How to Run the Project Locally
6. How to Set Up the Contact Form Backend (Google Apps Script)
7. How to Deploy the Website on Railway
8. How to Connect Your Domain from GoDaddy
9. How to Customize the Website
10. Troubleshooting & FAQ
11. Credits & Contact

---

## 1. Project Overview

RealEstatePortal is a website for real estate businesses to showcase their projects, amenities, and receive inquiries from potential customers. It is designed to be easy to use, beautiful, and works on all devices (mobile, tablet, desktop).

---

## 2. Features
- Modern UI: Built with React, TypeScript, and Tailwind CSS for a fast and beautiful experience.
- Project Showcase: Display your real estate projects with images, floor plans, and details.
- Contact Form: Visitors can send their details and messages directly to your Google Sheet and email.
- No Backend Server Needed: Uses Google Apps Script for form submissions (no server hosting required for backend).
- Multi-language Support: Easily add more languages.
- Easy Hosting: Deploy on Railway with a few clicks.
- Custom Domain: Connect your own domain from GoDaddy.

---

## 3. How the Project Works

- Frontend: Built with React (using Vite for fast development), styled with Tailwind CSS.
- Contact Form: When a user submits the form, the data is sent to a Google Apps Script Web App. This script saves the data to a Google Sheet and sends you an email notification.
- No backend server is needed!

---

## 4. Folder Structure Explained

```
RealEstatePortal/
├── client/              # The main website (React app)
│   ├── src/
│   │   ├── components/  # All UI components (navbar, contact form, etc.)
│   │   ├── pages/       # Main pages (home, not-found, etc.)
│   │   ├── contexts/    # App-wide state (theme, language)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities (API helpers, etc.)
│   │   └── ...
│   ├── public/          # Static files (favicon, videos)
│   └── index.html       # Main HTML file
├── attached_assets/     # Images, floorplans, and other assets
├── server/              # (Optional) Node backend (not used for contact form)
├── shared/              # Shared types and schemas
├── README.md            # This file
└── ...                  # Config files (package.json, etc.)
```

---

## 5. How to Run the Project Locally

### Step 1: Install Node.js
- Download and install Node.js from [nodejs.org](https://nodejs.org/). (Choose the LTS version.)

### Step 2: Download the Project
- Click the green "Code" button on GitHub, then "Download ZIP". Unzip it on your computer.
- Or, if you know Git, run: `git clone <repo-url>`

### Step 3: Install Dependencies
- Open a terminal/command prompt in the project folder.
- Run:
  ```bash
  npm install
  # or if you have pnpm:
  pnpm install
  ```

### Step 4: Start the Development Server
- Run:
  ```bash
  npm run dev
  # or
  pnpm dev
  ```
- Open the link shown in the terminal (usually http://localhost:5173) in your browser.

You can now see and edit the website locally!

---

## 6. How to Set Up the Contact Form Backend (Google Apps Script)

This lets you collect form submissions in a Google Sheet and get email notifications, without any backend server.

### Step 1: Create a Google Sheet
- Go to [Google Sheets](https://sheets.google.com/) and create a new sheet (e.g., "Contact Submissions").

### Step 2: Create a Google Apps Script
- In your sheet, click `Extensions` > `Apps Script`.
- Delete any code and paste the provided Apps Script code (see below).

### Step 3: Paste the Apps Script Code
- Use the code you already have (with `doGet`, `doPost`, and `setCorsHeaders`).
- Save the script.

### Step 4: Deploy as Web App
- Click `Deploy` > `New deployment`.
- For "Select type", choose `Web app`.
- Set access to `Anyone`.
- Click `Deploy` and copy the Web App URL.

### Step 5: Update the React Contact Form
- In `client/src/components/contact.tsx`, update the URL to your new Web App URL.

### Step 6: Test the Form
- Fill out and submit the form on your website.
- Check your Google Sheet and email for the submission.

---

## 7. How to Deploy the Website on Railway

Railway is a platform that lets you host your website for free (with some limits) or paid.

### Step 1: Create a Railway Account
- Go to [railway.app](https://railway.app/) and sign up.

### Step 2: Connect Your GitHub Repository
- Click `New Project` > `Deploy from GitHub repo`.
- Select your RealEstatePortal repository.

### Step 3: Configure Build Settings
- Railway usually detects everything automatically.
- If needed, set:
  - Build command: `npm run build` (or `pnpm build`)
  - Start command: `npm run preview` (or `pnpm preview`)

### Step 4: Deploy
- Click `Deploy`.
- After a few minutes, your site will be live at a Railway-provided URL (e.g., `https://yourproject.up.railway.app`).

---

## 8. How to Connect Your Domain from GoDaddy

### Step 1: Buy a Domain
- Go to [GoDaddy](https://www.godaddy.com/) and purchase your desired domain.

### Step 2: Add Domain in Railway
- In your Railway project, go to `Domains` > `Add Domain`.
- Enter your domain (e.g., `yourdomain.com`).
- Railway will show you DNS records to add (CNAME or A record).

### Step 3: Add DNS Records in GoDaddy
- Go to GoDaddy > `My Products` > `DNS` for your domain.
- Add the DNS records provided by Railway.
- Save changes.

### Step 4: Wait for DNS Propagation
- This can take a few minutes to a few hours.
- Once done, Railway will show your domain as `Active`.
- Your site is now live at your custom domain!

---

## 9. How to Customize the Website

- Change Project Info: Edit the `projects` array in `client/src/components/projects.tsx`.
- Change Images: Replace or add images in `attached_assets/` and update imports.
- Change Contact Email: Update the email in your Google Apps Script code.
- Change Text/Content: Edit the relevant files in `client/src/components/` and `client/src/pages/`.
- Add More Languages: Update the language context and translation files.

---

## 10. Troubleshooting & FAQ

Q: The contact form doesn't work!
- Make sure your Google Apps Script is deployed as a Web App with `Anyone` access.
- Double-check the URL in your React code.
- Check your browser's console for errors.
- Make sure CORS headers are set in your Apps Script.

Q: My domain isn't working!
- Wait for DNS propagation (can take up to 24 hours).
- Double-check DNS records in GoDaddy.
- Make sure the domain is added in Railway.

Q: How do I update the site?
- Make changes locally, commit and push to GitHub. Railway will auto-deploy.

---

## 11. Credits & Contact

- UI: React, Tailwind CSS
- Hosting: Railway
- Domain: GoDaddy
- Backendless forms: Google Apps Script
