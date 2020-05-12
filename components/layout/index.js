import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {

  const headerContent = home ? (
    <h1 className={styles['layout-header']}>Main Page</h1>
  ) : (<>
    <h2 className={styles['layout-header']}>
      <Link href="/">
        <a>← Main Page</a>
      </Link>
    </h2>
  </>);

  const backToHome = !home && (
    <div className={styles.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  );

  return (
    <div className={ styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      <header className={styles.header}>
        { headerContent }
      </header>
      
      <main>
        { children }
      </main>

      { backToHome }
    </div>
  )
}