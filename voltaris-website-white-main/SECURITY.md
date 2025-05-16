# Security Improvements

This document outlines the security improvements made to the Voltaris website project.

## 1. Environment Variable Protection

- Modified `docker-entrypoint.sh` to prevent sensitive environment variables from being exposed to client browsers
- Separated public client-side variables from server-side sensitive variables
- Added documentation about what type of data should not be exposed to the client

## 2. Enhanced HTTP Security Headers

Added modern security headers to both SSL and non-SSL Nginx configurations:

- **Content-Security-Policy (CSP)**: Controls what resources the browser is allowed to load
- **Strict-Transport-Security (HSTS)**: Forces browsers to use HTTPS for future requests
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Protects against clickjacking
- **Referrer-Policy**: Controls how much referrer information should be included with requests
- **Permissions-Policy**: Restricts browser features (formerly Feature-Policy)

## 3. TLS Improvements

- Upgraded to use only TLS 1.3 for enhanced security
- Disabled outdated cipher suites
- Added proper HSTS configuration with includeSubDomains and preload directives

## 4. Dependency Updates and Vulnerability Fixes

- Fixed npm vulnerabilities in critical dependencies:
  - Updated `http-proxy-middleware` to address GHSA-9gqv-wp59-fq42 and GHSA-4www-5p9h-95mh
  - Added resolutions for `nth-check` to fix GHSA-rp65-9cf3-cjxr (high severity)
  - Added resolutions for `postcss` to fix GHSA-7fh5-64p2-3v2j
- Added npm audit scripts to make regular security reviews easier
- Added npm resolutions system to enforce secure dependency versions
- Created .npmrc configuration to enhance dependency security

## Security Best Practices

For ongoing security maintenance:

1. **Regular Audits**: Run `npm run audit` frequently to identify vulnerabilities
2. **Update Dependencies**: Run `npm run audit:fix` to automatically fix issues when possible
3. **Environment Variables**: Never expose API keys or secrets in client-side code
4. **Content Security Policy**: Adjust the CSP as needed for third-party resources
5. **SSL Certificates**: Remember to update SSL domain names before deployment
6. **Dependency Management**: Use `npm run postinstall` to enforce security resolutions

## Remaining Tasks

1. Set your actual domain name in SSL configuration files
2. Configure Docker to run as non-root user (see Docker security best practices)
3. Implement a proper secrets management system for sensitive data

## Vulnerability Mitigation Instructions

After checking out or updating this repository, run these commands to ensure all security patches are applied:

```bash
# Install dependencies with security resolutions enforced
npm install

# Verify security fixes
npm run audit
``` 