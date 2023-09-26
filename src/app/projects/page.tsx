import { ProjectBoard } from "@/components/projectBoard";
import UsabilityStudyPic from "src/images/NavTopLeft.png";
import TOPPic from "src/images/TOPForum.png";

export default function Home() {
  let UsabilityStudie = {
    heading: "Navigationmenu Position - Usability Study",
    content: "This website has a simple design per page, but 29 different pages. This was done to ensure that participants would focus more on using the navigation menu. The aim was to find out if the horizontal top menu or the vertical left menu is more usable. (Bachelor Thesis)",
    link: "https://github.com/justin7en/eShopStudie",
    preview: UsabilityStudyPic,
  };

  let TOPForum = {
    heading: "The idea of a forum for the Chemnitz University of Technology",
    content: "This project was created over two semesters in a group of 6 people. We started by brainstorming an idea, creating prototypes, learning NextJS and building our first website.",
    link: "https://github.com/top-22/forum",
    preview: TOPPic,
  }

  return (
    <main>
      <div className="w-3/4 mx-auto space-y-4">
        <h2 className="text-lg">.Solo</h2>
          <ProjectBoard project={UsabilityStudie}/>
        <h2 className="text-lg">.Team</h2>
          <ProjectBoard project={TOPForum}/>
      </div>
    </main>
  )
}