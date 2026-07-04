interface ButtunProp {
  text: string;
}

const Buttun = (prop: ButtunProp) => {
  const { text } = prop;
  return <button className="w-24 h-14 bg-purple-500 text-white font-bold rounded-4xl">{text}</button>;
};

export default Buttun;
