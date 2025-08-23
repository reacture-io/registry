# Reacture Registry

A shadcn/ui component registry for distributing components, hooks, pages, and utilities to React projects.

Extended from the official shadcn registry template with categorized sidebar navigation, component previews, and installation commands.

## ✨ Features

### 🚀 Enhanced from shadcn/ui Registry Template

- **Sidebar categories**: Organizes components based on categories in `registry.json`
- **Component previews**: Preview/code toggle with syntax highlighting
- **Installation widget**: Commands for npm, pnpm, yarn, and bun
- **Navigation**: Smooth scrolling and collapsible categories
- **Reacture packages**: Uses `@reacture-io/eslint-config` and `@reacture-io/prettier-config`

### 📦 Core Registry Features

- Compatible with `shadcn` CLI
- Static file serving under `public/r/[name].json`
- Components, hooks, pages, and utility files
- v0 integration
- TypeScript support

## 🏗️ Architecture

### Enhanced Components

- **`<Component />`**: Component display with preview/code toggle, installation commands, and v0 integration
- **`<AppSidebar />`**: Navigation sidebar with collapsible categories
- **`<Install />`**: Installation widget with package manager selection
- **`useCategories`**: Hook for sidebar organization

### Registry Structure

```json
{
  "name": "reacture",
  "homepage": "https://reacture.io",
  "items": [
    {
      "name": "example-component",
      "type": "registry:component",
      "title": "Example Component",
      "description": "Component description",
      "categories": ["form", "blocks"], // ← Categories for sidebar organization
      "dependencies": ["zod"],
      "registryDependencies": ["button", "input"],
      "files": [...]
    }
  ]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm (recommended)
- Basic knowledge of React and Next.js

### Installation

1. **Clone and Setup**

   ```bash
   git clone <your-repo-url>
   cd registry
   pnpm install
   ```

2. **Development**

   ```bash
   pnpm dev
   ```

3. **Build Registry**
   ```bash
   pnpm registry:build
   ```

### Adding New Components

1. **Create Component Files**

   ```bash
   mkdir -p registry/your-component
   # Add your component files
   ```

2. **Update Registry**

   ```json
   // registry.json
   {
     "items": [
       {
         "name": "your-component",
         "type": "registry:component",
         "title": "Your Component",
         "description": "Component description",
         "categories": ["blocks"], // Add categories for sidebar
         "files": [
           {
             "path": "registry/your-component/component.tsx",
             "type": "registry:component"
           }
         ]
       }
     ]
   }
   ```

3. **Add to Preview Page**
   ```tsx
   // app/page.tsx
   <Component
     name="your-component"
     description="Component description"
     code={`<YourComponent />`}
   >
     <YourComponent />
   </Component>
   ```

## 📁 Project Structure

```
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with sidebar
│   ├── page.tsx                 # Homepage with component previews
│   └── registry/[name]/route.ts # API routes for registry items
├── components/
│   ├── blocks/
│   │   ├── code-block/          # Syntax highlighted code blocks
│   │   └── sidebar/             # Categorized sidebar
│   ├── component.tsx            # Component display
│   ├── install.tsx              # Installation widget
│   └── ui/                      # shadcn/ui components
├── hooks/
│   └── use-categories.tsx       # Hook for sidebar organization
├── registry/                    # Your component source files
├── public/r/                    # Built registry JSON files
└── registry.json               # Registry configuration
```

## 🛠️ Reacture Integration

This registry uses Reacture packages:

- **`@reacture-io/eslint-config`**: Code linting
- **`@reacture-io/prettier-config`**: Code formatting

## 🎨 Customization

### Categories

Components are categorized based on the `categories` field in `registry.json`. Components without categories are placed in the default "components" category.

### Styling

Uses Tailwind CSS v4 with shadcn/ui design system. Customize themes in:

- `app/globals.css`
- `components.json`

### Code Highlighting

Powered by Shiki with customizable themes:

- Light theme: `nord`
- Dark theme: `vitesse-dark`

## 📖 Usage

### For End Users

```bash
# Install components using shadcn CLI
npx shadcn@latest add <component-name>

# Or with other package managers
pnpm dlx shadcn@latest add <component-name>
yarn shadcn add <component-name>
bun x shadcn@latest add <component-name>
```

### For Registry Maintainers

```bash
# Development
pnpm dev

# Build registry
pnpm registry:build

# Format code
pnpm format

# Lint
pnpm lint
```

## 🔗 Links

- [shadcn/ui Documentation](https://ui.shadcn.com/docs/registry)
- [Reacture](https://reacture.io)
- [Next.js Documentation](https://nextjs.org/docs)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
