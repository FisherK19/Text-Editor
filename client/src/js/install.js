const installButton = document.getElementById('buttonInstall');

// Logic for handling Progressive Web App (PWA) installation
// Add an event listener for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
     // Store the event for later use
     window.deferredPrompt = event;

     // Display the install button by removing the 'hidden' class
     installButton.classList.remove('hidden');
});

// Implement a click event handler for the install button
installButton.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }
  
    // Trigger the installation prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt to null as it can only be used once
    window.deferredPrompt = null;
    
    // Hide the install button
    installButton.classList.add('hidden');
});

// Add a handler for the 'appinstalled' event
window.addEventListener('appinstalled', (event) => {
    // Clear the deferred prompt as the app is installed
    window.deferredPrompt = null;
});
