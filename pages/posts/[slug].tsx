import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updated: string;
  };
}

export default function Post({ data }: any) {
  /* const [post, setPost] = useState([]);
//content
  useEffect(() => {
    fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []); */
  return (
    <>
      <Head>
        <title>{data.title.rendered} | Apiki</title>
      </Head>

      <main>
        <article>
          <h1>{data.title.rendered}</h1>
          <time>
            {new Date(data.modified_gmt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <div>{data.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}</div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const response = await fetch(
    `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518`
  );
  const data = await response.json();

  console.log("data", data);

  return { props: { data } };
};
