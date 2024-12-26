let countdownTime = 90; // 1 minute 30 seconds in seconds  
const progressBar = document.getElementById('progress-bar'); // Progress bar element  
const loadingText = document.getElementById('loading-text'); // Div for loading messages  

// Start the countdown  
const countdownInterval = setInterval(() => {  
    countdownTime--;  
    const percentage = Math.floor(((90 - countdownTime) / 90) * 100); // Calculate percentage  

    // Update the width of the progress bar  
    progressBar.style.width = percentage + '%';  
    progressBar.querySelector('#percentage').textContent = percentage + '%'; // Update percentage display  

    // Update loading text based on percentage  
    if (percentage <= 25) {  
        loadingText.innerHTML = "Creating your account...";  
    } else if (percentage > 25 && percentage < 50) {  
        loadingText.innerHTML = "We're working on creating your account!<br>Hang tight.";  
    } else if (percentage === 50) {  
        loadingText.innerHTML = "Halfway there!<br>Your account is being set up.";  
    } else if (percentage === 75) {  
        loadingText.innerHTML = "Almost done!<br>Finalizing your account setup.";  
    } else if (percentage === 90) {  
        loadingText.innerHTML = "Just a few seconds left!<br>Thank you for your patience.";  
    } else if (percentage >= 100) {  
        loadingText.innerHTML = "Hurray! Your account has been successfully created!<br>You can now sign in on the next page using the email address you provided during registration.";  

        // Remove the progress bar and percentage display  
        progressBarContainer.style.display = 'none';  

        // Redirect to the specified URL after 10 seconds  
        setTimeout(() => {  
            window.location.href = "https://stg.jira.evolent.com/servicedesk/customer/user/login?nokerberos&destination=portals";  
        }, 10000); // Redirect after 10 seconds  
    }  

    if (countdownTime <= 0) {  
        clearInterval(countdownInterval);  
    }  
}, 1000);
