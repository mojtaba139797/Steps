import NumStep from "./numStep";
import arr1 from "../constants/arr1";
import Buttun from "./buttun";

interface Part1Prop {
  Part1Enable: boolean;
}

const Part1 = (prop: Part1Prop) => {
  const { Part1Enable } = prop;
  return (
    <>
      {Part1Enable ? (
        <div className="w-204 h-80 bg-gray-200 rounded-2xl flex flex-col justify-around">
          <div id="numStep-container" className="flex justify-around">
            {arr1.map((a) => (
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
      ) : (
        ""
      )}
    </>
  );
};

export default Part1;
