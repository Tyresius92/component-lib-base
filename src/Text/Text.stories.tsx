import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Typography/Text",
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is default text",
  },
};

export const Italic: Story = {
  args: {
    italic: true,
    children: "This is italic text",
  },
};

export const Bold: Story = {
  args: {
    bold: true,
    children: "This is bold text",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    children: "This is danger text",
  },
};

export const AdditionalStyling: Story = {
  args: {
    children: (
      <>
        To apply italics to some portion of the text{" "}
        <Text italic>
          wrap that portion in a Text component with the "italic" prop set to
          true.
        </Text>{" "}
        If you want to make it bold,{" "}
        <Text bold>
          wrap that portion in a Text component with the "bold" prop set to
          true.
        </Text>{" "}
        Underlined text should be avoided, as that usually signifies a link on
        the web.{" "}
        <Text color="danger">
          You can add color to Text with the "color" prop.
        </Text>{" "}
        <Text bold italic color="danger">
          You can also combine any or all of these as needed.
        </Text>
      </>
    ),
  },
};
