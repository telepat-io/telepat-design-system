import type { Meta, StoryObj } from "@storybook/react";
import { ServiceRow } from "./ServiceRow";
import imgPhone from "../../../assets/img-phone.png";
import imgCharacter from "../../../assets/img-ai-character.png";

const meta: Meta<typeof ServiceRow> = {
  title: "Molecules/ServiceRow",
  component: ServiceRow,
  parameters: { layout: "padded", backgrounds: { default: "deep-purple" } },
};
export default meta;
type Story = StoryObj<typeof ServiceRow>;

export const Default: Story = {
  args: {
    title: "AI Software Development Services",
    items: [
      "AI Strategy Development & Use Case Identification",
      "AI-Driven Mobile & Web Application Development",
      "Integration of Pre-Trained Models into existing Applications",
      "AI Model Fine-Tuning and Optimization for specific verticals",
    ],
    image: imgPhone,
  },
};

export const Flipped: Story = {
  args: {
    title: "AI Visuals & Voice",
    items: [
      "AI Product and e-Com Photography",
      "AI-Generated Video Animations and Commercials",
      "Autonomous, lifelike Virtual Personas for Social Media engagement",
      "Speech Recognition and Synthesis",
    ],
    image: imgCharacter,
    flip: true,
  },
};
