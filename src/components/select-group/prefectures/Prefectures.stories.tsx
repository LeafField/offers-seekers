import { StoryObj, Meta } from "@storybook/react";
import Prefectures from "./Prefectures";

const meta = {
  title: "components/Prefectures",
  component: Prefectures,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Prefectures>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
