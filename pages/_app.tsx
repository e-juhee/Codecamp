// import '../styles/globals.css'
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyels } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

function MyApp({ Component }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyels} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
