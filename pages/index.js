import Head from 'next/head'
import {getAllPosts} from '../lib/posts';

import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button';

export default function Home({allPosts}) {

  const buttonClick = () => {
    alert("button tıklanıverdi!")
  }

  const elAllPosts = allPosts.map((post, i) => (
    <li key={i}>
      <a href={`posts/${post.id}`}>{post.title}</a>
    </li>
  ));

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h2>Posts</h2>
        <ul>
          { elAllPosts }
        </ul>
        <hr />
        <Button value="bizim button" onClick={() => buttonClick()} />
      </section>
    
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts
    }
  }
}