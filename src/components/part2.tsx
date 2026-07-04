import NumStep from "./numStep";
import arr2 from "../constants/arr2";
import Buttun from "./buttun";

const Part2 = () => {
  return (
    <div className="w-204 h-80 bg-gray-200 rounded-2xl flex flex-col justify-around">
      <div id="numStep-container" className="flex justify-center gap-2">
        {arr2.map((a) => (
          <NumStep content={a} />
        ))}
      </div>

      <div id="text-area" className="flex justify-center">
        <p className="font-bold">hello</p>
      </div>

      <div id="buttun-container" className="flex justify-around">
        <Buttun text="Previous" />
        <Buttun text="Next" />
      </div>
    </div>
  );
};

export default Part2;
