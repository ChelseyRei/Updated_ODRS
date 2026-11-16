# Online Document Request System (ODRS) Redesign

A human-computer interaction (HCI) project that proposes improvements to the Online Document Request System of the Polytechnic University of the Philippines (PUP).

**Original system:** https://odrs1.pup.edu.ph/

## Team

MEMBERS:
Alenica Dela Crus
Chelsey Silva
Gil Robert Mislang
Hannah Rejuso
Fatima Santiago


## Project Structure

```
├── docs/               Research, design, and planning documents
│   ├── research/       Heuristic evaluation and personas
│   ├── design/         User flows, design tokens, and wireframes
│   └── figma-links.md  Links to the Figma design files
└── prototype/          Front-end prototype
    ├── *.html          One page per feature area
    ├── css/            styles.css (shared) and responsive.css
    ├── js/             Feature scripts
    ├── components/     Reusable header, footer, and login modal
    └── assets/         Images and icons
```

## Running the Prototype

No installation is needed. Open `prototype/index.html` in a web browser.

For the best results, use Chrome or Edge. To test responsiveness, use the browser's developer tools (press F12, then the device toolbar icon).

## Contributing

1. Pull the latest changes from `dev`.
2. Create a feature branch from `dev`, for example `feature/registration-login`.
3. Make your changes and commit them with a clear message.
4. Push your branch and open a pull request into `dev`.
5. Ask a teammate to review before merging.

Do not commit directly to `main`.

## Branches

- `main`: Final, submitted version
- `dev`: Integration branch where feature work is merged
- `feature/*`: One branch per team member or task

## Notes

This is a student project for a human-computer interaction course. The prototype uses dummy data and placeholder accounts. It does not connect to the live ODRS system or handle real student records.