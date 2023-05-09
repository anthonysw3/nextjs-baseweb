"use client";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

const engine = new Styletron();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>{children}</BaseProvider>
        </StyletronProvider>
      </body>
    </html>
  );
}
