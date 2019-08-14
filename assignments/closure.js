// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function steak(){
  const right = "the right way!";
  console.log(`Med-rare is ${right}`);

  function primeRib(){
    const wrong = "the wrong way!";
    console.log(`Ketchup on Prime Rib and Steak is ${wrong} but seasoning is ${right}`);

      function tasty(){
        const grilled= "Put both on the Grill"
        console.log( `${grilled} to make both ${right} and dont put ketchup on your steak for ${wrong}`);
      }
      tasty()
  }
  primeRib()
}
steak()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
