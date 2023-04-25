module.exports = {
  root: "./",
  base: "",
  build: {
    outDir: "dist",
  },
  publicDir: "assets",
  server: {
    fs: {
      allow: [".."],
    },
  },
};
