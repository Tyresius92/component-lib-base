import React from "react";
import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";
import { StyledBox, BoxProps } from "../Box/Box";
import { SpacingOption } from "../__internal__/spacingOptions";

export interface FlexProps extends BoxProps, FlexboxProps {
  gap?: SpacingOption;
}

const StyledFlex = styled(StyledBox)<FlexProps>`
  ${flexbox}

  ${(props) => props.gap && `gap: var(--space-${props.gap})`}
`;

export const Flex = (props: FlexProps): JSX.Element => (
  <StyledFlex {...props} />
);
