interface ButtunProp {
  text: string;
  onClick: React.ReactEventHandler;
}

const ButtunPrev = (prop: ButtunProp) => {
  const { text, onClick } = prop;
  return (
    <button
      onClick={onClick}
      className="w-24 h-14 cursor-pointer bg-purple-500 text-white font-bold rounded-4xl"
    >
      {text}
    </button>
  );
};

export default ButtunPrev;
