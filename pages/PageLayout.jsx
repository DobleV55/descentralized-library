import Head from 'next/head'
import SideBar from '../components/SideBar'
import Player from '../components/player'

const PageLayout = ({ children, title = 'Spotify' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Spotify - Music for everyone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <SideBar />
      </div>
      <main>{children}</main>
      <Player></Player>
    </>
  )
}
export default PageLayout
