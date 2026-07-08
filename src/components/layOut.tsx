interface LayOutProp {
  children: React.ReactNode;
}

const LayOut = (prop: LayOutProp) => {
  const { children } = prop;
  return (
    <div className="flex flex-col w-full h-fit items-center md:py-12 pt-4 dark:bg-zinc-900">
      {children}
    </div>
  );
};

export default LayOut;
