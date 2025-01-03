import React from "react";
import projects from "../../../../public/data/projects.json";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

// Update to match Next.js expected type for dynamic routes
interface PageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: PageProps) => {
  const slug = params.slug;
  const project = projects.data.find((project) => project.slug === slug);

  if (!project) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-[rgb(49,51,59)] min-h-max">
      <Navbar />
      <div className="flex flex-col justify-center items-start m-auto w-[87.4%] pt-28 bg-white">
        <Image
          src={"/projectImage/" + project.image + ".jpg"}
          alt={"projects image"}
          width={800}
          height={800}
          className="object-contain w-full"
        />
        <h1 className="font-poppins font-extrabold text-2xl py-5 text-center m-auto">
          {project.title}
        </h1>

        <div className="w-[90%] m-auto font-poppins">
          <h2>{project.description}</h2>
          <p>{project.star}</p>
          <br />
          <p>{project.task}</p>
          <br />
          <p>{project.action}</p>
          <br />
          <p>{project.result}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
