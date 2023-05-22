import React from "react";
import styled from "styled-components";
import { SpacingOption } from "../__internal__/spacingOptions";

export interface BoxProps {
  children: React.ReactNode;
  margin?: SpacingOption;
  marginTop?: SpacingOption;
  marginRight?: SpacingOption;
  marginBottom?: SpacingOption;
  marginLeft?: SpacingOption;
  marginX?: SpacingOption;
  marginY?: SpacingOption;
  m?: SpacingOption;
  mt?: SpacingOption;
  mr?: SpacingOption;
  mb?: SpacingOption;
  ml?: SpacingOption;
  mx?: SpacingOption;
  my?: SpacingOption;
  padding?: SpacingOption;
  paddingTop?: SpacingOption;
  paddingRight?: SpacingOption;
  paddingBottom?: SpacingOption;
  paddingLeft?: SpacingOption;
  paddingX?: SpacingOption;
  paddingY?: SpacingOption;
  p?: SpacingOption;
  pt?: SpacingOption;
  pr?: SpacingOption;
  pb?: SpacingOption;
  pl?: SpacingOption;
  px?: SpacingOption;
  py?: SpacingOption;
}

export const StyledBox = styled.div<BoxProps>`
  ${(props) =>
    (props.m ?? props.margin) &&
    `margin: var(--space-${props.m ?? props.margin});`}

  ${(props) =>
    (props.my ?? props.marginY) &&
    `margin-block: var(--space-${props.my ?? props.marginY});`}
  ${(props) =>
    (props.mt ?? props.marginTop) &&
    `margin-block-start: var(--space-${props.mt ?? props.marginTop});`}
  ${(props) =>
    (props.mb ?? props.marginBottom) &&
    `margin-block-end: var(--space-${props.mb ?? props.marginBottom});`}

  ${(props) =>
    (props.mx ?? props.marginX) &&
    `margin-inline: var(--space-${props.mx ?? props.marginX});`}
  ${(props) =>
    (props.ml ?? props.marginLeft) &&
    `margin-inline-start: var(--space-${props.ml ?? props.marginLeft});`}
  ${(props) =>
    (props.mr ?? props.marginRight) &&
    `margin-inline-end: var(--space-${props.mr ?? props.marginRight});`}

  ${(props) =>
    (props.p ?? props.padding) &&
    `padding: var(--space-${props.p ?? props.padding});`}

  ${(props) =>
    (props.py ?? props.paddingY) &&
    `padding-block: var(--space-${props.py ?? props.paddingY});`}
  ${(props) =>
    (props.pt ?? props.paddingTop) &&
    `padding-block-start: var(--space-${props.pt ?? props.paddingTop});`}
  ${(props) =>
    (props.pb ?? props.paddingBottom) &&
    `padding-block-end: var(--space-${props.pb ?? props.paddingBottom});`}

  ${(props) =>
    (props.px ?? props.paddingX) &&
    `padding-inline: var(--space-${props.px ?? props.paddingX});`}
  ${(props) =>
    (props.pl ?? props.paddingLeft) &&
    `padding-inline-start: var(--space-${props.pl ?? props.paddingLeft});`}
  ${(props) =>
    (props.pr ?? props.paddingRight) &&
    `padding-inline-end: var(--space-${props.pr ?? props.paddingRight});`}
`;

export const Box = (props: BoxProps): JSX.Element => <StyledBox {...props} />;
