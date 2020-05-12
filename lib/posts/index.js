import axios from 'axios';
const API_URL = "https://jsonplaceholder.typicode.com/";

export function getAllPosts() {
  return Promise.resolve(axios.get('posts', {
    baseURL: API_URL
  }).then(res => res.data)
    .catch(e => console.log("hata", e.status))
  );
}

export async function getPost(id) {
  // during this codes development period "https://jsonplaceholder.typicode.com/posts/:id" was not responding
  const allPosts = await axios.get('posts', {
    baseURL: API_URL
  }).then(res => res.data)
    .catch(e => console.log("hata", e.status));

  return Promise.resolve(allPosts.filter(post => {
    return post.id === parseInt(id)
  }));
}