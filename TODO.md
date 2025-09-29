# Implementation Plan for The Eagle Generation Website

## Overview
This TODO tracks the step-by-step implementation of the full Next.js website based on the provided content. We will fix existing files, create top-level pages where needed (e.g., /donate, /contact, /gallery), and implement nested routes for dropdown navigation (e.g., /about-us/who-we-are). All pages will use static content from the task, Tailwind CSS for styling, and include the Navbar component. Content will match exactly, with emojis, scriptures, and links.

## Steps

### 1. Fix and Integrate Home Page
- [x] Update src/app/page.jsx: Correct imports (Navbar from Components/Navbar, HeroSection from Components/HeroSection), render them properly. Remove incorrect "Socials" import.
- [x] Refactor src/Components/HeroSection.jsx: Remove invalid imports (Navbar and self-import), make it a pure functional component exporting HeroSection. Ensure content matches Home page task exactly (Hero, Intro, Pillars, Programs, Impact, CTA).

### 2. Create Top-Level Pages (Direct Navbar Links)
- [x] src/app/donate/page.jsx: Simple donation page with form placeholder, intro text, and CTA. Include Navbar.
- [x] src/app/contact/page.jsx: Contact Us content (Banner, Details, Form fields, Ways to Connect, Scripture). Use placeholder form.
- [x] src/app/gallery/page.jsx: Gallery content (Banner, Categories with placeholder image grids, Interactive features note, Scripture). Use sample images or placeholders.

### 3. Create Nested Pages for About Us Dropdown
- [x] src/app/about-us/who-we-are/page.jsx: Who We Are section content.
- [x] src/app/about-us/vision-mission/page.jsx: Vision and Mission content.
- [x] src/app/about-us/core-values/page.jsx: Core Values list.
- [x] src/app/about-us/our-story/page.jsx: Our Story with background, history, and Matthew 5:14 scripture.
- [x] src/app/about-us/faqs/page.jsx: Full FAQs (10 questions and answers).

### 4. Create Nested Pages for Programs Dropdown
- [x] src/app/programs/campus-programs/page.jsx: Campus Programs content (Quote, Initiatives, Target Group).
- [x] src/app/programs/corporate-programs/page.jsx: Corporate Programs content.
- [x] src/app/programs/political-governance-programs/page.jsx: Political & Governance Programs content.
- [x] src/app/programs/cross-cutting-activities/page.jsx: Cross-Cutting Activities (Summit, Digital, Publications).

### 5. Create Nested Pages for Get Involved Dropdown
- [x] src/app/get-involved/become-a-member/page.jsx: Membership info, enrollment process, benefits.
- [x] src/app/get-involved/partner-with-us/page.jsx: Partnership details, how to partner.
- [x] src/app/get-involved/volunteer/page.jsx: Volunteer opportunities (placeholder based on task).
- [x] src/app/get-involved/mentor-be-mentored/page.jsx: Mentorship program details.

### 6. Create Nested Pages for Blog & Stories Dropdown
- [x] src/app/blog-and-stories/stories-of-impact/page.jsx: Stories of Impact (Testimonies, samples).
- [x] src/app/blog-and-stories/thought-leadership/page.jsx: Thought Leadership Articles (Samples).
- [x] src/app/blog-and-stories/multimedia-features/page.jsx: Multimedia (Videos, Podcasts, Photos).
- Note: Intro banner and Revelation 12:11 scripture on main if needed, but nested.

### 7. Create Nested Pages for Events Dropdown
- [x] src/app/events/flagship-annual-events/page.jsx: Flagship Events (Summit, Hackathon, Forum, Conference).
- [x] src/app/events/ongoing-programs/page.jsx: Ongoing (Labs, Retreats, Dialogues, Digital).
- [x] src/app/events/upcoming-events/page.jsx: Upcoming Events calendar (Samples for 2025-2026).

### 8. Create Nested Pages for Shop Dropdown
- [x] src/app/shop/movement-merchandise/page.jsx: Merchandise (T-Shirts, Hoodies, etc., with card layouts).
- [x] src/app/shop/kingdom-resources/page.jsx: Resources (Books, Manuals, eBooks).
- [x] src/app/shop/media-learning-products/page.jsx: Media (Webinars, Courses, Inspirational).
- [x] src/app/shop/support-packs/page.jsx: Support Packs.

### 9. Create Nested Pages for Partners Dropdown
- [x] src/app/partners/our-strategic-partners/page.jsx: List of partners with descriptions and links.
- [x] src/app/partners/become-a-partner/page.jsx: Why Partner, How to Become One, CTA.

### 10. Final Checks
- [ ] Ensure all pages import and render Navbar at top.
- [ ] Add consistent footer if needed (not in task, but optional).
- [ ] Verify links in Navbar match created routes.
- [ ] Test with `npm run dev` and browser_action for rendering.
- [ ] Update TODO.md as steps complete.

Progress will be updated after each major step.
