import NumStep from "./numStep";
import arr1 from "../constants/arr1";
import ButtunPrev from "./buttunPrev";
import ButtunNext from "./buttunNext";
import { useState } from "react";

interface Part1Prop {
  Part1Enable: boolean;
}

const Part1 = (prop: Part1Prop) => {
  // پراپ مخصوص باز و بسته شدن
  const { Part1Enable } = prop;
  // استیت شمارش استپ ها
  const [step, setStep] = useState(1);
  // استپ بعدی
  const handleNextStep = () => {
    setStep((prevStep) => (prevStep === 3 ? prevStep : prevStep + 1));
  };
  // استپ قبلی
  const handlePrevStep = () => {
    setStep((prevStep) => (prevStep === 1 ? prevStep : prevStep - 1));
  };

  return (
    <>
      {Part1Enable ? (
        <div className="w-204 h-80 bg-gray-200 rounded-2xl flex flex-col justify-around">
          {/* کامپوننت استپ ها */}
          <div id="numStep-container" className="flex justify-around">
            {arr1.map((a) => (
              <NumStep content={a} step={step} />
            ))}
          </div>
          {/* قسمت نمایش متن ها */}
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

export default Part1;
