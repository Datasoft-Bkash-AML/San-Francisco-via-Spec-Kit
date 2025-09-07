# Implementation Plan: Single-Page Site – "San Francisco" (Rey Theme Demo)

**Branch**: `001-single-page-site` | **Date**: September 7, 2025 | **Spec**: /specs/001-single-page-site/spec.md
**Input**: Feature specification from `/specs/001-single-page-site/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Build a flexible single-page e-commerce demo site replicating Rey "San Francisco" theme with PHP backend, JSON data storage, and admin panel for content management. Technical approach: PHP 8.x with lightweight routing, HTML5/CSS3/SCSS frontend, Vanilla JS + Alpine.js for interactivity, focusing on shared hosting compatibility and easy customization.

## Technical Context
**Language/Version**: PHP 8.x, HTML5, CSS3 (SCSS), JavaScript ES6+  
**Primary Dependencies**: Slim/Lumen micro-framework for routing, Alpine.js for frontend interactivity  
**Storage**: JSON/YAML files under /data (categories.json, products.json, promos.json, journal.json, settings.json)  
**Testing**: PHPUnit for PHP, Jest for JS, Cypress for E2E  
**Target Platform**: Apache/Nginx with PHP-FPM, shared hosting friendly  
**Project Type**: Web application (PHP backend + frontend)  
**Performance Goals**: First paint under 3s on 4G, mobile-responsive  
**Constraints**: No database initially, admin panel for non-technical management, adaptable to any shop type  
**Scale/Scope**: Single page with 12 sections, JSON-driven content, image uploads to /uploads

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 2 (frontend web app + PHP backend)
- Using framework directly? (yes, Slim/Lumen micro-framework)
- Single data model? (yes, JSON files for all data)
- Avoiding patterns? (yes, no unnecessary abstractions)

**Architecture**:
- EVERY feature as library? (N/A for web app)
- Libraries listed: Slim (routing), Alpine.js (interactivity), SCSS (styling)
- CLI per library: N/A
- Library docs: N/A

**Testing (NON-NEGOTIABLE)**:
- RED-GREEN-Refactor cycle enforced? (yes)
- Git commits show tests before implementation? (yes)
- Order: Contract→Integration→E2E→Unit strictly followed? (yes)
- Real dependencies used? (yes, actual file system for JSON storage)
- Integration tests for: new libraries, contract changes, shared schemas? (yes)
- FORBIDDEN: Implementation before test, skipping RED phase

**Observability**:
- Structured logging included? (yes, PHP error logging)
- Frontend logs → backend? (optional via AJAX)
- Error context sufficient? (yes)

**Versioning**:
- Version number assigned? (1.0.0)
- BUILD increments on every change? (yes)
- Breaking changes handled? (JSON schema versioning)

## Project Structure

### Documentation (this feature)
```
specs/001-single-page-site/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Web application (PHP backend + frontend)
public/
├── index.php              # Main entry point
├── admin.php              # Admin panel entry
└── uploads/               # Image storage

src/
├── Controllers/
│   ├── HomeController.php
│   ├── AdminController.php
│   └── ApiController.php
├── Models/
│   ├── Category.php
│   ├── Product.php
│   ├── Promotion.php
│   └── Journal.php
├── Services/
│   ├── DataService.php
│   └── FileUploadService.php
└── Views/
    ├── components/
    │   ├── header.php
    │   ├── hero.php
    │   ├── categories.php
    │   ├── product-grid.php
    │   ├── footer.php
    │   └── admin/
    ├── layouts/
    │   ├── main.php
    │   └── admin.php
    └── pages/
        ├── home.php
        └── admin/
            ├── dashboard.php
            ├── categories.php
            ├── products.php
            └── settings.php

data/
├── categories.json
├── products.json
├── promos.json
├── journal.json
└── settings.json

assets/
├── css/
│   ├── style.scss
│   └── admin.scss
├── js/
│   ├── app.js
│   └── admin.js
└── images/

config/
├── routes.php
└── config.php

tests/
├── Unit/
├── Integration/
└── Feature/
```

**Structure Decision**: Web application (PHP backend + frontend)

## Phase 0: Research & Requirements Analysis
1. **Research PHP 8.x best practices** for shared hosting compatibility
2. **Evaluate micro-frameworks** (Slim vs Lumen vs plain PHP)
3. **Research Alpine.js integration** with PHP templating
4. **Analyze JSON schema design** for flexible content management
5. **Research file upload security** and image optimization
6. **Document deployment requirements** for Apache/Nginx

**Output**: research.md with technology decisions and rationale

## Phase 1: Project Setup
- Set up PHP 8.x development environment
- Initialize Slim/Lumen project structure
- Configure SCSS compilation and build process
- Set up basic routing for public and admin areas
- Create initial JSON data files with sample content
- Implement basic templating system
- Set up error handling and logging

## Phase 2: Static Frontend
- Create HTML structure for all 12 sections
- Implement responsive CSS/SCSS with mobile-first approach
- Add static content and placeholder images
- Style header with navigation and mobile hamburger
- Style footer with newsletter and links
- Implement basic hover states and micro-interactions
- Ensure cross-browser compatibility

## Phase 3: Dynamic Rendering from JSON
- Create PHP classes for data models (Category, Product, etc.)
- Implement JSON file reading and caching
- Build reusable PHP components for each section
- Connect hero banners to promos.json
- Render product grids from products.json
- Implement category filtering and navigation
- Add dynamic image loading from /uploads

## Phase 4: Admin Panel (No DB)
- Create admin authentication (simple session-based)
- Build admin dashboard with content summaries
- Implement CRUD for categories (add/edit/delete)
- Implement CRUD for products with variant management
- Create promotion management interface
- Add settings page for site configuration
- Implement file upload for images with validation

## Phase 5: E-commerce UX
- Implement product quick-view modal
- Add cart functionality with session storage
- Create wishlist feature with toast notifications
- Implement search with filtering capabilities
- Add newsletter signup with validation
- Integrate Alpine.js for enhanced interactivity
- Implement lazy loading and performance optimizations

## Phase 6: Flexibility & Extensibility
- Make JSON schemas configurable for different shop types
- Add theme customization options
- Implement plugin system for additional features
- Create migration scripts for JSON schema updates
- Add content import/export functionality
- Document customization guide for non-technical users

## Phase 7: Polish
- Performance optimization (caching, minification, compression)
- Accessibility audit and WCAG 2.2 AA compliance
- Cross-browser testing and bug fixes
- Security hardening (CSRF, XSS, file upload validation)
- Documentation and deployment guide
- Final testing and validation against acceptance criteria

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Static Frontend (HTML/CSS/SCSS structure)
**Phase 4**: Dynamic Rendering (PHP + JSON integration)
**Phase 5**: Admin Panel (CRUD interfaces)
**Phase 6**: E-commerce UX (cart, search, interactions)
**Phase 7**: Flexibility & Extensibility (themes, plugins)
**Phase 8**: Polish (performance, security, testing)

## Acceptance Criteria
- Entire site runs off JSON data, no DB required
- Admin panel allows non-technical user to fully configure shop categories, products, promos, and branding
- Site can adapt to any type of shop (electronics, clothes, crafts, etc.) by editing JSON and uploading images
- Mobile-responsive with consistent hover/tap equivalents
- Performance: Loads under 3s on 4G for first paint

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [ ] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Project setup complete
- [ ] Phase 2: Static frontend complete
- [ ] Phase 3: Dynamic rendering complete
- [ ] Phase 4: Admin panel complete
- [ ] Phase 5: E-commerce UX complete
- [ ] Phase 6: Flexibility & extensibility complete
- [ ] Phase 7: Polish complete

**Gate Status**:
- [ ] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*