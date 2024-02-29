import Header from "../Header";
import TestSetting from "./TestSetting";
import TestArea from "./test area/TestArea";
import { useAppSelector } from "../../redux/hooks";
import { forwardRef } from "react";
import TestResult from "./test result/TestResult";

const Home = forwardRef<HTMLInputElement>((props, ref) => {
  const testFinished = useAppSelector((state) => state.testFinished.finished);

  return (
    <main>
      {testFinished ? (
        <TestResult />
      ) : (
        <>
          <TestSetting />
          <TestArea ref={ref} />
        </>
      )}
    </main>
  );
});

export default Home;
