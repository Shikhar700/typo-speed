import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { SET_DURATION } from "../../../redux/slices/time duration/TimeDurationSlice";
import { SET_COUNT } from "../../../redux/slices/word count/WordCountSlice";

const TestDetail = () => {
  const mode = useAppSelector((state) => state.testMode.mode);
  const value = useAppSelector((state) => state.testValue.value);
  const isChanged = useAppSelector((state) => state.settingChanged.isChanged);
  const timeDuration = useAppSelector((state) => state.timeDuration.duration);
  const wordCount = useAppSelector((state) => state.wordCount.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mode === "time") {
      dispatch(SET_DURATION(value));
    } else {
      dispatch(SET_COUNT(value));
    }
  }, [isChanged]);

  return (
    <main className="w-full flex justify-center mb-2">
      <div className="w-[1200px] flex justify-start text-2xl text-darkTest">
        {mode === "time" ? `seconds: ${timeDuration}` : `words: ${wordCount}`}
      </div>
    </main>
  );
};

export default TestDetail;
