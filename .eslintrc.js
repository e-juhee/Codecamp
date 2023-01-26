module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/consistent-type-imports": "off", // type을 import할 때는 앞에 type을 붙여야 하고, type과 기타 기능은 import문을 따로 작성
    "@typescript-eslint/no-misused-promises": "off", // HOF를 배우고 나서 wrapAsync 함수로 해결 가능(그 전까지는 off 할 것)
  },
};
