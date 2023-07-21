import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}){
    return (
        <Layout>
            <Head>
                <title> {postData.title} </title>
            </Head>

            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}  />
            </article>

            {postData.title}
        </Layout>
    )
}

export async function getStaticPaths(){
    // aqui obtengo todos os id's que se van usar y convertir a htm mediante el ssg sttic generation
    /* todos los paths se le pasana automaticmanete a la funcion getStaticProps */
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(ctx){
    // obtengo la informacion de los paramas del contexto
    const params = ctx.params

    const postData = await getPostData(params.id)

    return {
        props : {
            postData
        }
    }
}
























// export async function getStaticPaths(){
//     const paths = getAllPostIds()

//     return {
//         paths,
//         fallback: false
//     }

// }

// export async function getStaticProps({params}){
//     // params received necesary data from route to get th id.
//     console.log(params)
//     const postData = getPostData(params.id)

//     return {
//         props:{
//             postData
//         }
//     }
// }