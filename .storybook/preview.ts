import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { handler } from "../mocks/handler";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [handler],
    },
  },
  loaders: [mswLoader],
};

export default preview;
