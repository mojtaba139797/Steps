import LayOut from "./components/layOut";
import Part1 from "./components/part1";
import Part2 from "./components/part2";
import zarbdar from "./assets/zarbdar.png";
import { useState } from "react";

function App() {
  const [Part1Enable, setPart1Enable] = useState(true);
  const [Part2Enable, setPart2Enable] = useState(true);
  const handlePart1Enable = () => {
    setPart1Enable(!Part1Enable);
  };
  const handlePart2Enable = () => {
    setPart2Enable(!Part2Enable);
  };
  return (
    <>
      <img
        src="zarbdar"
        alt="zarbdar"
        className="w-4 h-4 mt-12 ml-12"
        onClick={handlePart1Enable}
      />
      <LayOut>
        <Part1 Part1Enable={Part1Enable} />
      </LayOut>
      <img
        src="zarbdar"
        alt="zarbdar"
        className="w-4 h-4 mt-12 ml-12"
        onClick={handlePart2Enable}
      />
      <LayOut>
        <Part2 Part2Enable={Part2Enable} />
      </LayOut>
    </>
  );
}

export default App;
