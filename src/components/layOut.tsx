interface LayOutProp {
  children: React.ReactNode;
}

const LayOut = (prop: LayOutProp) => {
  const { children } = prop;
  return <div className="flex flex-col gap-52 justify-center items-center mt-12">{children}</div>;
};

export default LayOut;
