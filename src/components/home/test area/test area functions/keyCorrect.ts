export const keyCorrect = (wordIndex: number, letterIndex: number) => {
  document
    .getElementById(`${wordIndex}${letterIndex}`)
    ?.classList.add("text-darkTest");
};
