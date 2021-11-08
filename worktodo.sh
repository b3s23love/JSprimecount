while read first_line < worktodo.txt
do
    # Skip empty lines and comments
    if [ "$first_line" != "" ] && [ ${first_line:0:1} != "#" ]
    then
        node main.js $first_line

        # Check if JSprimecount exited successfully
        if [ $? -ne 0 ]
        then
            echo ""
            echo "Error in worktodo.sh:"
            echo "The following command failed: node main.js $first_line"
            exit 1
        fi
    fi

    # delete first line from worktodo.txt
    tail -n +2 worktodo.txt > .tmp_worktodo.txt
    mv -f .tmp_worktodo.txt worktodo.txt
done