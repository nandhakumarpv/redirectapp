let countdownTime = 120; // 2 minutes in seconds  
const progressBar = document.getElementById('progress-bar'); // Progress bar element  
const percentageDisplay = document.getElementById('percentage'); // Percentage text  
const loadingText = document.getElementById('loading-text');  
const progressBarContainer = document.querySelector('.progress-bar-container'); // Progress bar container  

// Start the countdown  
const countdownInterval = setInterval(() => {  
    countdownTime--;  
    const percentage = Math.floor(((120 - countdownTime) / 120) * 100); // Calculate percentage  

    // Update the width of the progress bar  
    progressBar.style.width = percentage + '%';  
    percentageDisplay.textContent = percentage + '%'; // Update percentage display  

    // Update loading text based on percentage  
    if (percentage === 25) {  
        loadingText.textContent = "We're getting started! Please hold on.";  
    } else if (percentage === 50) {  
        loadingText.textContent = "Halfway there! Your account is being set up.";  
    } else if (percentage === 75) {  
        loadingText.textContent = "Almost done! Finalizing your account setup.";  
    } else if (percentage === 90) {  
        loadingText.textContent = "Just a few seconds left! Thank you for your patience.";  
    }  

    if (countdownTime <= 0) {  
        clearInterval(countdownInterval);  
        
        // Remove the progress bar and percentage display  
        progressBarContainer.style.display = 'none';   
        percentageDisplay.textContent = ""; // Clear percentage display  

        // Clear previous loading text and display the final confirmation message  
        loadingText.textContent = "Hurray! Your account has been successfully created! You can now sign in on the next page using the email address you provided during registration.";  

        // Redirect to the specified URL after displaying the final message for 10 seconds  
        setTimeout(() => {  
            window.location.href = "https://stg.jira.evolent.com/servicedesk/customer/user/login?nokerberos&destination=portals";  
        }, 10000); // Redirect after 10 seconds  
    }  
}, 1000);
