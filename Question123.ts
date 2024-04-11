let myString = "CryptoCurrency";

let vowels = ["a","e","i","o","u"]

for(let i =0; i<myString.length;i++){
    let firstVowel = myString[i];
    if(vowels.includes(firstVowel)){
        console.log(`\nThe first vowel has been found "${firstVowel}" at index ${i}.\n`)
        break;     
    }
    
}