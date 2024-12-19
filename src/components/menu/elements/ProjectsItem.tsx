import Image from "next/image";
import Link from "next/link";

const ProjectsItem = ({ title }: { title: string }) => {
  return (
    <div className="cardProjects">
      <div className="imageProjects">
        <Image
          src={"/projectImage/" + title + ".jpg"}
          alt={title + " image"}
          className="object-cover w-full h-full"
          width={1000}
          height={1000}
        />
      </div>

      <div className="textProjects">
        <button className=" font-poppins text-[rgb(41,41,51)] font-medium bg-[#ffc96b] rounded-md m-auto px-3 py-2 ">
          <Link href={"/services/" + title}>See More</Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectsItem;
