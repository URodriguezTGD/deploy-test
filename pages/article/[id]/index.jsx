import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import client from "../../../client";
import groq from "groq";

const article = ({ article }) => {
    // const router = useRouter();
    // const {id} = router.query;
    return (
        <>
            {/* <h1>{article.title}</h1>
            <p>{article.body}</p> */}
            <br />
            <Link href="/">Go back</Link>
        </>
    );
};



//   article.getInitialProps = async function (context) {
//     // It's important to default the slug so that it doesn't return "undefined"

//   }

// article.getInitialProps = async (context) => {
// console.log("🚀 ~ file: index.jsx ~ line 32 ~ getStaticProps ~ context", context)
// console.log("🚀 ~ file: index.jsx ~ line 33 ~ getStaticProps ~ context", context.query)
    
//     // const { title = "" } = context.query;
//     // return await client.fetch(query, { title });
//     return {props:{}}

//     // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ context.params.id }`)
//     // const article = await res.json();
//     // return {
//     //     props:{
//     //         article
//     //     }
//     // }
// };

export const getStaticProps = async (context) => {
    let article = {props:{}}
    const query = groq`*[_type == "post"]`;
    // const { title = "" } = query;
    console.log("🚀 ~ file: index.jsx ~ line 52 ~ QUERY", query)
    // console.log("🚀 ~ file: index.jsx ~ line 52 ~ TITLE", title)
    
    console.log("🚀 ~ file: index.jsx ~ line 32 ~ getStaticProps ~ context", context)
    console.log("🚀 ~ file: index.jsx ~ line 33 ~ getStaticProps ~ context", context.query)
    let response =  await client.fetch(query);
    console.log("🚀 ~ file: index.jsx ~ line 59 ~ getStaticProps ~ RESPONSE:", response)
    
    //Add response to article object...
    return article
    
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ context.params.id }`)
        // const article = await res.json();
        // return {
        //     props:{
        //         article
        //     }
        // }
    };


export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};

export default article;