function removeDuplicates(arr){
    let nonDuplicates = [];
    for(let i = 0; i<arr.length; i++){
        if(nonDuplicates.indexOf(arr[i]) == -1){
            nonDuplicates.push(arr[i])
        }
    }
    return nonDuplicates;
};

const removeDuplicate = document.querySelector('button');
removeDuplicate.addEventListener('click',function(){
    const input = document.querySelector('input');
    const givinArr = input.value;
    const result = document.querySelector('h2');
    const resultValue = [];
    resultValue.push(removeDuplicates(givinArr));
    result.innerHTML = ">>> " + resultValue + " <<<";
})

