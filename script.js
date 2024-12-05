let countdownTime = 120; // 2 minutes in seconds  
const countdownDisplay = document.getElementById('time');  
const loadingText = document.getElementById('loading-text');  

// Start the countdown  
const countdownInterval = setInterval(() => {  
    countdownTime--;  
    countdownDisplay.textContent = countdownTime;  

    if (countdownTime === 90) {  
        loadingText.textContent = "We're almost there! Just a little longer.";  
    } else if (countdownTime === 60) {  
        loadingText.textContent = "Setting up your account. Thank you for your patience!";  
    } else if (countdownTime === 30) {  
        loadingText.textContent = "Finalizing your account setup. Hang tight!";  
    } else if (countdownTime === 10) {  
        loadingText.textContent = "Almost done! Just a few seconds left.";  
    }  

    if (countdownTime <= 0) {  
        clearInterval(countdownInterval);  
        loadingText.textContent = "Your account has been successfully created!";  
        countdownDisplay.textContent = "Done!";  
        
        // Redirect to the specified URL after a brief pause  
        setTimeout(() => {  
            window.location.href = "https://stg.jira.evolent.com/servicedesk/customer/user/login?nokerberos&destination=portals";  
        }, 3000); // Redirect after 3 seconds  
    }  
}, 1000);