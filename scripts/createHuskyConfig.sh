rm -rf .husky
npx husky install
npx husky add .husky/pre-commit "yarn pretty-quick --staged && npx lint-staged && yarn tsc"