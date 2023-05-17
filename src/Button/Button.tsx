import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger";
}

const BaseButton = styled.button``;

export const Button = (props: ButtonProps) => <BaseButton {...props} />;
