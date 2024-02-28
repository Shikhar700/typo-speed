export const checkValidKey = (key: string) => {
  if (key.length === 1 || key === "Backspace") {
    return true;
  } else {
    return false;
  }
};
