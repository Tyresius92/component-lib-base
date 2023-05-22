import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

const meta: Meta<typeof Button> = {
  title: "Components/Input/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => {
    const [count, setCount] = useState(0);

    return (
      <Box>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
        <Text>Button clicks: {count}</Text>
      </Box>
    );
  },
};
