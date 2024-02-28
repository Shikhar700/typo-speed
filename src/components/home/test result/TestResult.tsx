import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { FINISHED_FALSE } from "../../../redux/slices/test finished/TestFinishedSlice";

const TestResult = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.testMode.mode);
  const quickRestart = useAppSelector(
    (state) => state.quickRestart.quickRestart
  );
  const correctWordsCount = useAppSelector(
    (state) => state.correctWordsCount.correctWordsCount
  );
  const mistakesCount = useAppSelector(
    (state) => state.mistakesCount.mistakesCount
  );
  const timeTaken = useAppSelector((state) => state.timeTaken.timeTaken);
  const keyPressCount = useAppSelector(
    (state) => state.keyPressCount.keyPressCount
  );

  const speed = Math.floor((correctWordsCount / timeTaken) * 60);
  let accuracy;
  if (keyPressCount - mistakesCount < 1) {
    accuracy = 0;
  } else {
    accuracy = Math.floor(
      ((keyPressCount - mistakesCount) / keyPressCount) * 100
    );
  }

  const resultContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    resultContainerRef.current?.focus();
  }, []);

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (!(quickRestart === "off")) {
      if (event.key === (quickRestart === "esc" ? "Escape" : "Enter")) {
        dispatch(FINISHED_FALSE());
      }
    }
  };

  return (
    <main
      tabIndex={0}
      onKeyDown={keyDownHandler}
      ref={resultContainerRef}
      className="w-full flex justify-center px-4 outline-none"
    >
      <div className="w-[700px] flex flex-col ">
        <h1 className="text-center text-4xl font-semibold py-3 underline underline-offset-8 text-over">
          TEST RESULT
        </h1>
        <section className=" flex justify-evenly py-4 mb-6">
          <div className="w-[40%] text-center">
            <h1 className="font-semibold text-8xl max-[670px]:text-6xl  transition-all duration-200 text-darkTest ">
              {speed}
            </h1>
            <p className="text-3xl text-over">wpm</p>
          </div>
        </section>

        <section className="flex justify-center mb-4 max-[670px]:flex-col max-[600px]:items-center">
          <div className="flex w-[50%] max-[670px]:w-[100%] max-[670px]:mb-6">
            <div className=" w-[50%] text-center">
              <h1 className="text-4xl font-semibold max-[670px]:text-3xl transition-all duration-200 text-darkTest">
                {timeTaken}s
              </h1>
              <p className="text-xl text-over">time</p>
            </div>
            <div className="w-[50%] text-center">
              <h1 className="text-4xl font-semibold max-[670px]:text-3xl transition-all duration-200 text-darkTest">
                {accuracy}%
              </h1>
              <p className="text-xl text-over">accuracy</p>
            </div>
          </div>

          <div className="flex w-[50%] max-[670px]:w-[100%]">
            <div className="w-[50%] text-center">
              <h1 className="text-4xl font-semibold max-[670px]:text-3xl transition-all duration-200 text-darkTest">
                {keyPressCount - mistakesCount > -1
                  ? keyPressCount - mistakesCount
                  : 0}
                /{keyPressCount}
              </h1>
              <p className="text-xl text-over">keystrokes</p>
            </div>
            <div className="w-[50%] text-center">
              <h1 className="text-4xl font-semibold max-[670px]:text-3xl transition-all duration-200 text-darkTest">
                {mode}
              </h1>
              <p className="text-xl text-over">mode</p>
            </div>
          </div>
        </section>

        <div className="text-center py-4">
          <button
            onClick={() => {
              dispatch(FINISHED_FALSE());
            }}
            className="w-[30%] font-semibold rounded-md py-3 max-[500px]:w-[50%] transition-all duration-200  bg-dark text-over hover:bg-btnSelect hover:text-btnSelectOver"
          >
            TEST AGAIN
          </button>
        </div>
      </div>
    </main>
  );
};

export default TestResult;
