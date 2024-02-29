import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CHANGE_VALUE } from "../../redux/slices/test value/TestValueSlice";
import { REMOVE_BLUR } from "../../redux/slices/blur bg/BlurBgSlice";
import { CHANGE_IS_CHANGED } from "../../redux/slices/setting changed/SettingChangedSlice";

type CustomAdderPropsType = {
  closeFunc: () => void;
};

const CustomAdder = (props: CustomAdderPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const mode = useAppSelector((state) => state.testMode.mode);
  const value = useAppSelector((state) => state.testValue.value);

  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState<string>(value.toLocaleString());

  useEffect(() => {
    inputRef.current?.select();
    inputRef.current?.focus();
  }, []);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checkInputValue(event.target.value) || event.target.value === "") {
      setInputValue(event.target.value);
    } else {
      document.getElementById("inputVal")?.classList.remove("bg-dark");
      document.getElementById("inputVal")?.classList.add("bg-wrong");
      setTimeout(() => {
        document.getElementById("inputVal")?.classList.remove("bg-wrong");
        document.getElementById("inputVal")?.classList.add("bg-dark");
      }, 100);
    }
  };

  const checkInputValue = (checkValue: string) => {
    let val = Number(checkValue);
    if (val / val === 1) {
      if (mode === "time") {
        if (val > 0 && val < 301) {
          return true;
        } else {
          return false;
        }
      } else {
        if (val > 0 && val < 1001) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue === "") {
      document.getElementById("inputVal")?.classList.remove("bg-dark");
      document.getElementById("inputVal")?.classList.add("bg-wrong");
      setTimeout(() => {
        document.getElementById("inputVal")?.classList.remove("bg-wrong");
        document.getElementById("inputVal")?.classList.add("bg-dark");
      }, 100);
      inputRef.current?.focus();
    } else {
      dispatch(CHANGE_VALUE(Number(inputValue)));
      localStorage.setItem(
        "typo-speed-value",
        JSON.stringify(Number(inputValue))
      );
      dispatch(REMOVE_BLUR());
      dispatch(CHANGE_IS_CHANGED());
      props.closeFunc();
    }
  };

  return (
    <main
      onClick={(event) => {
        let dom = event.target as HTMLElement;
        if (dom.tagName === "MAIN") {
          dispatch(REMOVE_BLUR());
          dispatch(CHANGE_IS_CHANGED());
          props.closeFunc();
        }
      }}
      className="w-full h-full top-0 fixed z-10 flex justify-center items-center bg-black bg-opacity-50"
    >
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center rounded-md w-[450px] py-20  bg-light text-over"
      >
        <h1 className="w-[70%] text-center  text-3xl mb-3">
          {mode === "time" ? "Test duration" : "Word amount"}
        </h1>
        <input
          className="w-[70%] text-center outline-none py-2 mb-2 rounded-md selection:bg-wrong selection:text-btnSelectOver bg-dark"
          type="text"
          id="inputVal"
          ref={inputRef}
          autoComplete="off"
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <p className="mb-2">
          {mode === "time"
            ? "Enter a numeric value between 1-300"
            : "Enter a numeric value between 1-1000"}
        </p>
        <button
          className="w-[40%] rounded-md py-1 bg-btn hover:bg-btnSelect hover:text-btnSelectOver"
          type="submit"
        >
          ok
        </button>
      </form>
    </main>
  );
};

export default CustomAdder;
