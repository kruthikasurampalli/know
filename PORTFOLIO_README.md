# Dynamic Portfolio

A production-grade React portfolio website that dynamically fetches and displays user data from GitHub.

## Features

✅ **Dynamic Data Fetching** - Automatically loads portfolio data from GitHub repositories
✅ **Multiple Data Formats** - Supports both provided JSON schemas
✅ **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
✅ **Professional UI** - Modern components with smooth animations
✅ **Sections Included**:
   - Profile/About
   - Experience (Timeline view)
   - Projects (With tech badges)
   - Skills (With progress bars)
   - Education
   - Certifications & Awards

## How It Works

### 1. Members Configuration
Add usernames to `public/members.txt`, one per line:
```
sidduganeshsid
username2
username3
```

### 2. Data Source
Portfolio data is fetched from:
```
https://raw.githubusercontent.com/{username}/data/main/data.json
```

### 3. Data Format
The project supports two JSON schemas:

**Schema 1: Simple Format**
```json
{
  "FirstName": "John",
  "LastName": "Doe",
  "Title": "Full Stack Developer",
  "ProfilePicture": "url",
  "About": "Bio text",
  "Education": [...],
  "Skills": [...],
  "Projects": [...],
  "Experience": [...],
  "Certifications": [...],
  "Awards": [...]
}
```

**Schema 2: Extended Format**
```json
{
  "FullName": "John Doe",
  "Title": "Full Stack Developer",
  "ProfilePicture": "url",
  "About": "Bio text",
  "Education": [...],
  "Skills": [...],
  "Projects": [...],
  "Experience": [...],
  "Certifications": [...],
  "Awards": [...]
}
```

## Project Structure

```
portfolio/
├── public/
│   └── members.txt              # List of portfolio owners
├── src/
│   ├── components/
│   │   ├── Profile.jsx/css      # User profile section
│   │   ├── Education.jsx/css    # Education history
│   │   ├── Skills.jsx/css       # Skills display
│   │   ├── Projects.jsx/css     # Project showcase
│   │   ├── Experience.jsx/css   # Experience timeline
│   │   ├── Certifications.jsx/css # Certs & awards
│   │   ├── Header.jsx/css       # Header component
│   │   ├── Nav.jsx/css          # Navigation
│   │   ├── BottomNav.jsx/css    # Bottom navigation
│   ├── utils/
│   │   └── api.js               # GitHub data fetching
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Main styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── vite.config.js
├── package.json
└── README.md
```

## Component Details

### Profile Component
Displays user's name, title, location, email, and bio with profile picture.

### Education Component
Shows education history with degree, institute, field of study, and scores.

### Skills Component
Displays skills organized by category with progress bars for proficiency levels.

### Projects Component
Showcases projects with descriptions, technologies used, and links.

### Experience Component
Timeline view of work experience with company, role, dates, and description.

### Certifications Component
Displays certifications and awards with issuing organization and dates.

## Responsive Navigation

### Top Navigation (Fixed)
- Menu icon
- User name (centered)
- Profile picture

### Secondary Navigation
- Horizontal scroll on mobile
- Filter/category buttons
- Full width on desktop

### Bottom Navigation (Sticky)
- Desktop: Full text labels
- Mobile: Emoji icons for space efficiency
- Abbreviated labels: Exp., Proj., Skills, Edu.

## Styling System

Uses CSS variables for theming:
- `--bg-color`: Background
- `--text-color`: Text color
- `--accent`: Primary accent color
- `--border`: Border color
- `--card-bg`: Card background

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size (~227KB uncompressed, ~70KB gzipped)
- Lazy component loading
- Efficient CSS with gradients and animations
- Mobile-first responsive design

## Future Enhancements

- [ ] Multi-member portfolio selector
- [ ] Theme switcher (dark/light mode)
- [ ] Social media links
- [ ] Blog section
- [ ] Contact form
- [ ] Search functionality
- [ ] Portfolio filtering by category
- [ ] Analytics integration

## License

MIT
