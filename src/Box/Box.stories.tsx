import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Layout/Box",
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  args: {
    children: <p>This is the earth</p>,
  },
};

export const WithMarginAndPadding: Story = {
  args: {
    margin: 4,
    padding: 3,
    children: <p>This is the earth in space</p>,
  },
};

export const SpacingOnIndividualSides: Story = {
  args: {
    marginTop: 4,
    marginRight: 3,
    paddingLeft: 6,
    paddingBottom: 2,
    children: <p>This is the earth in a weird spot in space</p>,
  },
};

export const WithXYShorthands: Story = {
  args: {
    marginX: 8,
    paddingY: 4,
    children: <p>This is the earth more centered in space</p>,
  },
};

export const WithShorthandProps: Story = {
  args: {
    mt: 4,
    mr: 3,
    pl: 6,
    pb: 2,
    children: <p>This is the earth in a weird spot in space</p>,
  },
};
