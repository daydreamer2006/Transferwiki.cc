import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.asPath}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;