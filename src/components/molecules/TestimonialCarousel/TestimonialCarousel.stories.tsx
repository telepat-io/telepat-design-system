import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCarousel } from "./TestimonialCarousel";

const meta: Meta<typeof TestimonialCarousel> = {
  title: "Molecules/TestimonialCarousel",
  component: TestimonialCarousel,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof TestimonialCarousel>;

export const Default: Story = {
  args: {
    items: [
      {
        quote: "Overall, I would say that we wouldn't have been able to generate this kind of success if Telepat wasn't there.",
        name: "Sarah Schaaf",
        title: "CEO, Headnote",
        initials: "SS",
      },
      {
        quote: "Telepat's team plugged in like they had been with us for years — strategy, ship, iterate.",
        name: "Marcus Lee",
        title: "VP Engineering",
        initials: "ML",
      },
      {
        quote: "The virtual photoshoots cut our production cycle from weeks to a single afternoon. Wild.",
        name: "Ana Petrova",
        title: "Creative Director",
        initials: "AP",
      },
    ],
  },
};
