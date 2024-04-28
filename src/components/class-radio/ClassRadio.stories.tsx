import { StoryObj, Meta } from "@storybook/react";
import ClassRadio from "./ClassRadio";

const meta = {
  title: "components/ClassRadio",
  component: ClassRadio,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ClassRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
