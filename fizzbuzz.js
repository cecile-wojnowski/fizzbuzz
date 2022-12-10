/* Display numbers between 1 and N by following the rules:

if number can be divided by 3: display Fizz ;
if number can be divided by 5: display Buzz ;
if number can be divided by 3 AND 5 : display FizzBuzz ;
else: display the number. 

*/

function fizzbuzz(maxValue) {
  for (let i = 1; i <= maxValue; i += 1) {
    const value =
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i;

    console.log(value);
  }
}
fizzbuzz(100);
