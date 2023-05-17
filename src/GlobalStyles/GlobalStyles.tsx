import { createGlobalStyle } from "styled-components";
import { libraryReset } from "./libraryReset";
import { normalizeCSS } from "./normalizeCSS";
import { theme } from "./theme";

/*
 * Set up the icon library here so that it is available by
 * default to any application that uses the GlobalStyles component
 * (which should be all of them)
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

/**
 * Our global styles.
 *
 * They provide a number of general defaults to provide greater consistency
 * across browsers, as well as initialize some of our own global styles, such as
 * font-family.
 *
 * Anything that should _just_ be applied globally, without needing
 * customization from the TS side should go here.
 *
 * @tyrelosaur - Dec 6, 2021
 */
export const GlobalStyles = createGlobalStyle`
  ${normalizeCSS}
  ${libraryReset}
  ${theme}
`;
