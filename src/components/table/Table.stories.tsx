import { StoryObj, Meta } from "@storybook/react";
import Table from "./Table";

const meta = {
  title: "components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PC: Story = {
  parameters: {
    layout: "centered",
  },
  decorators: (Story) => (
    <div
      style={{
        width: "686px",
      }}
    >
      <Story />
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
  decorators: (Story) => (
    <div style={{ paddingInline: "1rem" }}>
      <Story />
    </div>
  ),
};
