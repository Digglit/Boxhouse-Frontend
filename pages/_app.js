import Layout from "../layouts/default";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";

import SnowBackdrop from "../components/SnowBackdrop";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// export default function App({ Component, pageProps }) {
// 	const router = useRouter();
// 	const pageKey = router.asPath;

// 	return (
// 		<AnimatePresence initial={true} mode="wait">
// 			{/* <Component key={pageKey} {...pageProps} /> */}
//       <Layout key={pageKey}>
//         <Component {...pageProps} />
//       </Layout>
// 		</AnimatePresence>
// 	)
// }

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
