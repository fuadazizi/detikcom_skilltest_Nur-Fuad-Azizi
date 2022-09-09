function closeAd() {
    // this function will close the ad banner popup when the button CLOSE AD clicked
    document.getElementById("popup-container").style.display = "none";
}

// Set timeout to automatically close banner ad after 30 seconds
const timeoutCloseAd = setTimeout(closeAd,30000);