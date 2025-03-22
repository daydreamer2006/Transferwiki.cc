import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SchoolCard({ school, index }) {
  return (
    <motion.div
      key={school.path}
      className="nx-block nx-no-underline nx-p-6 nx-rounded-xl nx-bg-white nx-border nx-border-gray-200 nx-shadow-sm hover:nx-shadow-md nx-transition-all"
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`nx-w-full nx-h-3 nx-rounded-full nx-mb-4 nx-bg-gradient-to-r ${school.color}`}></div>
      <h3 className="nx-text-xl nx-font-bold nx-mb-2">{school.name}</h3>
      <p className="nx-text-gray-600">查看{school.name}的转学政策、录取要求和申请流程。</p>
      <div className="nx-mt-4 nx-flex nx-justify-end">
        <Link href={school.path} className="nx-text-blue-500 nx-flex nx-items-center nx-gap-1">
          详情
          <svg className="nx-w-4 nx-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </Link>
      </div>
    </motion.div>
  );
}