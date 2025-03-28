const locationInput = document.getElementById("locationInput");
const addLocationButton = document.getElementById("addLocationButton");
const locationsList = document.getElementById("locationsList");

let locationsArray = [];
let map;
let markers = [];

// Add location button click event
addLocationButton.addEventListener("click", addLocation);

function addLocation() {
    const location = locationInput.value.trim().toLowerCase(); // Convert to lowercase
    if (location !== "") {
        if (!locationsArray.includes(location)) {
            locationsArray.push(location);
            locationInput.value = "";
            updateLocationsList();
            updateMap();
        } else {
            alert("Location already added.");
        }
    } else {
        alert("Please enter a valid location.");
    }
}

// Update the list of added locations
function updateLocationsList() {
    locationsList.innerHTML = "";
    locationsArray.forEach((location) => {
        const li = document.createElement("li");
        li.textContent = capitalize(location); // Capitalize location name
        locationsList.appendChild(li);
    });
}

// Capitalize the first letter of the location name
function capitalize(location) {
    return location.charAt(0).toUpperCase() + location.slice(1);
}

// Update the map with new markers
function updateMap() {
    if (!map) {
        // Initialize map only once
        map = L.map("map").setView([12.8797, 121.7740], 5); // Default to the Philippines
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);
    }

    // Clear existing markers before adding new ones
    clearMarkers();

    locationsArray.forEach((location) => {
        const coordinates = getCoordinatesForLocation(location);
        if (coordinates) {
            const marker = L.marker(coordinates).addTo(map).bindPopup(capitalize(location));
            markers.push(marker);
        } else {
            alert(`Location not found: ${location}`);
        }
    });

    // Ensure the map resizes correctly
    setTimeout(() => {
        map.invalidateSize();
    }, 500);

    }

    // Clear existing markers before adding new ones
    clearMarkers();

    locationsArray.forEach((location) => {
        const coordinates = getCoordinatesForLocation(location);
        if (coordinates) {
            const marker = L.marker(coordinates).addTo(map).bindPopup(capitalize(location));
            markers.push(marker);
        } else {
            alert(`Location not found: ${location}`);
        }
    });

    // Zoom to the last added marker
    if (locationsArray.length > 0) {
        const lastLocation = locationsArray[locationsArray.length - 1];
        const lastCoordinates = getCoordinatesForLocation(lastLocation);
        if (lastCoordinates) {
            map.setView(lastCoordinates, 6);
        }
    }


// Clear all markers from the map
function clearMarkers() {
    markers.forEach((marker) => {
        map.removeLayer(marker);
    });
    markers = [];
}

// Get coordinates for a location
function getCoordinatesForLocation(location) {
    const locationCoordinates = {
        "philippines": [13.41, 122.56],
        "taiwan": [23.697809, 120.960518],
        "manila": [14.599512, 120.984222],
        "iloilo": [10.720150, 122.562103],
        "cebu": [10.3157, 123.8854],
        "davao": [7.1907, 125.4553],
    };
    return locationCoordinates[location] || null; // Return null if location is not found
}
function updateMap() {
    if (!map) {
        // Initialize map only once
        map = L.map("map").setView([12.8797, 121.7740], 5); // Default to the Philippines
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);
    }

    // Clear existing markers before adding new ones
    clearMarkers();
    
    locationsArray.forEach((location) => {
        const coordinates = getCoordinatesForLocation(location);
        if (coordinates) {
            const marker = L.marker(coordinates).addTo(map).bindPopup(
                location.charAt(0).toUpperCase() + location.slice(1)
            );
            markers.push(marker);
        } else {
            alert(`Location not found: ${location}`);
        }
    });
}
