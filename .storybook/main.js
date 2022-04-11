module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
 
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}