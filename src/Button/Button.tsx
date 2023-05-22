import React from "react";
import styled from "styled-components";
import {
  AcceptableContrastRatios,
  getContrastColor,
} from "../__internal__/colorContrast/colorContrastUtils";
import { ColorVariant } from "../__internal__/colorValues";

export interface ButtonProps
  extends Pick<React.HTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

const bg: ColorVariant = "primary";

const BaseButton = styled.button<ButtonProps>`
  background-color: var(--color-${bg});
  color: var(
    --color-${getContrastColor(bg, ["white"], AcceptableContrastRatios.TEXT)}
  );
`;

export const Button = ({ variant = "primary", ...rest }: ButtonProps) => (
  <BaseButton {...rest} />
);
