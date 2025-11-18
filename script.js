/*
 * FIZZBUZZ GAME - Custom Modal Implementation
 * 
 * Instead of using the browser's native prompt() modal (which blocks the UI and looks outdated),
 * I've created my custom input interface using HTML elements. This provides:
 * - Better user experience with a modern, styled interface
 * - Non-blocking UI (users can interact with the page while entering input)
 * - Full control over styling and behavior
 * - Better accessibility and mobile responsiveness
 * 
 * The HTML input field with type="number" automatically provides:
 * - Up/down arrow buttons (spinner controls) to increment/decrement the number
 * - Built-in number validation
 * - Keyboard support (arrow keys can also change the value)
 * - Mobile-friendly number keypad on touch devices
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get references to my custom modal elements (instead of using prompt())
    const numberInput = document.getElementById('numberInput'); // My custom input field
    const submitBtn = document.getElementById('submitBtn');      // My custom submit button
    const resultsDiv = document.getElementById('results');      // Container for displaying results
    const clearBtn = document.getElementById('clearBtn');        // Clear button inside input
    
    // Expandable/Collapsible explanation section
    const explanationToggle = document.getElementById('explanationToggle');
    const explanationWrapper = document.getElementById('explanationWrapper');
    
    // Start with explanation collapsed by default
    explanationToggle.classList.add('collapsed');
    explanationWrapper.classList.add('collapsed');
    
    // Toggle expand/collapse when header is clicked
    explanationToggle.addEventListener('click', function() {
        explanationToggle.classList.toggle('collapsed');
        explanationWrapper.classList.toggle('collapsed');
    });
    
    // Tab functionality for switching between "How to Play" and "Code Explanation"
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Handle tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent the click from bubbling up to the explanation header
            e.stopPropagation();
            
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Function to validate input and enable/disable the button
    // Disables button if value is invalid (less than 1 or greater than 10000)
    function validateInput() {
        const value = parseInt(numberInput.value);
        const isValid = !isNaN(value) && value >= 1 && value <= 10000;
        
        // Disable button if invalid, enable if valid
        submitBtn.disabled = !isValid;
    }
    
    // Function to update clear button visibility
    // Show clear button when input has value or results are visible
    function updateClearButton() {
        const hasValue = numberInput.value && numberInput.value.trim() !== '';
        const hasResults = resultsDiv.children.length > 0;
        clearBtn.style.display = (hasValue || hasResults) ? 'flex' : 'none';
    }
    
    // Clear button functionality - clears both input and results
    clearBtn.addEventListener('click', function() {
        numberInput.value = '';
        resultsDiv.innerHTML = '';
        validateInput(); // Update submit button state
        updateClearButton(); // Hide clear button
        numberInput.focus(); // Focus back on input
    });
    
    // Validate input in real-time as user types
    numberInput.addEventListener('input', function() {
        validateInput();
        updateClearButton();
    });
    numberInput.addEventListener('change', function() {
        validateInput();
        updateClearButton();
    });
    numberInput.addEventListener('keyup', function() {
        validateInput();
        updateClearButton();
    });
    
    // Initially disable the button (input is empty) and hide clear button
    validateInput();
    updateClearButton();

    // Handle form submission (replaces the prompt() functionality)
    // Instead of: let answer = parseInt(prompt("Please enter the number..."));
    // I use: numberInput.value to get the user's input from my custom modal
    submitBtn.addEventListener('click', function() {
        // Prevent submission if button is disabled
        if (submitBtn.disabled) {
            return;
        }
        
        // Get the value from my custom input field (instead of prompt's return value)
        const answer = parseInt(numberInput.value);

        // Validate input with maximum limit to prevent performance issues
        // Maximum limit: 10,000 to prevent browser from using too many resources
        if (isNaN(answer) || answer < 1) {
            alert('Please enter a valid number greater than 0');
            return;
        }
        
        if (answer > 10000) {
            alert('The maximum number is 10,000. Please enter a smaller number to prevent performance issues.');
            return;
        }

        // Clear previous results
        resultsDiv.innerHTML = '';
        
        // Update clear button visibility after clearing
        updateClearButton();

        // Generate FizzBuzz using iteration (looping through numbers)
        // 
        // ITERATION EXPLANATION:
        // The for loop iterates (repeats) through each number from 1 to the user's input.
        // Structure: for (initialization; condition; increment)
        // - let i = 1: Start counting from 1 (initialization)
        // - i <= answer: Continue as long as i is less than or equal to the answer (condition)
        // - i++: Increment i by 1 after each iteration (increment)
        //
        // WHY START AT 1?
        // FizzBuzz traditionally starts from 1, not 0, because:
        // - It's more intuitive for users (counting starts at 1)
        // - The game is about counting up, and I typically count 1, 2, 3...
        // - Starting at 0 would make 0 divisible by both 3 and 5, which doesn't make sense in this context
        for (let i = 1; i <= answer; i++) {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            // MODULUS OPERATOR (%) EXPLANATION:
            // The modulus operator returns the remainder after division.
            // Examples:
            // - 6 % 3 = 0 (6 divided by 3 equals 2 with remainder 0)
            // - 7 % 3 = 1 (7 divided by 3 equals 2 with remainder 1)
            // - 10 % 5 = 0 (10 divided by 5 equals 2 with remainder 0)
            //
            // When remainder is 0, it means the number is evenly divisible!
            // So i % 3 === 0 means "is i divisible by 3?"
            //
            // STRICT EQUALITY (===) EXPLANATION:
            // I use === (strict equality) instead of == (loose equality) because:
            // - === checks both value AND type (no type coercion)
            // - == can cause unexpected behavior due to type conversion
            // - === is more predictable and is considered best practice
            // Example: 0 === 0 is true, but 0 == "0" is also true (unwanted type conversion)
            //          With ===, 0 === "0" is false (correct - different types)
            
            // Check if divisible by BOTH 3 AND 5 (must check this first!)
            // If a number is divisible by both, it's also divisible by each individually
            if (i % 3 === 0 && i % 5 === 0) {
                resultItem.textContent = 'FizzBuzz';
                resultItem.classList.add('fizzbuzz');
            } 
            // Check if divisible by 3 only
            else if (i % 3 === 0) {
                resultItem.textContent = 'Fizz';
                resultItem.classList.add('fizz');
            } 
            // Check if divisible by 5 only
            else if (i % 5 === 0) {
                resultItem.textContent = 'Buzz';
                resultItem.classList.add('buzz');
            } 
            // If not divisible by 3 or 5, just display the number
            else {
                resultItem.textContent = i;
                resultItem.classList.add('number');
            }

            // Instead of console.log(), I append each result to the page
            // This creates a visual display instead of just console output
            resultsDiv.appendChild(resultItem);
        }
        
        // Show clear button after generating results
        updateClearButton();
    });

    // Allow Enter key to submit (enhances the custom modal experience)
    // Users can press Enter instead of clicking the button, just like native modals
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
});

