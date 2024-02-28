export const keyClear = (wordIndex: number, letterIndex: number) => {
  document
    .getElementById(`${wordIndex}${letterIndex}`)
    ?.classList.remove("text-darkTest");
  document
    .getElementById(`${wordIndex}${letterIndex}`)
    ?.classList.remove("text-error");
};
