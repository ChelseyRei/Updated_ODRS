# Design Tokens

These values are shared by all pages. Every value here must match the variables in `prototype/css/styles.css`.

**Status key:**
- **Observed** = measured from the original ODRS site (DevTools or screenshot)
- **Proposed** = chosen for this redesign
- **Pending** = still needs to be measured on the original site

## Colors

| Token | Value | Status | Use |
|---|---|---|---|
| `--color-primary` | Pending | Pending | Buttons, links, active navigation. Measure the "Select your Registrar" header background. |
| `--color-accent` | Pending | Pending | Highlights only, not text. Measure the peach stripe in the banner. |
| `--color-text` | `#333333` | Observed | Body text and headings |
| `--color-text-muted` | `#767676` | Proposed | Helper text and captions. Contrast is 4.54:1 on white, which passes WCAG AA. |
| `--color-background` | `#FFFFFF` | Observed | Page background |
| `--color-surface` | Pending | Pending | Cards and panels. Measure the grey panel behind the logo. |
| `--color-warning-text` | `#333333` | Proposed | Client advisory text. Replaces the red text in Figure 7. |
| `--color-warning-bg` | `#FCF8E3` | Proposed | Client advisory background |
| `--color-error` | `#A94442` | Proposed | Form error text |

**Contrast:** `#333333` on `#FFFFFF` is about 12.6:1. Check every text and background pair you use with a checker such as WebAIM's, and record the ratio.

## Typography

| Token | Value | Status | Use |
|---|---|---|---|
| `--font-family` | `"Helvetica Neue", Helvetica, Arial, sans-serif` | Observed | All text |
| `--font-size-base` | `16px` | Proposed | Body text. The original uses 14px, which Figure 5 and the persona Jonathan show is hard to read on phones. |
| `--font-size-small` | `14px` | Proposed | Captions and labels |
| `--font-size-heading` | `30px` | Observed | Page titles on desktop |
| `--font-size-heading-mobile` | `24px` | Proposed | Page titles on phones |
| `--line-height` | `1.5` | Proposed | Body text. The original uses 1.42857. |

## Spacing

| Token | Value | Status | Use |
|---|---|---|---|
| `--space-sm` | `8px` | Proposed | Tight spacing between related items |
| `--space-md` | `16px` | Proposed | Standard spacing between elements |
| `--space-lg` | `24px` | Proposed | Space between sections |
| `--space-heading-top` | `20px` | Observed | Space above headings |
| `--space-heading-bottom` | `10px` | Observed | Space below headings |

## Breakpoints (for responsive.css)

| Name | Width | Target |
|---|---|---|
| Mobile | up to `575px` | Smartphones |
| Tablet | `576px` to `991px` | Tablets |
| Desktop | `992px` and up | Laptops and desktops |

## Components

- **Buttons:** Primary, secondary, and disabled styles. Minimum touch target of 44px × 44px.
- **Icons:** One icon set throughout, always paired with a text label.
- **Navigation:** Visible navigation bar or sidebar. No hidden menus.