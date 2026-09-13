# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this project, please **do not** open a public GitHub issue. Instead, follow these steps:

### Responsible Disclosure

1. **Do not publicly disclose** the vulnerability before it's fixed
2. **Report to**: Create a [GitHub Security Advisory Draft](https://github.com/portfolio-project/portfolio/security/advisories)
   - Or email the maintainers directly
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if applicable)

### Timeline

- **Response**: We aim to respond within 48 hours
- **Assessment**: We'll evaluate severity and develop a fix
- **Fix Release**: Security patches are released as soon as possible
- **Public Disclosure**: We'll credit you (if desired) in the security advisory

## Security Considerations

### What This Project Handles

This is a **frontend-only, static site application**:
- ✅ Safe for personal portfolios
- ✅ No sensitive data storage
- ✅ No user authentication
- ✅ No database access
- ✅ No payments or transactions

### What This Project Does NOT Handle

- ❌ User authentication or authorization
- ❌ Sensitive personal data
- ❌ Payment processing
- ❌ Private/confidential information
- ❌ Compliance with HIPAA, PCI-DSS, or similar

### Safe Use Guidelines

1. **Never commit secrets** (API keys, tokens, credentials)
   - Use `.env.local` for local development (excluded from git)
   - Never commit `.env` files
   - Use environment variables in CI/CD

2. **Data sources** are public
   - Members list from `public/members.txt`
   - Portfolio data from GitHub repositories
   - No private data is handled

3. **Client-side only**
   - All code runs in the browser
   - No server-side processing
   - All data is public/visible

4. **External dependencies**
   - Regularly update npm packages: `npm update`
   - Check for vulnerabilities: `npm audit`
   - Remove unused dependencies

## Secure Development Practices

### Code Review

- All changes go through PR review process
- ESLint checks for common security issues
- No credentials in code or comments

### Dependency Management

- Keep dependencies up to date
- Run `npm audit` regularly
- Remove unused packages
- Review security advisories

### Deployment Security

- Build artifacts are static files
- Deployed to trusted CDN/hosting
- HTTPS enforced
- No sensitive data in environment

## Vulnerability Types

### Lower Risk (Not Blocking)
- Minor XSS in non-user-input areas
- Cosmetic security warnings
- Theoretical vulnerabilities in static content

### Higher Risk (Blocking)
- Authentication bypass
- Data exfiltration
- Remote code execution
- Credential exposure
- Malware/malicious code

## Security Headers (Recommended for Deployment)

If you deploy this project, consider adding these headers:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://avatars.githubusercontent.com; font-src 'self'; connect-src 'self' https://raw.githubusercontent.com
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Known Limitations

1. **No Authentication**
   - This is a public portfolio, not a protected application
   - All data is meant to be public

2. **External Data Sources**
   - Data fetched from GitHub API may have rate limits
   - No authentication by default (unauthenticated: 60 req/hr per IP)

3. **Styling with CSS**
   - CSS-in-JS mitigated by avoiding user-generated styles
   - All styling is defined by developers

## Third-Party Dependencies

Major security-relevant dependencies:

- **React 18+**: Industry-standard, actively maintained, built-in XSS protection
- **React Router v7**: Widely used, security-focused routing
- **Vite**: Modern build tool with security best practices
- **ESLint**: Code quality and security checks

All dependencies are regularly updated and monitored for vulnerabilities.

## Updates & Advisories

- Check [GitHub Security Advisories](https://github.com/portfolio-project/portfolio/security/advisories)
- Subscribe to release notifications
- Review [CHANGELOG.md](CHANGELOG.md) for security updates

## Contact

For security inquiries:
- Create a security advisory draft on GitHub
- Contact the maintainers directly

Thank you for helping keep Portfolio secure! 🔒
