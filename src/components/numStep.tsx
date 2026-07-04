import { useState } from "react";

interface NumStepProp {
  content: number;
  step: number;
}

const NumStep = (prop: NumStepProp) => {
  // استخراج پراپ ها
  const { content, step } = prop;
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`w-14 h-14 rounded-full ${content === step ? "bg-purple-400 text-white" : ""} ${content < step ? "bg-purple-400 text-white" : ""} ${hover ? "bg-purple-400 cursor-pointer" : "bg-gray-300"} flex justify-center items-center`}
    >
      <span className={`${hover ? "text-white" : "text-black"}`}>
        {content}
      </span>
    </div>
  );
};

export default NumStep;
