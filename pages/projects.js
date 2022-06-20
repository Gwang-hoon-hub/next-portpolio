import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";

export default function Products({ projects }) {
    
    // 클라이언트 쪽에서 보이는 부분
    console.log(projects);

    return(
            <Layout>
                <Head>
                    <title>PangHoon Portpolio</title>
                    <meta name="description" content="Go Funcking Coding!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            <h1>프로젝트! : {projects.length}</h1>
            {projects.results.map((aProject) => (
                <h1>{aProject.properties.Name.title[0].plain_text}</h1>
            ))}

            
            </Layout>
        );
    }
    
// 빌드 타임에 호출
export async function getStaticProps() {

  const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
      body: JSON.stringify({
          sorts: [
              {
                  "property": "Name",
                  "direction": "ascending"
            }  
          ],
          page_size: 100
      })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    console.log(projects);

    const projectNames = projects.results.map((aProject) => (
        aProject.properties.Name.title[0].plain_text
    ))

    // 서버 쪽에서 보이는 부분
    console.log(`projectIdNames : ${projectNames}`);

  return {
    props: {projects}, // will be passed to the page component as props
  }
}