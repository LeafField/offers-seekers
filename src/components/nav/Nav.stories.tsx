import { StoryObj, Meta } from "@storybook/react";
import Nav from "./Nav";

const meta = {
  title: "components/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PC: Story = {};
