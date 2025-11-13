# Calculator App Design Guidelines

## Design Approach

**Selected Approach:** Design System with Modern Calculator Patterns

Drawing inspiration from iOS Calculator and Google Calculator for their clean, touch-friendly interfaces optimized for numeric input. This utility-focused application prioritizes clarity, precision, and instant feedback over decorative elements.

**Core Principles:**
- Immediate visual feedback for all interactions
- Clear hierarchy between display, operations, and inputs
- Touch-friendly sizing with generous hit areas
- Minimal cognitive load through consistent patterns

## Typography

**Font Family:** 
- Primary: Inter or SF Pro Display (Google Fonts CDN)
- Display numbers: SF Mono or JetBrains Mono for monospaced clarity

**Type Scale:**
- Expression display: text-2xl (24px) - medium weight
- Live result: text-4xl to text-5xl (36-48px) - semibold
- History entries: text-sm (14px) - regular
- Button labels: text-lg to text-xl (18-20px) - medium
- Error messages: text-xs (12px) - medium

## Layout System

**Spacing Units:** Tailwind units of 2, 4, 6, and 8
- Component padding: p-4 to p-6
- Button gaps: gap-2 to gap-4
- Section spacing: space-y-4 to space-y-6

**Layout Structure:**

**Desktop (≥768px):**
- Max-width container: max-w-md (448px) centered
- Two-panel layout: Calculator (main) + History (sidebar, max-w-xs)
- History panel: Fixed position or slide-in drawer

**Mobile (<768px):**
- Full-width with px-4 margins
- History as bottom sheet or collapsible panel
- Single column, stacked layout

**Calculator Grid:**
- 4-column grid for button layout
- Responsive button sizing: 16-20 touch targets (64-80px minimum)
- Expression display: Full-width, top-aligned
- Result display: Below expression, right-aligned

## Component Library

### Display Panel
- Full-width container with p-6 padding
- Expression line: Left-aligned, opacity-70
- Result line: Right-aligned, bold, full opacity
- Min-height: h-32 to prevent layout shift
- Subtle inner shadow for depth

### Button System

**Size Categories:**
- Standard operators: Equal grid sizing
- Zero button: Spans 2 columns (calculator style)
- Equal button: Optional 2-row span for emphasis

**Button Groups:**
- Numbers (0-9): Primary interactive elements
- Operators (+, −, ×, ÷): Distinct visual treatment
- Functions (C, AC, DEL): Secondary treatment
- Decimal point: Grouped with numbers
- Equals: Accent treatment

**Button Specs:**
- Border-radius: rounded-2xl (16px)
- Padding: p-4 to p-6
- Shadow: shadow-md on hover, shadow-lg on active
- Typography: text-lg, font-medium

### History Panel
- List container with space-y-2
- Each entry: p-3, rounded-lg
- Expression + result format
- Timestamp: text-xs, opacity-60
- Click to recall functionality
- Clear history button at bottom

### Theme Toggle
- Floating button: Fixed position top-right or bottom-left
- Icon-only button: w-10 h-10
- Rounded-full with shadow-lg
- Smooth rotation animation on toggle (180deg)

### Error States
- Replace result with error message
- Red accent (via theme system)
- Shake animation (animate-shake, 300ms)
- Auto-clear after 2 seconds

## Animations

**Essential Only:**
- Button press: scale-95 transform, 100ms duration
- Theme transition: 300ms ease-in-out for all properties
- History slide-in: translate-x or translate-y, 250ms
- Error shake: Horizontal shake, 300ms
- Number pop: Subtle scale on display update (optional)

**Timing:**
- Instant feedback: <100ms
- UI transitions: 200-300ms
- Panel animations: 250-350ms

## Responsive Behavior

**Breakpoint Strategy:**
- Mobile-first design
- Single breakpoint at md (768px)

**Mobile Optimizations:**
- Larger button targets: min-h-16
- History as modal/drawer: Slide up from bottom
- Theme toggle: Bottom-right corner
- Full-screen focus on calculator

**Desktop Enhancements:**
- History sidebar: Always visible on right
- Keyboard hints: Subtle key indicators on hover
- Wider spacing: gap-4 instead of gap-2

## Keyboard Support

**Visual Feedback:**
- Active key highlight matches button press
- Brief glow/shadow effect on corresponding button
- Focus ring for accessibility (ring-2 ring-offset-2)

**Supported Keys:**
- Numbers: 0-9
- Operators: +, -, *, /
- Enter/Return: Equals
- Backspace: Delete
- Escape: Clear
- C: All Clear
- Decimal: Period/Comma

## Accessibility

- ARIA labels for all buttons
- Role="button" for interactive elements
- Keyboard navigation support (tab order)
- Focus indicators: ring-2 with theme-appropriate colors
- Screen reader announcements for calculations
- High contrast mode compatibility

## Images

No images required for this application. This is a purely functional calculator interface.