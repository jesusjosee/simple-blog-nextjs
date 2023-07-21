import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function Home({allPostsData}) {

  console.log(allPostsData)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm a software enginer</p>
        <p>
          ( Im building this sample website - with {' '}
          <a href="https://nextjs.org/learn"> Next.js </a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map( ({id, date, title})=> (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}> {title} </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ) )
          }
        </ul>
      </section>
    </Layout>
  );
}

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps(){

  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}