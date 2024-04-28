import { StoryObj, Meta } from "@storybook/react";
import YearSelect from "./YearSelect";

const meta = {
  title: "components/YearSelect",
  component: YearSelect,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof YearSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
