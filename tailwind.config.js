/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        light: "var(--text-light)",
        dark: "var(--text-dark)",
        over: "var(--text-over)",
        lightTest: "var(--text-light-test)",
        darkTest: "var(--text-dark-test)",
        overBtn: "var(--text-over-button)",
        btnOver: "var(--text-btn-over)",
        btnSelectOver: "var(--text-btn-select-over)",
        caret: "var(--caret-color)",
        error: "var(--text-error)",
        extra: "var(--text-extra)",
      },
      backgroundColor: {
        light: "var(--background-light)",
        dark: "var(--background-dark)",
        btn: "var(--background-btn)",
        btnOver: "var(--background-btn-over)",
        btnSelect: "var(--background-btn-select)",
        wrong: "var(--text-dark-test)",
      },
      borderColor: {
        dark: "var(--border-color)",
        show: "var(--background-dark)",
      },
      textDecorationColor: {
        error: "var(--text-error)",
      },
      fontFamily: {
        roboto: "var(--font-style)",
      },
    },
  },
  plugins: [],
};
