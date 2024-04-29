import { StoryObj, Meta } from "@storybook/react";
import Column from "./Column";

const meta = {
  title: "components/Column",
  component: Column,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "676px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <tbody>
            <Story />
          </tbody>
        </table>
      </div>
    ),
  ],
} satisfies Meta<typeof Column>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BloadName: Story = {
  args: {
    broadName: "輸送・機械運転の職業",
    value: 10000,
  },
};

export const MiddleName: Story = {
  args: {
    broadName: "輸送・機械運転の職業",
    value: 10000,
    middleName: "一般事務員",
  },
};
