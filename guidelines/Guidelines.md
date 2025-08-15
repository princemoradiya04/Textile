# Professional 100px Padding & Responsive Standards

## 100px Container System

### Primary Container Class
Always use `.container-100` for main content containers. This class provides:
- **Mobile (320px+)**: 16px padding
- **Large Mobile (375px+)**: 20px padding  
- **Small Tablet (480px+)**: 24px padding
- **Tablet (640px+)**: 32px padding
- **Large Tablet (768px+)**: 48px padding
- **Small Desktop (1024px+)**: 64px padding
- **Desktop (1280px+)**: 80px padding
- **Large Desktop (1440px+)**: 96px padding
- **XL Desktop (1536px+)**: 100px padding (TARGET)
- **Ultra Wide (1920px+)**: 100px padding with max-width constraint

### Container Variants
- `.container-narrow` - Max width 768px
- `.container-medium` - Max width 1024px  
- `.container-wide` - Max width 1440px
- `.container-full` - No max width constraint

### Section Padding System
Use `.section-padding-responsive` for vertical spacing:
- **Mobile**: 32px top/bottom
- **Large Mobile**: 40px top/bottom
- **Small Tablet**: 48px top/bottom
- **Tablet**: 56px top/bottom
- **Large Tablet**: 64px top/bottom
- **Small Desktop**: 80px top/bottom
- **Desktop**: 96px top/bottom
- **Large Desktop**: 112px top/bottom
- **XL Desktop**: 128px top/bottom

## Standard Implementation Pattern

```jsx
// Standard layout structure
<section className="section-padding-responsive bg-white">
  <div className="container-100">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      // Content here
    </div>
  </div>
</section>
```

## Responsive Guidelines

### Breakpoint System
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px  
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px - 1535px
- **XL Desktop**: 1536px+

### Typography Scaling
Use responsive typography classes:
- `.text-display` - Hero headings
- `.text-heading` - Section headings
- `.text-subheading` - Subsection headings
- `.text-body-lg` - Large body text
- `.text-body` - Standard body text
- `.text-caption` - Small text

### Grid System
Use `.grid-12` with responsive column classes:
- `.col-{1-12}` - Base columns
- `.sm:col-{1-12}` - Small screens
- `.md:col-{1-12}` - Medium screens
- `.lg:col-{1-12}` - Large screens
- `.xl:col-{1-12}` - Extra large screens

## Card & Button Standards

### Cards
Use standard Tailwind utilities only:
```jsx
// Standard card
className="rounded-xl border border-black/5 bg-white shadow-md p-6"

// Interactive card
className="rounded-xl border border-black/5 bg-white shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"

// Dark card
className="rounded-xl border border-white/10 bg-neutral-900 shadow-md p-6"
```

### Buttons
```jsx
// Primary button
className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-accent text-accent-foreground hover:opacity-90"

// Secondary button  
className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium border border-black/10 hover:bg-black/5"
```

## Utility Class Rules

### FORBIDDEN
- Custom utility classes (e.g., card-modern, btn-soft, grid-pro)
- CSS-in-JS style utility names (*-modern, *-soft, *-glass)
- Hardcoded pixel values without responsive considerations

### REQUIRED
- Use only standard Tailwind v4 utilities
- Follow 100px padding system
- Implement responsive design for ALL components
- Use semantic component names (Card/Product, Button/Primary)
- Convert reused styles to proper React components

## Device Testing Requirements

### Mobile Optimization
- Test on iPhone SE (375px), iPhone 12 (390px), iPhone 14 Pro Max (430px)
- Ensure touch targets are minimum 44px
- Optimize for thumb navigation

### Tablet Optimization  
- Test on iPad (768px) and iPad Pro (1024px)
- Ensure proper landscape/portrait handling
- Optimize for both touch and cursor input

### Desktop Optimization
- Test on 1280px, 1440px, 1920px, and 2560px displays
- Ensure content doesn't stretch excessively on ultra-wide
- Maintain proper reading line lengths

## Performance Standards

### Layout Shifts
- Use proper aspect ratios for images
- Define container heights to prevent CLS
- Implement skeleton loading states

### Responsive Images
- Use appropriate sizing with `ImageWithFallback`
- Implement responsive image loading
- Optimize for retina displays

## Quality Checklist

Before marking any component complete:
- [ ] Uses `.container-100` system
- [ ] Implements `.section-padding-responsive`
- [ ] Tested on all major breakpoints
- [ ] Uses only standard Tailwind utilities
- [ ] No custom utility classes created
- [ ] Proper semantic naming
- [ ] Accessibility considerations met
- [ ] Performance optimized