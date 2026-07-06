interface ButtunProp {
  text: string;
  onClick: React.ReactEventHandler;
}

const ButtunNext = (prop: ButtunProp) => {
  const { text, onClick } = prop;
  return (
    <button
      onClick={onClick}
      className="w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-14 font-normal text-sm md:text-lg lg:text-xl cursor-pointer bg-purple-500 text-white rounded-4xl"
    >
      {text}
    </button>
  );
};

export default ButtunNext;
