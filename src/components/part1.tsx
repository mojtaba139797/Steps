import NumStep from "./numStep";
import arr1 from "../constants/arr1";

const Part1 = () => {
  return (
    <div className="w-204 h-80 bg-gray-500 rounded-2xl">
      <div id="numStep-container" className="flex justify-around mt-8">
        {arr1.map((a) => (
          <NumStep content={a} />
        ))}
      </div>
    </div>
  );
};

export default Part1;
