import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Hubspot from "../utils/hubspot";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Hubspot />
    </ThemeProvider>
  );
}

export default MyApp;
