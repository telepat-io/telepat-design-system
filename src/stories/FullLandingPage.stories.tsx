import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "../components/sections/Hero/Hero";
import { ServicesSection } from "../components/sections/ServicesSection/ServicesSection";
import { CustomersSection } from "../components/sections/CustomersSection/CustomersSection";
import { VisionSection } from "../components/sections/VisionSection/VisionSection";
import { ContactSection } from "../components/sections/ContactSection/ContactSection";

const meta: Meta = {
  title: "Sections/Full Page",
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj;

export const TelepatLanding: Story = {
  render: () => (
    <div style={{ width: 1280, margin: "0 auto", background: "#000" }}>
      <Hero />
      <ServicesSection />
      <CustomersSection />
      <VisionSection />
      <ContactSection />
    </div>
  ),
};
