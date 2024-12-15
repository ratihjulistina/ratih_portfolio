import timelineData from "../../public/data/timeline.json";

const Timeline = () => {
  return (
    <div>
      {timelineData.data.map((item, index) => (
        <div key={"W" + index} className="flex mobile:h-[100%]">
          <div className="">
            <div className="flex justify-center items-center text-[rgb(41,41,51)] rounded-full w-12 h-12 bg-[#ffc96b] shadow-md shadow-yellow-100 font-poppins">
              {item.year.toString()}
            </div>
            {index < timelineData.data.length - 1 ? (
              <div className="w-1 bg-slate-600 m-auto h-full"></div>
            ) : (
              <div className="h-0"></div>
            )}
          </div>
          <div className="flex flex-col justify-start h-max mt-2 px-6 text-[#f8f7f6]">
            <div className="font-semibold font-serif text-xl">
              {item.title + " @ "}{" "}
              <span className="text-[#ffc96b] font-medium font-poppins">
                {item.company}
              </span>
            </div>
            <div className="font-poppins text-[#f8f7f6] pb-10">
              {item.tasks}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
