import NumStep from "./numStep";
import arr2 from "../constants/arr2";
import ButtunPrev from "./buttunPrev";
import ButtunNext from "./buttunNext";
import { useState } from "react";

interface Part2Prop {
  Part2Enable: boolean;
}

const Part2 = (prop: Part2Prop) => {
  // پراپ مخصوص باز و بسته شدن
  const { Part2Enable } = prop;
  // استیت شمارش استپ ها
  const [step, setStep] = useState(1);
  // استپ بعدی
  const handleNextStep = () => {
    setStep((prevStep) => (prevStep === 9 ? prevStep : prevStep + 1));
  };
  // استپ قبلی
  const handlePrevStep = () => {
    setStep((prevStep) => (prevStep === 1 ? prevStep : prevStep - 1));
  };
  return (
    <>
      {Part2Enable ? (
        <div className="w-204 h-80 bg-gray-200 rounded-2xl flex flex-col justify-around">
          {/* کامپوننت استپ ها */}
          <div id="numStep-container" className="flex justify-center gap-2">
            {arr2.map((a) => (
              <NumStep content={a} step={step} />
            ))}
          </div>
          {/* قسمت نمایش متن ها*/}
          <div id="text-area" className="flex justify-center">
            <p className="font-bold">hello</p>
          </div>
          {/* دکمه های قبلی و بعدی */}
          <div id="buttun-container" className="flex justify-around">
            <ButtunPrev text="Previous" onClick={handlePrevStep} />
            <ButtunNext text="Next" onClick={handleNextStep} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Part2;
