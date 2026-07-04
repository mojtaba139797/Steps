import LayOut from "./components/layOut";
import Part1 from "./components/part1";
import Part2 from "./components/part2";
import zarbdar from "./assets/zarbdar.png";

function App() {
  return (
    <>
      <img src="zarbdar" alt="zarbdar" className="w-4 h-4 mt-12 ml-12" />
      <LayOut>
        <Part1 />
      </LayOut>
      <img src="zarbdar" alt="zarbdar" className="w-4 h-4 mt-12 ml-12" />
      <LayOut>
        <Part2 />
      </LayOut>
    </>
  );
}

export default App;
