# Design Tokens

These values are shared by all pages. Every value here must match the variables in `prototype/css/styles.css`.

**Status key:**
- **Observed** = taken from the original ODRS site
- **Estimated** = read by eye from the grayscale wireframe. Confirm with a color picker.
- **Proposed** = chosen for this redesign

## Colors

| Token | Value | Status | Use |
|---|---|---|---|
| `--color-primary` | `#800000` | Observed | PUP maroon from the logo. Buttons, links, active tab. White text on it is 10.9:1. |
| `--color-highlight` | `#FEDD0B` | Observed | Advisory background and filter menu hover. Dark text on it is 9.4:1. |
| `--color-filter-bg` | `#FFFAC5` | Observed | Background of the document filter menu. Dark text on it is 11.9:1. |
| `--color-success` | `#126C25` | Observed | Payment actions. White text on it is 6.6:1. |
| `--color-success-alt` | `#279A40` | Observed | "Yes" status in the Requests table. White text on it is only 3.6:1, so use it only for bold text at 19px or larger. |
| `--color-button-active` | `#AE3838` | Observed | Button the user has clicked or selected in New Request. White text on it is 6.1:1. |
| `--color-required` | `#E50000` | Observed | Mandatory asterisk (*). 4.8:1 on white. |
| `--color-text` | `#333333` | Observed | Body text and headings. 12.6:1 on white. |
| `--color-text-muted` | `#595959` | Estimated | Captions and helper text. 7.0:1 on white. |
| `--color-background` | `#FFFFFF` | Observed | Page background |
| `--color-surface` | `#D9D9D9` | Estimated | Page and banner panels. Dark text on it is 9.0:1. |
| `--color-border` | `#767676` | Estimated | Input outlines and header line. 4.5:1 on white. |
| `--color-warning-text` | `#333333` | Proposed | Advisory text |
| `--color-warning-bg` | `#FEDD0B` | Observed | Advisory background. Same yellow as `--color-highlight`, but kept as a separate token so the two can change independently. |
| `--color-error` | `#A94442` | Proposed | Form error text. 5.9:1 on white. |

Record the contrast ratio for any new text and background pair you add. Use a checker such as WebAIM's.

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
| Mobile | default (no media query) | Smartphones |
| Tablet | `576px` and up | Tablets |
| Desktop | `992px` and up | Laptops and desktops |

## Components

- **Buttons:** Primary (maroon), outline, and disabled styles. Minimum touch target of 44px × 44px.
- **Selected button:** Use `--color-button-active` for a button the user has clicked or selected, such as a document type in New Request.
- **Filter menu:** Background `--color-filter-bg`, turning `--color-highlight` on hover.
- **Required fields:** Show a red asterisk in `--color-required`.
- **Payment actions:** Use `--color-success`.
- **Icons:** One icon set throughout, always paired with a text label.
- **Navigation:** Visible navigation bar or sidebar. No hidden menus.