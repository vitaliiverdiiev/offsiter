import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "app/store";
import "@fontsource/inter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
