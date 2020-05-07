import React from "react";
import { ThemeContext } from "./ThemeProvider";
import { LocaleContext } from "./LocaleContext";
import App from "./App";
import localeEmoji from "locale-emoji";

export default function Home() {
  return (
    <ThemeContext.Provider value={"yellowTheme"}>
      <LocaleContext.Provider value={localeEmoji("en-In")}>
        <App style={{ "background-color": "black" }} />
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}
