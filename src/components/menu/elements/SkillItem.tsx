import Image from "next/image";

const SkillItem = ({ icon }: { icon: string }) => {
  return (
    <div className="  bg-gray-500 rounded-md">
      <button className="h-[40vh] w-[100%] flex flex-col justify-center items-center gap-10  rounded-md hover:bg-[#ffc96b]">
        <Image
          height={80}
          width={80}
          src={"skillsLogo/" + icon + ".svg"}
          alt="skill-icon"
        />
        <p className="font-poppins text-0.25xl">{icon}</p>
      </button>
    </div>
  );
};

export default SkillItem;
