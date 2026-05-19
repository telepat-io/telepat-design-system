import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: { backgrounds: { default: "dark" } },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "outline", "dark"] },
    size: { control: "inline-radio", options: ["md", "lg"] },
    success: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary", children: "Send" } };
export const Outline: Story = { args: { variant: "outline", children: "Clear", size: "md" } };
export const Dark: Story = { args: { variant: "dark", children: "Perform Analysis", size: "md" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 20, alignItems: "center", padding: 24 }}>
      <Button variant="primary">Send</Button>
      <Button variant="outline" size="md">Clear</Button>
      <Button variant="dark" size="md">Perform Analysis</Button>
    </div>
  ),
};

export const SendConfirm: Story = {
  render: () => {
    const [sent, setSent] = useState(false);
    return (
      <Button
        variant="primary"
        success={sent}
        onClick={() => {
          setSent(true);
          setTimeout(() => setSent(false), 2400);
        }}
      >
        {sent ? "Sent ✓" : "Send"}
      </Button>
    );
  },
};
