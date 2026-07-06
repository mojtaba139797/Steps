import LayOut from "./components/layOut";
import Part1 from "./components/part1";
import Part2 from "./components/part2";
import zarbdar from "./assets/zarbdar.png";
import Menue from "./assets/Menu.png";
import { useState } from "react";

function App() {
  // استیت دسترسی به پارت 1
  const [Part1Enable, setPart1Enable] = useState(true);
  // استیت دسترسی به پارت 2
  const [Part2Enable, setPart2Enable] = useState(true);
  // هندلر دسترسی به پارت 1
  const handlePart1Enable = () => {
    setPart1Enable(!Part1Enable);
  };
  // هندلر دسترسی به پارت 2
  const handlePart2Enable = () => {
    setPart2Enable(!Part2Enable);
  };
  return (
    <>
      {Part1Enable ? (
        <img
          src={zarbdar}
          alt="zarbdar"
          className="w-4 h-4 mt-12 ml-12"
          onClick={handlePart1Enable}
        />
      ) : (
        <img
          src={Menue}
          alt="Menue"
          className="w-7 h-7 mt-12 ml-12"
          onClick={handlePart1Enable}
        />
      )}
      <LayOut>
        <Part1 Part1Enable={Part1Enable} />
      </LayOut>
      {Part2Enable ? (
        <img
          src={zarbdar}
          alt="zarbdar"
          className="w-4 h-4 mt-12 ml-12"
          onClick={handlePart2Enable}
        />
      ) : (
        <img
          src={Menue}
          alt="Menue"
          className="w-7 h-7 mt-12 ml-12"
          onClick={handlePart2Enable}
        />
      )}
      <LayOut>
        <Part2 Part2Enable={Part2Enable} />
      </LayOut>
    </>
  );
}

export default App;
