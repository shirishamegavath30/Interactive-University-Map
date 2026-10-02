// ==========================================
// SNIST Interactive University Navigation
// Map Module
// ==========================================

const markers =
    document.querySelectorAll(".marker");


// ==========================================
// CLEAR ACTIVE MARKERS
// ==========================================

function clearMarkers() {

    markers.forEach(function (marker) {

        marker.classList.remove(
            "activeMarker"
        );

    });

}


// ==========================================
// ACTIVATE MARKER
// ==========================================

function activateMarker(id) {

    clearMarkers();

    const marker =
        document.getElementById(id);


    if (marker) {

        marker.classList.add(
            "activeMarker"
        );

        // Move map location indicator

        const left =
            marker.style.left ||
            getComputedStyle(marker).left;

        const top =
            marker.style.top ||
            getComputedStyle(marker).top;


        if (currentLocation) {

            currentLocation.style.left =
                left;

            currentLocation.style.top =
                top;

        }

    }

}