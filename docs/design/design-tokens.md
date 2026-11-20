# Design Tokens

These values are shared by all pages. Every value here should match the variables in `prototype/css/styles.css`.

## Colors

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#______` | Buttons, links, active navigation |
| `--color-accent` | `#______` | Highlights and secondary actions |
| `--color-text` | `#______` | Body text |
| `--color-text-muted` | `#______` | Helper text and captions |
| `--color-background` | `#______` | Page background |
| `--color-surface` | `#______` | Cards and panels |
| `--color-warning-text` | `#______` | Client advisory text |
| `--color-warning-bg` | `#______` | Client advisory background |
| `--color-error` | `#______` | Form errors |

Check that text colors meet WCAG AA contrast, which is at least 4.5:1 for normal text against its background. Use a contrast checker such as WebAIM's, and record the ratio for each text and background pair you use.

## Typography

| Token | Value | Use |
|---|---|---|
| `--font-family` | `______` | All text |
| `--font-size-base` | `16px` | Body text (minimum, for readability on phones) |
| `--font-size-small` | `______` | Captions and labels |
| `--font-size-heading` | `______` | Page titles |
| `--line-height` | `1.5` | Body text |

## Spacing

| Token | Value |
|---|---|
| `--space-sm` | `8px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |

## Breakpoints (for responsive.css)

| Name | Width | Target |
|---|---|---|
| Mobile | up to `575px` | Smartphones |
| Tablet | `576px` to `991px` | Tablets |
| Desktop | `992px` and up | Laptops and desktops |

## Components

- **Buttons:** Primary, secondary, and disabled styles. State the minimum touch target size (44px is a common guideline).
- **Icons:** Use one icon set throughout, and always pair icons with a text label.
- **Navigation:** Visible navigation bar or sidebar. No hidden menus.