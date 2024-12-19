import React from "react";
import projects from "../../../../public/data/projects.json";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

const page = ({ params }: { params: { serviceId: string } }) => {
  const slug = params.serviceId;
  const service = projects.data.find((project) => project.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-[rgb(49,51,59)] min-h-max">
      <Navbar />
      <div className="flex flex-col justify-center items-start m-auto w-[87.4%] pt-28 bg-white">
        <Image
          src={"/projectImage/" + service.image + ".jpg"}
          alt={"projects image"}
          width={800}
          height={800}
          className="object-contain w-full"
        />
        <h1 className="font-poppins font-extrabold text-2xl py-5 text-center m-auto">
          {service.title}
        </h1>

        <div className="w-[90%] m-auto font-poppins">
          <h2>{service.description}</h2>
          <p>{service.star}</p>
          <br />
          <p>{service.task}</p>
          <br />
          <p>{service.action}</p>
          <br />
          <p>{service.result}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
