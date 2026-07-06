interface LayOutProp {
  children: React.ReactNode;
}

const LayOut = (prop: LayOutProp) => {
  const { children } = prop;
  return (
    <div className="flex flex-col items-center md:py-12 pt-4">{children}</div>
  );
};

export default LayOut;
