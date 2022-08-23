if [ -d "../.git" ]
  then
    source "./scripts/createHuskyConfig.sh"
  else
    git init
    source "./scripts/createHuskyConfig.sh"
fi
