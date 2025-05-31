# AI Overlords - The Architects of Intelligence

A modern, responsive website for AI Overlords, showcasing AI solutions, services, and expertise across multiple domains including AI agents, machine learning, data science, and generative AI.

## 🚀 Features

- **Modern Design**: Clean, responsive design optimized for all devices
- **Multiple AI Services**: Comprehensive coverage of AI/ML services and solutions
- **Interactive Components**: Engaging user interface with smooth animations
- **SEO Optimized**: Built with Next.js 15 for optimal search engine performance
- **Dark/Light Mode**: Theme switching capability
- **Performance Focused**: Optimized images, fonts, and loading speeds
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Runtime**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons 5.4](https://react-icons.github.io/react-icons/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Poppins, Playfair Display)
- **Theme**: [next-themes 0.4](https://github.com/pacocoursey/next-themes)
- **Notifications**: [Sonner 1.7](https://sonner.emilkowal.ski/)
- **Build Tool**: [Turbopack](https://turbo.build/pack) (experimental)

## 📁 Project Structure

\`\`\`
src/
├── app/                    # Next.js 15 App Router pages
│   ├── ai-agents/         # AI Agents service page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── data-science/      # Data Science service page
│   ├── gen-ai/            # Generative AI service page
│   ├── machine-learning/  # Machine Learning service page
│   ├── nlp/               # Natural Language Processing page
│   ├── projects/          # Projects portfolio page
│   ├── software-development/ # Software Development page
│   ├── solutions/         # Solutions overview page
│   ├── voice-ai/          # Voice AI service page
│   ├── privacy/           # Privacy Policy page
│   ├── terms/             # Terms of Use page
│   ├── layout.tsx         # Root layout with React 19
│   ├── page.tsx           # Homepage
│   ├── not-found.tsx      # 404 page
│   ├── error.tsx          # Error page
│   ├── global-error.tsx   # Global error boundary
│   └── globals.css        # Global styles with CSS custom properties
├── components/            # Reusable React components
│   ├── icons/             # Custom icon components
│   ├── layout/            # Layout components (Header, Footer, Navbar)
│   ├── sections/          # Page section components
│   ├── ui/                # shadcn/ui components
│   └── [various].tsx      # Individual components
├── data/                  # Static data and content (TypeScript)
│   ├── ai-agents.ts       # AI Agents page data
│   ├── careers.ts         # Careers page data
│   ├── contact.ts         # Contact page data
│   ├── data-science.ts    # Data Science page data
│   ├── error-pages.ts     # Error pages content
│   ├── gen-ai.ts          # Generative AI page data
│   ├── home.ts            # Homepage data
│   ├── machine-learning.ts # ML page data
│   ├── nlp.ts             # NLP page data
│   ├── projects.ts        # Projects data
│   ├── software-development.ts # Software dev data
│   └── voice-ai.ts        # Voice AI page data
├── fonts/                 # Local font files
├── lib/                   # Utility functions
└── hooks/                 # Custom React hooks
\`\`\`

## 🎯 Pages & Sections

### Main Pages
- **Homepage** (`/`): Hero section, solutions overview, testimonials, industries, approach, featured projects
- **AI Agents** (`/ai-agents`): AI agent development services and capabilities
- **Generative AI** (`/gen-ai`): Generative AI solutions and models
- **Machine Learning** (`/machine-learning`): ML services and capabilities
- **Data Science** (`/data-science`): Data science consulting and analytics
- **NLP** (`/nlp`): Natural language processing services
- **Voice AI** (`/voice-ai`): Voice AI platform and demos
- **Software Development** (`/software-development`): Custom software development services
- **Projects** (`/projects`): Portfolio of completed projects
- **Solutions** (`/solutions`): Overview of all AI solutions
- **Careers** (`/careers`): Job opportunities and company culture
- **Contact** (`/contact`): Contact information and consultation booking

### Section Components
- **Hero Sections**: Dynamic hero components with customizable layouts
- **Services Grids**: Showcase various AI services and capabilities
- **Feature Sections**: Highlight key features and benefits
- **Tech Stack Displays**: Interactive technology showcase
- **Testimonials**: Client feedback and company ratings
- **CTA Sections**: Call-to-action components for lead generation
- **Stats Sections**: Company metrics and achievements
- **Roadmap Sections**: Process visualization components

## 📊 Data Structure

The `src/data/` directory contains structured data for all pages:

- **Type-safe exports**: All data is properly typed with TypeScript
- **Modular organization**: Each page has its own data file
- **Reusable content**: Common elements shared across components
- **Easy maintenance**: Centralized content management

Example data structure:
\`\`\`typescript
export const services = [
  {
    icon: "/images/service-icon.png",
    title: "Service Name",
    description: "Service description"
  }
] as const

export const features = [
  {
    title: "Feature Name",
    description: "Feature description",
    icon: <IconComponent />
  }
] as const
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/ai-overlords.git
   cd ai-overlords
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js 15 config
- `npm run type-check` - Run TypeScript type checking

## 🆕 Next.js 15 Features

### New Features Utilized
- **React 19 Support**: Latest React features and improvements
- **Turbopack**: Faster development builds (experimental)
- **Enhanced App Router**: Improved routing and layouts
- **Better TypeScript Support**: Enhanced type checking and inference
- **Improved Performance**: Better Core Web Vitals scores
- **Enhanced Image Optimization**: Better image loading and optimization

### Breaking Changes Addressed
- Updated to React 19 and new React types
- Migrated to new ESLint flat config format
- Updated Tailwind CSS configuration for better performance
- Enhanced TypeScript configuration for stricter type checking

## 🎨 Customization

### Adding New Pages
1. Create page component in `src/app/[page-name]/page.tsx`
2. Add corresponding data file in `src/data/[page-name].ts`
3. Update navigation in `src/components/layout/navbar.tsx`

### Adding New Sections
1. Create section component in `src/components/sections/`
2. Export data structure from appropriate data file
3. Import and use in page components

### Styling
- **Tailwind Classes**: Use utility-first CSS approach
- **Custom Components**: Extend shadcn/ui components
- **Theme Configuration**: Modify `tailwind.config.ts`
- **Global Styles**: Update `src/app/globals.css`
- **CSS Custom Properties**: Use CSS variables for theming

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Deploy automatically on every push
4. Vercel automatically detects Next.js 15

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Follow Next.js 15 deployment guide
- **Docker**: Use provided Dockerfile for containerized deployment

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 0-640px (sm)
- **Tablet**: 640-1024px (md/lg)
- **Desktop**: 1024px+ (xl/2xl)

## ♿ Accessibility

- **WCAG 2.1 AA compliant**
- **Keyboard navigation support**
- **Screen reader optimized**
- **High contrast support**
- **Alternative text for images**
- **Focus management**
- **Reduced motion support**

## 🔍 SEO Optimization

- **Meta tags**: Properly configured for all pages
- **Open Graph**: Social media sharing optimized
- **Twitter Cards**: Enhanced social sharing
- **Structured data**: JSON-LD markup
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling guidelines
- **Core Web Vitals**: Optimized for Google's ranking factors

## 📈 Performance

- **Core Web Vitals optimized**
- **Image optimization**: Next.js 15 Image component
- **Font optimization**: Preloaded critical fonts
- **Code splitting**: Automatic route-based splitting
- **Bundle analysis**: Regular bundle size monitoring
- **Turbopack**: Faster development builds
- **React 19**: Improved rendering performance

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use consistent naming conventions
- Write meaningful commit messages
- Test responsive design on multiple devices
- Ensure accessibility compliance
- Follow Next.js 15 best practices

## 🔄 Migration from Next.js 14

### Key Changes Made
1. **Updated to Next.js 15.1.0** with React 19 support
2. **Migrated to new ESLint flat config** format
3. **Enhanced TypeScript configuration** for better type safety
4. **Updated all dependencies** to latest compatible versions
5. **Improved performance optimizations** with new Next.js 15 features
6. **Enhanced accessibility** with better focus management
7. **Better error handling** with improved error boundaries

### Compatibility Notes
- All existing components remain compatible
- Data structure unchanged for easy maintenance
- Styling system enhanced but backward compatible
- Performance improvements are automatic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: founder@aioverlords.io
- **LinkedIn**: [AI Overlords Company](https://www.linkedin.com/company/ai-0overlords/)
- **Website**: [AI Overlords](https://aioverlords.com)

## 🙏 Acknowledgments

- **Next.js 15** for the amazing React framework with App Router
- **React 19** for the latest React features and improvements
- **shadcn/ui** for the beautiful component library
- **Vercel** for hosting and deployment platform
- **Tailwind CSS** for the utility-first CSS framework
- **TypeScript** for type safety and developer experience

---

Built with ❤️ by the AI Overlords team using Next.js 15 & React 19
