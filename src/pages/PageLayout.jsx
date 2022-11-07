import Head from 'next/head'

const PageLayout = ({ children, title = 'Spotify' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="RadLib - Books for everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  )
}
export default PageLayout
