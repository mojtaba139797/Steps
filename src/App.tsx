import LayOut from "./components/layOut";
import Part1 from "./components/part1";
import Part2 from "./components/part2";
import zarbdar2 from "./assets/zarbdar2.jpg";
import menue2 from "./assets/menu2.jpg";
import darkLight from "./assets/darkLight.png";
import { useState } from "react";
import { useTheme } from "./context/ThemeContext";

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
  // هندلر تغییر تم
  const { toggleTheme } = useTheme();
  return (
    <>
      <LayOut>
        <div className="w-full">
          <img
            src={darkLight}
            alt="darkLight"
            className="w-7 h-7 mt-12 ml-14 cursor-pointer"
            onClick={toggleTheme}
          />
          {Part1Enable ? (
            <img
              src={zarbdar2}
              alt="zarbdar"
              className="w-8 h-8 mt-12 ml-12 cursor-pointer"
              onClick={handlePart1Enable}
            />
          ) : (
            <img
              src={menue2}
              alt="Menue"
              className="w-11 h-11 rounded-4xl mt-12 ml-12 cursor-pointer"
              onClick={handlePart1Enable}
            />
          )}
        </div>
        <Part1 Part1Enable={Part1Enable} />
        <div className="w-full">
          {Part2Enable ? (
            <img
              src={zarbdar2}
              alt="zarbdar"
              className="w-8 h-8 mt-12 ml-12 cursor-pointer"
              onClick={handlePart2Enable}
            />
          ) : (
            <img
              src={menue2}
              alt="Menue"
              className="w-11 h-11 rounded-4xl mt-12 ml-12 cursor-pointer"
              onClick={handlePart2Enable}
            />
          )}
        </div>
        <Part2 Part2Enable={Part2Enable} />
      </LayOut>
    </>
  );
}

export default App;
