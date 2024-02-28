import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CHANGE_MODE } from "../../redux/slices/test mode/TestModeSlice";
import { CHANGE_VALUE } from "../../redux/slices/test value/TestValueSlice";
import { ADD_BLUR } from "../../redux/slices/blur bg/BlurBgSlice";
import { SET_COUNT } from "../../redux/slices/word count/WordCountSlice";
import { SET_DURATION } from "../../redux/slices/time duration/TimeDurationSlice";
import { CHANGE_IS_CHANGED } from "../../redux/slices/setting changed/SettingChangedSlice";
import CustomAdder from "./CustomAdder";

const TestSetting = () => {
  const mode = useAppSelector((state) => state.testMode.mode);
  const value = useAppSelector((state) => state.testValue.value);
  const blurBg = useAppSelector((state) => state.blurBg.blur);

  const [showCustomAdder, setShowCustomAdder] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const closeAdder = () => {
    setShowCustomAdder(false);
  };

  useEffect(() => {
    if (mode === "time") {
      dispatch(SET_DURATION(value));
    } else {
      dispatch(SET_COUNT(value));
    }
  }, [value, mode]);

  return (
    <>
      {showCustomAdder && <CustomAdder closeFunc={closeAdder} />}

      <main
        className={
          "w-full flex justify-center mb-[100px]" + " " + (blurBg && "blur-sm")
        }
      >
        <nav className="w-[500px] flex justify-between *:font-semibold *:text-light bg-dark">
          <section className="w-[30%] flex justify-evenly text-xl max-[520px]:text-[15px] *:py-2 border-r-[1px] border-dark">
            <p
              className={
                "hover:cursor-pointer hover:text-over" +
                " " +
                (mode === "time" ? "text-dark" : "")
              }
              onClick={() => {
                dispatch(CHANGE_MODE("time"));
                localStorage.setItem("typo-speed-mode", JSON.stringify("time"));
                if (value > 300) {
                  dispatch(CHANGE_VALUE(300));
                  localStorage.setItem("typo-speed-value", JSON.stringify(300));
                }
                dispatch(CHANGE_IS_CHANGED());
              }}
            >
              time
            </p>
            <p
              className={
                "hover:cursor-pointer hover:text-over" +
                " " +
                (mode === "words" ? "text-dark" : "")
              }
              onClick={() => {
                dispatch(CHANGE_MODE("words"));
                localStorage.setItem(
                  "typo-speed-mode",
                  JSON.stringify("words")
                );
                dispatch(CHANGE_IS_CHANGED());
              }}
            >
              words
            </p>
          </section>
          <section className="w-[70%] flex justify-evenly text-xl max-[520px]:text-[15px] *:p-2 ">
            <p
              className={
                "hover:cursor-pointer hover:text-over" +
                " " +
                (value === 15 ? "text-dark" : "")
              }
              onClick={() => {
                dispatch(CHANGE_VALUE(15));
                localStorage.setItem("typo-speed-value", JSON.stringify(15));
                dispatch(CHANGE_IS_CHANGED());
              }}
            >
              15
            </p>
            <p
              className={
                "hover:cursor-pointer hover:text-over" +
                " " +
                (value === 30 ? "text-dark" : "")
              }
              onClick={() => {
                dispatch(CHANGE_VALUE(30));
                localStorage.setItem("typo-speed-value", JSON.stringify(30));
                dispatch(CHANGE_IS_CHANGED());
              }}
            >
              30
            </p>
            <p
              className={
                "hover:cursor-pointer hover:text-over" +
                " " +
                (value === 45 ? "text-dark" : "")
              }
              onClick={() => {
                dispatch(CHANGE_VALUE(45));
                localStorage.setItem("typo-speed-value", JSON.stringify(45));
                dispatch(CHANGE_IS_CHANGED());
              }}
            >
              45
            </p>
            <p
              className={
                "hover:cursor-pointer hover:text-over" +
                " " +
                (value === 60 ? "text-dark" : "")
              }
              onClick={() => {
                dispatch(CHANGE_VALUE(60));
                localStorage.setItem("typo-speed-value", JSON.stringify(60));
                dispatch(CHANGE_IS_CHANGED());
              }}
            >
              60
            </p>
            <p
              className={
                "hover:cursor-pointer hover:text-over" +
                " " +
                (!(value === 15 || value === 30 || value === 45 || value === 60)
                  ? "text-dark"
                  : "")
              }
              onClick={() => {
                dispatch(ADD_BLUR());
                setShowCustomAdder(true);
                dispatch(CHANGE_IS_CHANGED());
              }}
            >
              custom
            </p>
          </section>
        </nav>
      </main>
    </>
  );
};

export default TestSetting;
