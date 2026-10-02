// ==========================================
// SNIST Navigation Route Module
// ==========================================

const routePath = document.getElementById("routePath");

const currentLocation =
    document.getElementById("currentLocation");


// ==========================================
// BUILDING LOCATIONS
// ==========================================

const buildingLocations = {

    "ECE Block": {
        x: 36,
        y: 48
    },

    "CSE Block": {
        x: 63,
        y: 47
    },

    "First Year Block": {
        x: 75,
        y: 52
    },

    "Biotech Block": {
        x: 73,
        y: 69
    }

};


// ==========================================
// DRAW ROUTE
// ==========================================

function drawRoute(block) {

    const destination =
        buildingLocations[block];


    if (!destination) {
        return;
    }


    // Route starts at Main Gate

    const points = `
        47,90
        47,78
        50,70
        ${destination.x},70
        ${destination.x},${destination.y}
    `;


    routePath.setAttribute(
        "points",
        points
    );


    // Restart animation

    routePath.classList.remove(
        "routeAnimation"
    );


    void routePath.offsetWidth;


    routePath.classList.add(
        "routeAnimation"
    );


    // Move current location

    moveUser(destination);


    // Highlight destination

    highlightMarker(block);


    // Calculate distance

    calculateDistance(destination);

}


// ==========================================
// MOVE CURRENT LOCATION
// ==========================================

function moveUser(destination) {

    currentLocation.style.left =
        destination.x + "%";

    currentLocation.style.top =
        destination.y + "%";

}


// ==========================================
// HIGHLIGHT DESTINATION
// ==========================================

function highlightMarker(block) {

    document
        .querySelectorAll(".marker")
        .forEach(marker => {

            marker.classList.remove(
                "activeMarker"
            );

        });


    if (block === "ECE Block") {

        document
            .getElementById("ece")
            .classList.add("activeMarker");

    }

    else if (block === "CSE Block") {

        document
            .getElementById("cse")
            .classList.add("activeMarker");

    }

    else if (block === "First Year Block") {

        document
            .getElementById("firstyear")
            .classList.add("activeMarker");

    }

    else if (block === "Biotech Block") {

        document
            .getElementById("biotech")
            .classList.add("activeMarker");

    }

}


// ==========================================
// DISTANCE CALCULATION
// ==========================================

function calculateDistance(destination) {

    const start = {
        x: 47,
        y: 90
    };


    const dx =
        destination.x - start.x;

    const dy =
        destination.y - start.y;


    const mapDistance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const meters =
        Math.round(
            mapDistance * 8
        );


    const walkingTime =
        Math.max(
            1,
            Math.ceil(
                meters / 80
            )
        );


    distance.textContent =
        meters + " m";


    time.textContent =
        walkingTime + " min";


    // Update right panel

    const rightDistance =
        document.getElementById(
            "rightDistance"
        );

    const rightTime =
        document.getElementById(
            "rightTime"
        );


    if (rightDistance) {

        rightDistance.textContent =
            meters + " meters";

    }


    if (rightTime) {

        rightTime.textContent =
            walkingTime + " min";

    }

}