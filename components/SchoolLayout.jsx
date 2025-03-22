import { motion } from 'framer-motion';

export default function SchoolLayout({ children, frontMatter }) {
  const { title, description, schoolName, schoolInitial, schoolColor } = frontMatter;

  return (
    <article className="nx-min-h-screen">
      <div className="nx-mb-8">
        <div className="nx-flex nx-items-center nx-mb-8">
          <div className={`nx-w-20 nx-h-20 nx-bg-gradient-to-r ${schoolColor || 'nx-from-blue-600 nx-to-blue-700'} nx-rounded-full nx-flex nx-items-center nx-justify-center nx-text-white nx-font-bold nx-text-3xl nx-mr-4`}>
            {schoolInitial || 'U'}
          </div>
          <h1 className="nx-text-4xl nx-font-bold nx-tracking-tight">{schoolName}</h1>
        </div>

        {description && (
          <div className="nx-p-6 nx-bg-gradient-to-br nx-from-blue-50 nx-to-white nx-rounded-xl nx-shadow-sm nx-mb-8">
            {description}
          </div>
        )}
      </div>

      <div className="nx-prose nx-prose-blue nx-max-w-none">
        {children}
      </div>
    </article>
  );
}