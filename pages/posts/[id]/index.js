import {getPost} from '../../../lib/posts';
import Layout from '../../../components/layout'

export default function Post({post}) {

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const post = await getPost(context.params.id)
  return {
    props: {
      post:post[0]
    }
  }
}