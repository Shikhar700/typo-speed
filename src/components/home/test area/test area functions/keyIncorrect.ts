export const keyIncorrect = (
  wordIndex: number,
  letterIndex: number,
  extra: boolean
) => {
  if (extra) {
    document
      .getElementById(`${wordIndex}${letterIndex}`)
      ?.classList.add("text-extra");
  } else {
    document
      .getElementById(`${wordIndex}${letterIndex}`)
      ?.classList.add("text-error");
  }
};
