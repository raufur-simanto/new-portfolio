import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Blog from "@/components/blog";
import Education from "@/components/education";
import SectionHeading from "@/components/section-heading";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4 pt-28 sm:pt-36">
        <Intro />
        <SectionDivider />
        <About />
        <section className="mb-25 max-w-[110rem] w-full">
        <SectionHeading>Timeline</SectionHeading>
        <div className="flex flex-col lg:flex-row gap-2 justify-center">
          <div className="w-full lg:w-1/2 max-w-[55rem]">
            <h3 className="text-2xl font-medium capitalize mb-8 text-center">
              Experience
            </h3>
            <Experience />
          </div>
          <div className="w-full lg:w-1/2 max-w-[55rem] lg:-ml-16">
            <h3 className="text-2xl font-medium capitalize mb-8 text-center">
              Education
            </h3>
            <Education />
          </div>
        </div>
      </section>
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
