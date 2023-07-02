import Layout from '../layouts/default'
import '../styles/globals.css'
import SnowBackdrop from '../components/SnowBackdrop'

import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

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

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // <SnowBackdrop />
  )
}
