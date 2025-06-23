# Sankar Hill County - Real Estate Web Application

## Overview

This is a full-stack web application for Sankar Hill County, a premium gated township by Dwaraka Developers. The application serves as a marketing and lead generation platform for a residential real estate project in Vinukonda, featuring luxury apartments, open plots, and premium amenities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: TanStack Query for server state management
- **Animations**: AOS (Animate On Scroll) library for smooth animations

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage (development) with database-ready schema

### Development Environment
- **Platform**: Replit with integrated PostgreSQL
- **Hot Reload**: Vite dev server with Express middleware integration
- **Error Handling**: Runtime error overlay for development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contact Submissions Table**: Lead capture form data (name, phone, email, interest, message, created_at)
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact` - Contact form submission with validation
- `GET /api/contacts` - Retrieve all contact submissions (admin functionality)

### UI Components
- **Landing Page Sections**: Hero, About, Master Layout, Projects, Amenities, Gallery, Contact
- **Interactive Elements**: Contact form, WhatsApp integration, smooth scrolling navigation
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Data Flow

1. **User Interaction**: Visitors browse the single-page application showcasing the real estate project
2. **Lead Generation**: Contact form captures user information with client-side validation
3. **API Processing**: Form submissions are validated server-side using Zod schemas
4. **Database Storage**: Valid submissions are stored in PostgreSQL via Drizzle ORM
5. **User Feedback**: Toast notifications provide immediate feedback on form submission status

## External Dependencies

### Core Dependencies
- **UI Framework**: React ecosystem with hooks and context
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type checking
- **HTTP Client**: Native fetch API with custom wrapper
- **Styling**: Tailwind CSS with Radix UI primitives

### Third-Party Integrations
- **WhatsApp Business**: Direct messaging integration for lead follow-up
- **Unsplash Images**: High-quality real estate imagery
- **Google Fonts**: Inter font family for modern typography
- **AOS Library**: Scroll-triggered animations

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` runs Express server with Vite middleware
- **Hot Reload**: Automatic browser refresh on file changes
- **Database**: Local PostgreSQL instance via Replit

### Production
- **Build Process**: `npm run build` creates optimized static assets and bundles server code
- **Server Bundle**: ESBuild creates production-ready Node.js bundle
- **Static Assets**: Vite optimizes client-side code with code splitting
- **Deployment**: Replit autoscale deployment target

### Environment Configuration
- **Database URL**: Environment variable for PostgreSQL connection
- **Port Configuration**: Configurable port with default 5000
- **Asset Serving**: Express serves static files in production

## Changelog

```
Changelog:
- June 23, 2025. Initial setup of full-stack real estate website
- June 23, 2025. Integrated authentic project images and floor plans
  - Added actual architectural renderings for all 6 projects
  - Updated gallery with real project photos
  - Included authentic layout plan from developer
  - Enhanced project descriptions with real taglines
- June 23, 2025. Enhanced project details and location integration
  - Added Google Maps integration with real location link
  - Implemented detailed project modals with floor plans
  - Added individual floor plan viewing for each project
  - Included project area specifications and contact options
- June 23, 2025. Premium design overhaul with responsive enhancements
  - Implemented luxury color palette with premium gradients
  - Added comprehensive icon system throughout the interface
  - Enhanced mobile responsiveness with improved touch targets
  - Integrated floating animations and premium visual effects
  - Upgraded typography and spacing for premium aesthetic
  - Added glass morphism effects and enhanced shadows
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```