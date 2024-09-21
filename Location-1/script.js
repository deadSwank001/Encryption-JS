document.getElementById("locationButton").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Format the Google Maps URL
        const googleMapsUrl = `https://www.google.com/maps/@${latitude},${longitude},15z`;

        // Display coordinates
        const coordinates = `Latitude: ${latitude}, Longitude: ${longitude}`;
        document.getElementById("coordinates").innerText = coordinates;

        // Generate QR code linking to Google Maps
        $("#qrcode").empty(); // Clear any previous QR code
        $("#qrcode").qrcode({
          text: googleMapsUrl, // Encode the Google Maps URL
          width: 128,
          height: 128,
        });

        // Show coordinates and QR code
        document.getElementById("coordinatesBox").classList.remove("hidden");
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location.");
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});
