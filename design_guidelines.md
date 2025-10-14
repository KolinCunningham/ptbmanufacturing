# PTB Manufacturing Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with luxury fashion aesthetics

**Primary References:** Net-a-Porter's sophisticated product presentation, Everlane's minimalist transparency approach, and high-end fashion brand websites that emphasize craftsmanship and material quality.

**Justification:** As a fashion agency showcasing specialized manufacturing services, PTB requires a visually sophisticated experience that communicates quality, craftsmanship, and attention to detail. The visual-rich content (process photography, garment showcases, material displays) demands a design that elevates the craftsmanship narrative.

**Core Design Principles:**
- Craftsmanship-first visual storytelling
- Sophisticated restraint with purposeful color usage
- Material-focused imagery and texture emphasis
- Clean, editorial layout with generous whitespace

## Color Palette

**Primary Colors:**
- Charcoal: 220 15% 20% (main dark neutral)
- Cream: 40 35% 95% (warm light neutral)
- Stone: 30 8% 60% (mid-tone neutral)

**Accent Colors:**
- Terracotta: 15 65% 55% (warm, earthy accent for CTAs)
- Deep Sage: 140 20% 35% (natural fiber connection)
- Warm Sand: 35 25% 85% (subtle backgrounds)

**Dark Mode Adjustments:**
- Background: 220 20% 12%
- Surface: 220 15% 18%
- Text primary: 40 20% 95%
- Accent terracotta: 15 60% 60% (slightly lighter)

## Typography

**Font Families:**
- Primary: 'Cormorant Garamond' (serif) - Headlines, elegant display text
- Secondary: 'Inter' (sans-serif) - Body text, UI elements, navigation

**Type Scale:**
- Hero headline: 4.5rem/1.1 (Cormorant, weight 300)
- Section headers: 3rem/1.2 (Cormorant, weight 400)
- Subheadings: 1.5rem/1.4 (Inter, weight 500)
- Body text: 1.125rem/1.7 (Inter, weight 400)
- UI elements: 0.95rem/1.5 (Inter, weight 500)

## Layout System

**Spacing Primitives:**
Core units: 4, 8, 12, 16, 20, 24, 32 (Tailwind units)
- Micro spacing (elements): 4, 8
- Component internal: 12, 16
- Section padding: 20, 24, 32
- Large gaps: 24, 32

**Container Strategy:**
- Full-width hero: w-full
- Content sections: max-w-7xl mx-auto px-6 lg:px-8
- Text content: max-w-4xl for optimal reading

**Grid System:**
- Services grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Process showcase: grid-cols-1 lg:grid-cols-2 (image + content pairs)
- Materials grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

## Component Library

**Navigation:**
- Fixed header with backdrop blur on scroll
- Clean logo placement (left), centered navigation links, CTA button (right)
- Minimal underline hover states for links
- Mobile: Slide-in menu with large touch targets

**Hero Section:**
- Full-viewport height (90vh) with large hero image
- Centered headline + subtext overlay with subtle dark gradient backdrop
- Dual CTAs (primary terracotta, secondary outline with blur background)

**Service Cards:**
- Asymmetric grid layout to create visual interest
- Large service image (3:4 ratio), service title, brief description
- Hover: subtle scale transform (1.02) with shadow elevation

**Process Showcase:**
- Alternating image-content layout (zigzag pattern)
- Large hyperrealistic process photos (pattern making, sewing, grading)
- Step numbers with elegant typography
- Descriptive text emphasizing craftsmanship

**Materials Section:**
- Grid of natural fiber close-ups with labels
- Hover reveals material properties overlay
- Clean card design with subtle borders

**CTA Sections:**
- Full-width with background image (garments/workspace)
- Centered messaging with dark overlay
- Primary action button + supporting text
- Secondary contact information

**Footer:**
- Multi-column layout (services, company, contact, newsletter)
- Minimal design with adequate spacing
- Newsletter signup with inline form
- Social links and trust indicators

## Images

**Hero Image:**
Large, full-width hero image (minimum 1920x1080) showing hands working with natural fabric or detailed garment construction. Professional photography style with warm, natural lighting.

**Service Images:**
- Pattern Making: Hyperrealistic image of hands working on pattern paper with rulers and tools
- Sampling: Close-up of seamstress at industrial sewing machine with natural fiber fabric
- Grading: Overhead shot of pattern pieces being measured and adjusted
- Manufacturing: Wide shot of workspace with finished garments in natural fibers

**Process/Detail Images:**
- Natural fiber textures (linen weave, cotton close-up, bamboo fabric)
- Digital printing process in action
- Quality control/inspection moments
- Finished garment details

**Image Treatment:**
- Slightly desaturated for sophistication
- Consistent warm tone throughout
- High resolution, tack-sharp focus
- Professional studio lighting quality

## Page Structure

**Hero:** 90vh with compelling "Bringing Ideas to Life" messaging

**Services Overview:** 4-column grid (stacks to 2, then 1 on mobile) with pattern making, sampling, grading, manufacturing

**Process Journey:** Alternating content showcasing concept to finished garment with 4-5 detailed steps

**Natural Fibers & Printing:** Visual grid of materials with digital printing capabilities highlight

**Portfolio Showcase:** Masonry grid or carousel of finished pieces in natural fibers

**Craftsmanship Philosophy:** Text-focused section with large pull quotes about quality and ethics

**CTA Section:** Full-width with project inquiry focus

**Footer:** Comprehensive with newsletter, quick links, contact details

**Animation Guidelines:**
- Minimal, purposeful animations only
- Subtle fade-in on scroll for sections
- Smooth scale transforms on hover (cards, images)
- No distracting or excessive motion