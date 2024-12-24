let countdownTime = 90; // 1 minute 30 seconds in seconds  
const percentageDisplay = document.getElementById('percentage'); // Percentage text  
const loadingText = document.getElementById('loading-text'); // Div for loading messages  

const countdownInterval = setInterval(() => {  
    countdownTime--;  
    const percentage = Math.floor(((90 - countdownTime) / 90) * 100); // Calculate percentage  

    // Update percentage text in spinner  
    percentageDisplay.textContent = percentage + '%';  

    // Update loading text based on percentage  
    if (percentage <= 25) {  
        loadingText.textContent = "Creating your account...";  
    } else if (percentage > 25 && percentage < 50) {  
        loadingText.textContent = "We're working on creating your account! Hang tight.";  
    } else if (percentage === 50) {  
        loadingText.textContent = "Halfway there! Your account is being set up.";  
    } else if (percentage === 75) {  
        loadingText.textContent = "Almost done! Finalizing your account setup.";  
    } else if (percentage >= 90) {  
        loadingText.textContent = "Just a few seconds left! Thank you for your patience.";  
    }   

    if (countdownTime <= 0) {  
        clearInterval(countdownInterval);  
        loadingText.textContent = "Hurray! Your account has been successfully created!";  
        
        // Redirect after a short delay  
        setTimeout(() => {  
            window.location.href = "https://stg.jira.evolent.com/servicedesk/customer/user/login?nokerberos&destination=portals";  
        }, 3000); // 3 seconds delay for demonstration  
    }  
}, 1000);
