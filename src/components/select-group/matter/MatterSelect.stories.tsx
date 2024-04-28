import { StoryObj, Meta } from "@storybook/react";
import Matter from "./MatterSelect";

const meta = {
  title: "components/Matter",
  component: Matter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Matter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
