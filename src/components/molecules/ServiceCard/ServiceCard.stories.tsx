import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "./ServiceCard";
import imgPhone from "../../../assets/img-phone.png";

const meta: Meta<typeof ServiceCard> = {
  title: "Molecules/ServiceCard",
  component: ServiceCard,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    title: "AI Visuals & Voice",
    description: (
      <>
        AI Product and e-Com Photography<br />
        AI-Generated Video Animations<br />
        Autonomous, lifelike Virtual Personas<br />
        Speech Recognition and Synthesis
      </>
    ),
    image: imgPhone,
  },
  render: (args) => <div style={{ width: 644 }}><ServiceCard {...args} /></div>,
};
