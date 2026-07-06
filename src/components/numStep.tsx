import { useState } from "react";

interface NumStepProp {
  content: number;
  step: number;
  onStepChange: (newStep: number) => void;
}

const NumStep = (prop: NumStepProp) => {
  // استخراج پراپ ها
  const { content, step, onStepChange } = prop;
  // استیت وضعیت هاور بودن یا نبودن
  const [hover, setHover] = useState(false);
  // هندلر تاگل کردن وضعیت هاور
  const handleHover = () => {
    setHover(!hover);
  };
  // هندلر برای تغییر استپ، طبق عدد داخل هر دایره
  const handleClick = () => {
    onStepChange(content);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
      className={`w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 cursor-pointer rounded-full ${content === step ? "bg-purple-400 text-white" : "bg-gray-300"} ${content < step ? "bg-purple-400 text-white" : "bg-gray-300"} ${hover ? "bg-purple-400" : "bg-gray-300"} flex justify-center items-center`}
    >
      <span
        className={`${content <= step ? "text-white" : "text-black"} ${hover ? "text-white" : "text-black"}`}
      >
        {content}
      </span>
    </div>
  );
};

export default NumStep;
