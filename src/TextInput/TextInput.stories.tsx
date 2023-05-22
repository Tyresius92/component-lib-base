import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/Input/TextInput",
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  args: {
    startIcon: <span>&#x1F464;</span>,
    endIcon: <span>&#x1F464;</span>,
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <TextInput
        {...args}
        label="First Name"
        value={value}
        onValueChange={setValue}
      />
    );
  },
};
