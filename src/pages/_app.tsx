import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    console.log("meow");
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const myTheme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Open Sans",
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );
  // const theme = useTheme();

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  // console.log("theme", theme.palette.mode);
  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chilanka&display=swap"
          rel="stylesheet"
        >
          {" "}
        </link>
      </Head> */}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={myTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
