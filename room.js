// ==========================================
// SNIST Interactive University Navigation
// Room Module
// ==========================================


function getRoomDetails(roomNumber) {

    return campusRooms[roomNumber] || null;

}


// ==========================================
// DISPLAY ROOM DETAILS
// ==========================================

function displayRoomDetails(roomNumber) {

    const room =
        getRoomDetails(roomNumber);


    if (!room) {

        roomInfo.innerHTML = `
            <h3>Room Not Found</h3>
            <p>Please enter a valid room number.</p>
        `;

        return false;

    }


    roomInfo.innerHTML = `

        <div class="welcomeIcon">
            <i class="fa-solid fa-door-open"></i>
        </div>

        <h2>Room ${room.room}</h2>

        <hr>

        <p>
            <b>Block:</b>
            ${room.block}
        </p>

        <p>
            <b>Floor:</b>
            ${room.floor}
        </p>

        <p>
            <b>Distance:</b>
            <span id="rightDistance">
                Calculating...
            </span>
        </p>

        <p>
            <b>Walking Time:</b>
            <span id="rightTime">
                Calculating...
            </span>
        </p>

    `;


    return room;

}


// ==========================================
// GENERATE DIRECTIONS
// ==========================================

function generateDirections(room) {

    let steps = "";


    steps +=
        "<li>Start from the <b>Main Gate</b>.</li>";


    steps +=
        "<li>Follow the main campus road.</li>";


    if (room.block === "ECE Block") {

        steps +=
            "<li>Turn left towards the <b>ECE Block</b>.</li>";

    }

    else if (room.block === "CSE Block") {

        steps +=
            "<li>Turn right towards the <b>CSE Block</b>.</li>";

    }

    else if (room.block === "First Year Block") {

        steps +=
            "<li>Continue towards the <b>First Year Block</b>.</li>";

    }

    else if (room.block === "Biotech Block") {

        steps +=
            "<li>Continue towards the <b>Biotech Block</b>.</li>";

    }


    steps +=
        `<li>Enter the <b>${room.block}</b>.</li>`;


    steps +=
        `<li>Go to the <b>${room.floor}</b>.</li>`;


    steps +=
        `<li>Your destination is <b>Room ${room.room}</b>.</li>`;


    return steps;

}