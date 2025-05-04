// tailwind.config.js
module.exports = {
  content: ["./*.html"], // ← 폴더 안의 모든 HTML 파일 포함
  theme: {
    extend: {
      colors: {
        primary: "#ff6a00",
        dark: "#0d0d0d",
        graydark: "#1a1a1a",
      },
    },
  },
  plugins: [],
}
