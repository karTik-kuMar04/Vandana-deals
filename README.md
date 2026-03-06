# Vandana Brass Showpieces – Website Specification

## 1. Project Overview

Build a bold, premium e-commerce landing website for a handcrafted brass showpiece brand named **Vandana**.

The website should feel:
- Royal
- Luxurious
- Rooted in Indian heritage
- Modern but spiritual
- Brown + Antique Gold dominant theme
- Visually bold and popping on screen

---

## 2. Tech Stack

Frontend:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

Backend:
- Next.js API routes (serverless)
- Nodemailer for sending email to Gmail

Architecture:
- JSON-driven product system
- JSON-driven social links

---

## 3. Design System

### Color Palette

Primary Brown: #3B2A1A  
Dark Brown: #2A1B0F  
Antique Gold: #C6A75E  
Metallic Brass: #B08D57  
Soft Cream: #F5E6C8  
Black Accent: #111111  

### Typography

- Headings: Elegant Serif (luxury feel)
- Body: Clean Sans-serif
- Bold large hero text

### UI Style

- Smooth animations
- Glow effect on CTA
- Subtle brass texture background
- Soft shadows
- Rounded corners (12px–16px)
- Premium card-based layout

---

## 4. Website Structure

### 4.1 Hero Section

- Full width banner
- Background: warm brown gradient with subtle brass texture
- Heading: "Timeless Brass. Eternal Devotion."
- Subheading: "Handcrafted Brass Showpieces for Your Sacred Spaces"
- CTA Button: "Explore Collection"
- Smooth fade-in animation

---

### 4.2 Product Grid Section

Products will be rendered dynamically from JSON.

Each product card must contain:
- Image
- Name
- Short Description
- Price
- CTA Button

Logic:
- If `is_available = true`
    → Show button: "Buy Now on Flipkart"
- If `is_available = false`
    → Show badge: "Coming Soon"

UI Behavior:
- Hover glow effect (gold outline)
- Smooth lift animation on hover
- Responsive grid (4 columns desktop, 2 tablet, 1 mobile)

---

### Sample Product JSON Structure

```json
[
  {
    "id": 1,
    "name": "Brass Ganesha Idol",
    "description": "Handcrafted antique brass Ganesha for home decor.",
    "price": 2499,
    "image": "/images/ganesha.jpg",
    "flipkart_url": "https://flipkart.com/xyz",
    "is_available": true
  }
]
