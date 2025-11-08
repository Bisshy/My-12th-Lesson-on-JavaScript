// Looping A Triangle

// for (let number = "#"; number.length < 8; number+="#"){
   
//     console.log(number);
// }

// for (let digit=1; digit <=100; digit++){
//     let output="";
//     if(digit % 3 === 0) output+= "Fizz";
//     if(digit % 5 ===0)  output+= "Buzz";
        
//     console.log(output||digit);
// }
// let size= 8;
// let build ="";
//  for (let y = 1; y< 8; y++ ){

//     for (let x = 1; x<8; x++){

//         if ((x + y)%2==0){
//             build +=" ";

//         }else{
//             build+="#";
//         }
//     }
//     build +="\n";
//  }
//  console.log(build);

// 

// let add= 0;
// let N = Number(prompt("Enter the vallue of N: "), 10);

// if(!Number.isNaN(N) && N > 0){
//      for(let i=1; i<N; i++ ){
//         add +=i
//      }
//      alert("The sum of the first " + N + " Natural number is " + add)
// }else{

//     alert("enter a valid Number");
// }


// let num = Number(prompt("Enter the value of Num: "),10);
// let v=num;
// let factorial = 1;
// if (!Number.isNaN(num)&& num>0){
//     while(v>1){
//         factorial*=v;
//         v--;
//     }
//     alert( "The factorial of " + num + " is " + factorial);

// }else{
//     alert("Enter a valid number")
// }

// let a =0;
// let b =1;
// let nextTerm;
// let count = 1;

// let num = Number(prompt("Enter the value of Num: "),10);

// if(!Number.isNaN(num) && num>0){
//     console.log("Fibonacii is: ");
//     console.log(a);
//     while(count<num){
      
//         console.log(b)
//         nextTerm = a + b;
//         a=b;
//         b= nextTerm;
//         count++;
//     }
    
// }else{
//     alert("Enter a valid number")
// }
// let value = Number(prompt("Entera value to be reversed "),10);
//     if(!Number.isNaN(value) && value> 0){
//         let originalNumber = value;
//         let reversed = 0;

//             while(originalNumber !==0){
//                 let digit = originalNumber % 10;
//                 console.log(digit);
//                 reversed = reversed*10 +digit;
//                 console.log(reversed);
//                 originalNumber=Math.floor(originalNumber/10);
//                 console.log(originalNumber);
//             }
//             console.log("The reverse number is: " + reversed)
//     }else{
//         alert("Enter a valid number")

//     }
