let input = "Adarsh"
// function string_reverse(str) 
// {
//     return str.split("").reverse().join("");
// }

// function reverseAfterDelay(inputString) {
//     setTimeout(function () {
//       var reversedString = string_reverse(inputString);
//       console.log(string_reverse);
//     }, 2000); 
//   }

//   reverseAfterDelay(input);
setTimeout(()=>{

    //Converting String Into Array
    input = input.split("").reverse().join("");
    
    console.log(input);

},2000);