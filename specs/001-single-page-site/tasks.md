# Tasks: Single-Page Site – "San Francisco" (Rey Theme Demo)

**Input**: Design documents from `/specs/001-single-page-site/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `src/` at repository root
- Paths shown below assume web application structure

## Phase 1: Project Setup
- [x] T001 Set up PHP 8.x development environment
- [x] T002 Initialize PHP project structure
- [x] T003 Configure CSS preprocessing (optional - using pure CSS)
- [x] T004 Set up basic routing for public and admin areas
- [x] T005 Create initial directory structure (public/, src/, data/, assets/)
- [x] T006 Set up error handling and logging configuration
- [x] T007 Configure development server (PHP built-in server)

## Phase 2: Static Frontend
- [ ] T008 Create HTML structure for main page with all 12 sections
- [x] T009 Implement responsive CSS with mobile-first approach
- [ ] T010 Style header with navigation and mobile hamburger menu
- [ ] T011 Style hero banners section with placeholder content
- [ ] T012 Style categories and popular brands section
- [ ] T013 Style product grid with card layouts
- [ ] T014 Style footer with newsletter and links
- [ ] T015 Add static content and placeholder images
- [ ] T016 Implement basic hover states and micro-interactions
- [ ] T017 Ensure cross-browser compatibility

## Phase 3: Dynamic Rendering from JSON
- [ ] T018 Create PHP data model classes (Category, Product, Promotion, Journal)
- [ ] T019 Implement JSON file reading service with caching
- [ ] T020 Build reusable PHP view components for each section
- [ ] T021 Connect hero banners to promos.json data
- [ ] T022 Render product grids dynamically from products.json
- [ ] T023 Implement category filtering and navigation
- [ ] T024 Add dynamic image loading from /uploads directory
- [ ] T025 Create settings service for site configuration

## Phase 4: Admin Panel (No DB)
- [ ] T026 Create admin authentication system (session-based)
- [ ] T027 Build admin dashboard with content summaries
- [ ] T028 Implement CRUD interface for categories management
- [ ] T029 Implement CRUD interface for products with variants
- [ ] T030 Create promotion management interface
- [ ] T031 Add settings page for site configuration
- [ ] T032 Implement secure file upload for images
- [ ] T033 Add form validation and error handling

## Phase 5: E-commerce UX
- [ ] T034 Implement product quick-view modal with Alpine.js
- [ ] T035 Add cart functionality with session storage
- [ ] T036 Create wishlist feature with toast notifications
- [ ] T037 Implement search with filtering capabilities
- [ ] T038 Add newsletter signup with email validation
- [ ] T039 Integrate Alpine.js for enhanced interactivity
- [ ] T040 Implement lazy loading and performance optimizations
- [ ] T041 Add accessibility features (ARIA labels, keyboard navigation)

## Phase 6: Flexibility & Extensibility
- [ ] T042 Make JSON schemas configurable for different shop types
- [ ] T043 Add theme customization options
- [ ] T044 Implement plugin system for additional features
- [ ] T045 Create migration scripts for JSON schema updates
- [ ] T046 Add content import/export functionality
- [ ] T047 Document customization guide for non-technical users

## Phase 7: Polish
- [ ] T048 Performance optimization (caching, minification, compression)
- [ ] T049 Accessibility audit and WCAG 2.2 AA compliance
- [ ] T050 Cross-browser testing and bug fixes
- [ ] T051 Security hardening (CSRF, XSS, file upload validation)
- [ ] T052 Create deployment guide for shared hosting
- [ ] T053 Final testing and validation against acceptance criteria

## Phase 3.4: Feature Integration
- [ ] T025 Implement sticky header behavior
- [ ] T026 Implement mobile hamburger menu and off-canvas navigation
- [ ] T027 Implement search panel with focus trap
- [ ] T028 Implement product card hover effects and interactions
- [ ] T029 Implement quick view modal functionality
- [ ] T030 Implement cart drawer with subtotal updates
- [ ] T031 Implement wishlist functionality with toast notifications
- [ ] T032 Implement smooth scrolling for anchors
- [ ] T033 Implement lazy loading for images
- [ ] T034 Implement responsive design for all components

## Phase 3.5: Polish
- [ ] T035 [P] Unit tests for all components in tests/unit/
- [ ] T036 Performance optimization (LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200ms)
- [ ] T037 [P] Accessibility audit and WCAG 2.2 AA compliance
- [ ] T038 [P] Cross-browser testing and fixes
- [ ] T039 [P] Update documentation in README.md
- [ ] T040 Final validation against acceptance criteria

## Dependencies
- Phase 1 must complete before Phase 2
- Phase 2 must complete before Phase 3
- Phase 3 must complete before Phase 4
- Phase 4 must complete before Phase 5
- Phase 5 must complete before Phase 6
- Phase 6 must complete before Phase 7
- Within each phase, tasks can be executed in parallel where marked [P]

## Parallel Example
```
# Phase 1 Setup - Can run in parallel:
Task: "Set up PHP 8.x development environment"
Task: "Configure CSS preprocessing (optional - using pure CSS)"
Task: "Create initial directory structure (public/, src/, data/, assets/)"

# Phase 2 Static Frontend - Sequential for styling coherence:
Task: "Create HTML structure for main page with all 12 sections"
Task: "Implement responsive CSS with mobile-first approach"
Task: "Style header with navigation and mobile hamburger menu"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Data Models**:
   - Each JSON file → PHP model class task
   - Each data relationship → service method task
   
2. **From User Interface**:
   - Each section → PHP view component task
   - Each interaction → Alpine.js enhancement task
   
3. **From Admin Requirements**:
   - Each CRUD operation → admin controller task
   - Each form → validation and security task

4. **Ordering**:
   - Setup → Static Frontend → Dynamic Backend → Admin → UX → Flexibility → Polish
   - Dependencies block parallel execution within phases

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All JSON data files have corresponding PHP model classes
- [ ] All UI sections have PHP view components
- [ ] All admin CRUD operations are implemented
- [ ] All user interactions have Alpine.js enhancements
- [ ] All tasks specify exact file paths
- [ ] No task modifies same file as another parallel task
- [ ] Phase dependencies are properly sequenced