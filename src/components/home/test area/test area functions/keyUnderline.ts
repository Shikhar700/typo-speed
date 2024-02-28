export const keyUnderline = (wordIndex: number) => {
  document.getElementById(`word-${wordIndex}`)?.classList.add("underline");
  document
    .getElementById(`word-${wordIndex}`)
    ?.classList.add("underline-offset-[5px]");
  document
    .getElementById(`word-${wordIndex}`)
    ?.classList.add("decoration-error");
};
