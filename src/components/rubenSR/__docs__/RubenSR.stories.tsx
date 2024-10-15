import type { Meta, StoryObj } from "@storybook/react";
import RubenSR from "../rubenSR";

// Meta definición para el componente RubenSR
const meta: Meta<typeof RubenSR> = {
  title: "RubenSR",
  component: RubenSR,
};
export default meta;

type Story = StoryObj<typeof RubenSR>;

// Historia principal de RubenSR
export const Default: Story = {
  args: {
    description: "Este es un testimonio increíble. ¡Altamente recomendado!",
    author: "John Doe",
    avatarUrl: "https://via.placeholder.com/150",
    width: 150,
    height: 150,
  },
};

// Segunda historia con otro testimonio
export const WithAnotherTestimonial: Story = {
  args: {
    description: "Este es otro testimonio que refleja una gran experiencia.",
    author: "Jane Doe",
    avatarUrl: "https://via.placeholder.com/150",
    width: 150,
    height: 150,
  },
};
