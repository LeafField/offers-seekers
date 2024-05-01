import { StoryObj, Meta } from "@storybook/react";
import MenuButton from "./MenuButton";

const meta = {
  title: "components/MenuButton",
  component: MenuButton,
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
} satisfies Meta<typeof MenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
