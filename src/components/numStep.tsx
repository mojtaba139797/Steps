interface NumStepProp {
  content: string;
}

const numStep = (prop : NumStepProp) => {
    const {content} = prop
  return <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
    <span className="text-black">{content}</span>
  </div>;
};

export default numStep;
