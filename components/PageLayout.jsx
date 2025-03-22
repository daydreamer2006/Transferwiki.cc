import { motion } from 'framer-motion';

export default function PageLayout({ children, frontMatter }) {
  const { title, description } = frontMatter;

  return (
    <article className="nx-min-h-screen">
      {title && (
        <motion.h1 
          className="nx-text-4xl nx-font-bold nx-tracking-tight nx-mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
      )}
      
      {description && (
        <motion.div 
          className="nx-text-xl nx-text-gray-600 nx-mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.div>
      )}

      <motion.div 
        className="nx-prose nx-prose-blue nx-max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </article>
  );
}