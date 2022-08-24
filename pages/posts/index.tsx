import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  data: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

interface PropsList {
  props: Props;
}

export default function Posts() {
  const [post, setPost] = useState([]);
  /* console.log(JSON.stringify(post, null, 2)) */
  console.log(post.map(item => item._embedded['wp:featuredmedia']));

 /*  console.log(post.map() => ); */

  useEffect(() => {
    fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {post.map((item) => {
            return (
              <>
                <a key={item.id} href="*">
                <img src={item._embedded["wp:featuredmedia"].map(url => url.source_url)} alt={item.title.rendered} />
                  {/* <time>{item.modified_gmt}</time> */}
                  <strong>{item.title.rendered}</strong>
                  <p>{item.excerpt.rendered.replace( /(<([^>]+)>)/ig, '')}</p>
                </a>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
