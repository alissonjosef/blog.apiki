import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updated: string;
  };
}

export default function Post({ data }) {
  const route = useRouter();
  console.log('route',route);
  return (
    <>
      <Head>
        <title>{data?.title?.rendered} | Apiki</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{data?.title?.rendered}</h1>
          <time>
            {new Date(data?.modified_gmt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <div className={styles.postContainer}>
            {data?.excerpt?.rendered?.replace(/(<([^>]+)>)/gi, "")}
          </div>
        </article>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`)
  const data = await res.json()

  console.log(data)

  // Pass data to the page via props
  return { props: { data } }
}

/* export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/blog/first-post',
      // Object variant:
      { params: { slug: 'slug' } },
    ],
    fallback: true,
  }
} */

/* export async function getStaticProps() {
 
  const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`)
  const posts = await res.json()

 console.log('la vai pai',posts)
  return {
    props: {
      posts,
    },
  }
}
 */

/* export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  console.log('slug',slug)

  const response = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`
  );
  const data = await response.json();

  console.log("data", data);

  return { props: { data } };
}; */

/* export const getStaticPaths: GetServerSideProps = async({params}) =>{

  const { slug } = params

  const response = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518}`
  );
  const data = await response.json();

  console.log("data", data);

  return { props: { data } };
  
} */
