import Layout from "../components/layout";
import Head from "next/head";

export default function Products(){
    return(
            <Layout>
                <Head>
                    <title>PangHoon Portpolio</title>
                    <meta name="description" content="Go Funcking Coding!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>프로젝트!</h1>
            </Layout>
        );
    }