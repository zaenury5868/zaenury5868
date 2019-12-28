function printWords(words){
    const vocals = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    var filtered_words = [];

    for (let i = 0; i < words.length; i++) {
        if (vocals.includes(words.charAt(i))){
            console.log(words.charAt(i))
        }
    }
    for (let i = 0; i < words.length; i++) {
        if (!vocals.includes(words.charAt(i))){
            console.log(words.charAt(i))
        }
    }
}

console.log(printWords("ARKADEMY"))