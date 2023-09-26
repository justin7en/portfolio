import Image, { StaticImageData } from "next/image";

interface ProjectContent {
  heading: string;
  content: string;
  link: string;
  preview: StaticImageData;
}

export function ProjectBoard ({project}: {project: ProjectContent}){
  return (
    <div className="p-2 rounded-sm bg-blue-600">
      <div className="flex flex-row space-x-2">
        <div className="pt-1">
          <Image 
          src={project.preview}
          alt="Screenshot of the Project"
          width={500}
          height={500}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg text-amber-400">
            {project.heading}
          </h2>
          <p className="grow">
            {project.content}
          </p>
          <a href={project.link} target="_blank" className="underline underline-offset-2">GitHub</a>
        </div>
      </div>
    </div>
  )
}