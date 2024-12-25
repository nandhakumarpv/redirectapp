let countdownTime = 90; // 1 minute 30 seconds in seconds
const progressBar = document.getElementById('progress-bar');
const percentageDisplay = document.getElementById('percentage');
const loadingText = document.getElementById('loading-text');
const progressBarContainer = document.querySelector('.progress-bar-container');

const totalTime = 90;  // Store total countdown time for percentage calculation

// Start the countdown
const countdownInterval = setInterval(() => {
    countdownTime--;
    const percentage = Math.floor(((totalTime - countdownTime) / totalTime) * 100); // Calculate percentage

    // Update the width of the progress bar
    progressBar.style.width = percentage + '%';
    percentageDisplay.textContent = percentage + '%'; // Update percentage display

    // Update loading text based on percentage
    if (percentage <= 25) {
        loadingText.textContent = "Creating your account...";
    } else if (percentage > 25 && percentage < 50) {
        loadingText.textContent = "We're working on creating your account! Hang tight.";
    } else if (percentage === 50) {
        loadingText.textContent = "Halfway there! Your account is being set up.";
    } else if (percentage === 75) {
        loadingText.textContent = "Almost done! Finalizing your account setup.";
    } else if (percentage === 90) {
        loadingText.textContent = "Just a few seconds left! Thank you for your patience.";
    } else if (percentage >= 100) {
       loadingText.textContent = "Hurray! Your account has been successfully created!\nYou can now sign in on the next page using the email address you provided during registration.";
        
        // Remove the progress bar and percentage display
        progressBarContainer.style.display = 'none';
        percentageDisplay.textContent = ""; // Clear percentage

        // Redirect to the specified URL after 10 seconds
        setTimeout(() => {
            window.location.href = "https://stg.jira.evolent.com/servicedesk/customer/user/login?nokerberos&destination=portals";
        }, 10000); // Redirect after 10 seconds
    }

    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
    }
}, 1000);
