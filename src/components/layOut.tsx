interface LayOutProp {
  children: React.ReactNode;
}

const LayOut = (prop: LayOutProp) => {
  const { children } = prop;
  return <div className="flex flex-col gap-36 items-center mt-12 mb-12">{children}</div>;
};

export default LayOut;
