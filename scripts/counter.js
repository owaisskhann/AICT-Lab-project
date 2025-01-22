// Wait until the entire DOM content is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {

  // Select all elements with the class 'counter-title' (these are the counters to be animated)
  const counters = document.querySelectorAll('.counter-title');

  // Loop through each counter element and apply the count-up functionality
  counters.forEach(function (counter) {
    // Get the target value from the data-target attribute (which is stored as a string, so we convert it to a number using '+')
    const target = +counter.getAttribute('data-target');

    // Function to start and control the count-up process
    function updateCount() {
      // Initial count starts from 0
      let count = 0;

      // Define how much to increment the counter by. This is a small increment based on the target divided by 100
      const increment = Math.ceil(target / 100); // round up the increment to make sure the count-up is smooth

      // Inner function to increase the count progressively
      function countUp() {
        if (count < target) { // Continue if the current count is less than the target
          count += increment; // Increment the counter by the defined increment
          if (count > target) count = target; // Prevent the count from exceeding the target value
          counter.innerText = count; // Update the counter text with the current count
          setTimeout(countUp, 50); // Call countUp again after 50ms for a smooth animation
        } else {
          counter.innerText = target; // Once the target is reached, set the counter text to the target value
          setTimeout(updateCount, 1000); // After a 1-second delay, start the count-up process again (to loop the counter animation)
        }
      }

      countUp(); // Start the counting process
    }

    // Start the counting animation for this specific counter
    updateCount();
  });
});
