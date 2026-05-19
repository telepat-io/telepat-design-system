import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "./TestimonialCard";

const meta: Meta<typeof TestimonialCard> = {
  title: "Molecules/TestimonialCard",
  component: TestimonialCard,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  args: {
    quote: "Overall, I would say that we wouldn't have been able to generate this kind of success if Telepat wasn't there.",
    name: "Sarah Schaaf",
    title: "CEO, Headnote",
    initials: "SS",
  },
};
