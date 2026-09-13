# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the Portfolio project.

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git** for version control

### Local Development Setup

1. **Fork the repository** on GitHub
   - Click "Fork" on the [repository page](https://github.com/portfolio-project/portfolio)

2. **Clone your fork locally**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

3. **Add upstream remote** (optional, for syncing with original repo)
   ```bash
   git remote add upstream https://github.com/portfolio-project/portfolio.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5174`

### Development Workflow

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes
   git checkout -b fix/bug-description
   ```

2. **Make your changes**
   - Follow the existing code style and patterns
   - Use meaningful commit messages
   - Keep commits focused and atomic

3. **Check code quality**
   ```bash
   # Run ESLint
   npm run lint

   # Fix automatically fixable issues
   npm run lint -- --fix
   ```

4. **Build and test locally**
   ```bash
   # Build for production
   npm run build

   # Preview production build
   npm run preview
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature" # or "fix: resolve issue"
   ```
   Use [conventional commits](https://www.conventionalcommits.org/) format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `perf:` for performance improvements
   - `test:` for test additions
   - `chore:` for maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request (PR)**
   - Go to [GitHub](https://github.com/portfolio-project/portfolio)
   - Click "New Pull Request"
   - Select your branch and provide a clear description
   - Reference any related issues (e.g., "Closes #123")

## Types of Contributions

### 🐛 Bug Reports

Found a bug? Help us fix it!

- **Search existing issues** before reporting
- Provide a clear, descriptive title
- Describe the expected vs. actual behavior
- Include steps to reproduce
- Add screenshots if applicable
- Mention your browser/OS versions

### ✨ Feature Requests

Have a great idea? We'd love to hear it!

- **Search existing issues** first
- Provide a clear use case
- Explain the benefits
- Include any relevant examples or mockups

### 📝 Documentation Improvements

Documentation is vital for onboarding new contributors!

- Fix typos or clarify unclear explanations
- Add examples or better code samples
- Improve architecture documentation
- Add troubleshooting guides

### 🎨 Design/UI Improvements

Help make Portfolio look and feel great!

- Follow the existing design system (CSS tokens)
- Ensure responsive design across all breakpoints (480px, 768px, 1280px+)
- Test in both light and dark modes
- Maintain accessibility standards

### ⚙️ Code Quality

Improve the codebase!

- Refactor complex logic
- Remove technical debt
- Improve performance
- Add comments to complex sections
- Fix ESLint warnings

### ✅ Tests

Help us achieve better test coverage!

- Add unit tests for new features
- Add integration tests for workflows
- Test edge cases and error scenarios

## Code Style & Standards

### JavaScript/JSX

- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Components**: Use functional components with hooks
- **Imports**: Group imports (React, libraries, local)
- **Formatting**: 2-space indentation, no semicolons at end of lines (ESLint configured)

**Example:**
```jsx
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './MyComponent.css';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="my-component">
      <button onClick={handleClick}>Click me: {count}</button>
    </div>
  );
}
```

### CSS

- **Class naming**: Use kebab-case (e.g., `.my-component`)
- **Design tokens**: Always use CSS variables (e.g., `var(--text)`, `var(--sp-4)`)
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1280px

**Example:**
```css
.my-component {
  color: var(--text);
  background: var(--bg);
  padding: var(--sp-4);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.my-component:hover {
  background: var(--bg-hover);
  border-color: var(--accent);
}

@media (max-width: 768px) {
  .my-component {
    padding: var(--sp-3);
  }
}
```

## Commit Guidelines

Write clear, meaningful commit messages:

```bash
# Good
git commit -m "feat: add member filtering to Members page"
git commit -m "fix: resolve theme toggle race condition"
git commit -m "docs: update API documentation"

# Avoid
git commit -m "updates"
git commit -m "WIP"
git commit -m "asdf"
```

## PR Review Process

1. **Automated checks** run automatically:
   - ESLint validation
   - Build verification
   - Any configured CI/CD workflows

2. **Code review** by maintainers:
   - We'll provide constructive feedback
   - May request changes or clarifications
   - Be responsive to review comments

3. **Approval & merge**:
   - PRs require approval before merging
   - Squash commits for cleaner history
   - Main branch is always deployable

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test MyComponent.test.jsx

# Run with coverage
npm test -- --coverage
```

### Writing Tests

- Use the testing framework (Vitest + React Testing Library)
- Test user behavior, not implementation details
- Include edge cases and error scenarios
- Mock external dependencies (API calls, etc.)

## Common Issues & Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tests Fail
```bash
# Check if dependencies are installed
npm install

# Run tests in watch mode for debugging
npm test -- --watch
```

### Port Already in Use
```bash
# Change Vite dev port in vite.config.js
# or kill the process on port 5174
lsof -ti:5174 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5174   # Windows (find PID then taskkill /PID)
```

### Theme Not Persisting
- Check browser localStorage is enabled
- Clear browser cache and localStorage
- Check browser console for errors

## Release Process

The maintainers handle releases. Versions follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (x.0.0): Breaking changes
- **MINOR** (0.x.0): New features, backward compatible
- **PATCH** (0.0.x): Bug fixes

## Questions?

- Create an issue with the `question` label
- Check [Discussions](https://github.com/portfolio-project/portfolio/discussions)
- Review existing documentation and FAQs

## Recognition

Contributors are recognized in:
- Git commit history
- [CONTRIBUTORS.md](CONTRIBUTORS.md) file
- GitHub "Contributors" page

Thank you for making Portfolio better! 🎉
