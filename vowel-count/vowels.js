const vowelCount = (str) => {
    let count = 0;

    for (const v of str){
        if (v.match(/[aeiou]/g)) {
            count++
        }
    }

    console.log(count);
}

vowelCount("abracadabra");