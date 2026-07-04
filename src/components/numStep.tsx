interface NumStepProp {
  content: string;
}

const NumStep = (prop : NumStepProp) => {
    const {content} = prop
  return <div className="w-14 h-14 rounded-full bg-gray-300 flex justify-center items-center">
    <span className="text-black">{content}</span>
  </div>;
};

export default NumStep;
