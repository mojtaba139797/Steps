import NumStep from "./numStep";
import arr1 from "../constants/arr1";
import ButtunPrev from "./buttunPrev";
import ButtunNext from "./buttunNext";
import { useState } from "react";
import advices1 from "../constants/advices1";
import TextArea from "./textArea";

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
        <div className="w-80 h-50 md:w-110 md:h-50 lg:w-204 lg:h-80 px-4 pt-2 bg-gray-200 dark:bg-zinc-800 rounded-2xl flex flex-col justify-around">
          {/* کامپوننت استپ ها */}
          <div id="numStep-container" className="flex justify-around">
            {arr1.map((a) => (
              <NumStep content={a} step={step} onStepChange={setStep} />
            ))}
          </div>
          {/* قسمت نمایش متن ها */}
          {advices1.map((adv) => (
            <TextArea id={adv.id} advice={adv.adv} step={step} />
          ))}
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
