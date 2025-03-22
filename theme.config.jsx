import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default {
  logo: <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>TransferWiki.cc</span>,
  project: {
    link: 'https://github.com/Shiccovo/Transferwiki.cc',
  },
  docsRepositoryBase: 'https://github.com/Shiccovo/Transferwiki.cc',
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath !== '/' ? '%s – TransferWiki.cc' : 'TransferWiki.cc - 转学生资源网站',
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title || 'TransferWiki.cc'} />
        <meta property="og:description" content={frontMatter.description || '转学生资源网站'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </>
    )
  },
  sidebar: {
    titleComponent({ title, type }) {
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: 210, // 蓝色主题
  primarySaturation: 80,
  font: false, // 禁用默认字体以使用我们自定义的字体
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} TransferWiki.cc
      </span>
    ),
  },
}