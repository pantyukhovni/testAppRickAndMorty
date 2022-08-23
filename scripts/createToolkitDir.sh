cd ../app/store
echo "Enter toolkit directory name : "
read directoryName
mkdir $directoryName
cd $directoryName

dirs="slice.ts actions.ts types.ts selectors.ts"
for dir in $dirs
    do
        fileName="${dir}"
        touch $fileName
    done

echo "Created $directoryName"

cd ../../
