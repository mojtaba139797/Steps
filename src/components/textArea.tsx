interface TextAreaProp {
  step: number;
  advice: React.ReactNode;
  id: number;
}

const TextArea = (prop: TextAreaProp) => {
  const { step, advice, id } = prop;
  return (
    <div
      id="text-area"
      className={`flex justify-center ${step !== id ? "hidden" : "flex justify-center"}`}
    >
      <p className="font-bold">{advice}</p>
    </div>
  );
};

export default TextArea;
