import { css } from "styled-components";
import { colors } from "../__internal__/colorValues";

export const theme = css`
  /* root of the whole DOM */
  :root {
    /* primary/secondary colors */
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};

    /* blacks, whites, and grays */
    --color-white: ${colors.white};
    --color-gray-100: ${colors["gray-100"]};
    --color-gray-200: ${colors["gray-200"]};
    --color-gray-300: ${colors["gray-300"]};
    --color-gray-400: ${colors["gray-400"]};
    --color-gray-500: ${colors["gray-500"]};
    --color-gray-600: ${colors["gray-600"]};
    --color-gray-700: ${colors["gray-700"]};
    --color-gray-800: ${colors["gray-800"]};
    --color-gray-900: ${colors["gray-900"]};
    --color-black: ${colors.black};

    /* oranges */
    --color-orange-100: ${colors["orange-100"]};
    --color-orange-200: ${colors["orange-200"]};
    --color-orange-300: ${colors["orange-300"]};
    --color-orange-400: ${colors["orange-400"]};
    --color-orange-500: ${colors["orange-500"]};
    --color-orange-600: ${colors["orange-600"]};
    --color-orange-700: ${colors["orange-700"]};
    --color-orange-800: ${colors["orange-800"]};
    --color-orange-900: ${colors["orange-900"]};

    /* yellows */
    --color-yellow-100: ${colors["yellow-100"]};
    --color-yellow-200: ${colors["yellow-200"]};
    --color-yellow-300: ${colors["yellow-300"]};
    --color-yellow-400: ${colors["yellow-400"]};
    --color-yellow-500: ${colors["yellow-500"]};
    --color-yellow-600: ${colors["yellow-600"]};
    --color-yellow-700: ${colors["yellow-700"]};
    --color-yellow-800: ${colors["yellow-800"]};
    --color-yellow-900: ${colors["yellow-900"]};

    /* reds */
    --color-red-100: ${colors["red-100"]};
    --color-red-200: ${colors["red-200"]};
    --color-red-300: ${colors["red-300"]};
    --color-red-400: ${colors["red-400"]};
    --color-red-500: ${colors["red-500"]};
    --color-red-600: ${colors["red-600"]};
    --color-red-700: ${colors["red-700"]};
    --color-red-800: ${colors["red-800"]};
    --color-red-900: ${colors["red-900"]};

    /* greens */
    --color-green-100: ${colors["green-100"]};
    --color-green-200: ${colors["green-200"]};
    --color-green-300: ${colors["green-300"]};
    --color-green-400: ${colors["green-400"]};
    --color-green-500: ${colors["green-500"]};
    --color-green-600: ${colors["green-600"]};
    --color-green-700: ${colors["green-700"]};
    --color-green-800: ${colors["green-800"]};
    --color-green-900: ${colors["green-900"]};

    /* blues */
    --color-blue-100: ${colors["blue-100"]};
    --color-blue-200: ${colors["blue-200"]};
    --color-blue-300: ${colors["blue-300"]};
    --color-blue-400: ${colors["blue-400"]};
    --color-blue-500: ${colors["blue-500"]};
    --color-blue-600: ${colors["blue-600"]};
    --color-blue-700: ${colors["blue-700"]};
    --color-blue-800: ${colors["blue-800"]};
    --color-blue-900: ${colors["blue-900"]};

    /* intention aliases */
    --color-success: var(--color-green-600);
    --color-info: var(--color-blue-300);
    --color-caution: var(--color-yellow-500);
    --color-warning: var(--color-orange-500);
    --color-danger: var(--color-red-700);
    --color-error: var(--color-red-500);

    /* Sizing */
    --space-0: 0px;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 24px;
    --space-6: 32px;
    --space-7: 48px;
    --space-8: 64px;
    --space-9: 96px;
    --space-10: 128px;
    --space-11: 192px;
    --space-12: 256px;
    --space-13: 384px;
    --space-14: 512px;
    --space-15: 640px;
    --space-16: 768px;

    --font-size-0: 1rem;
    --font-size-1: 1.124rem;
    --font-size-2: 1.25rem;
    --font-size-3: 1.4rem;

    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;

    --checkboxradio-size: 14px;

    --border-radius-0: 0px;
    --border-radius-1: 2px;
    --border-radius-2: 4px;
    --border-radius-3: 8px;

    /* Animation timings */
    --animation-time-appear: 250ms;
    --animation-time-disappear: 150ms;

    /* Common Input Styling */
    --input-padding-x: var(--space-2);
    --input-padding-y: var(--space-2);

    --input-background: var(--color-white);
    --input-background-disabled: var(--color-gray-400);

    --input-color-text: var(--color-black);
    --input-color-placeholder: var(--color-gray-800);

    --input-border: 1px solid;
    --input-border-radius: 3px;
    --input-border-color-default: var(--color-gray-600);
    --input-border-color-hover: var(--color-gray-1000);
    --input-border-color-focus: var(--color-primary-main);
    --input-border-color-disabled: var(--input-border-color-default);
    --input-border-color-error: var(--color-error);

    --input-font-size: var(--font-size-0);
  }
`;
