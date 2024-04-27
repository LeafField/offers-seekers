import { StoryObj, Meta } from "@storybook/react";
import App from "./App";

const meta = {
  title: "integration/App",
  component: App,
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
