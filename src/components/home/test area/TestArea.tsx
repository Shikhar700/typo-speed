import TestDetail from "./TestDetail";
import WordsContainer from "./WordsContainer";
import { useAppSelector } from "../../../redux/hooks";
import { forwardRef } from "react";

const TestArea = forwardRef<HTMLInputElement>((props, ref) => {
  const bgBlur = useAppSelector((state) => state.blurBg.blur);
  return (
    <>
      <main className={"px-4" + " " + (bgBlur && "blur-sm")}>
        <TestDetail />
        <WordsContainer ref={ref} />
      </main>
    </>
  );
});

export default TestArea;
