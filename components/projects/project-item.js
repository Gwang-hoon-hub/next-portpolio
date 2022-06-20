import Image from "next/image";

export default function ProjectItem({ data }) {

    const title = data.properties.Name.title[0].plain_text
    const githubLing = data.properties.Github.url
    const description = data.properties.Descpription.rich_text[0].plain_text
    const imageUrl = data.cover.file?.url || data.cover.external.url

    return (
        <div className="flex flex-col p-6 m-3 bg-slate-400 rounded-md">

            <Image
                src={imageUrl}
                width="100%"
                height="60%"
                
            />
            <h1>{title}</h1>
            <a href={githubLing}> 깃허브 바로가기 </a>
            <h2>설명 : {description}</h2>
        </div>
    )
}