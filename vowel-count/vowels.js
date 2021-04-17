const vowelCount = (str) => {
    var count = 0;

    for (const v of str){
        if (v === "a" || 
            v === "e" || 
            v === "i" || 
            v === "o" || 
            v === "u"){
                count++
        }
    }

    console.log(count);
}

vowelCount("abracadabra");