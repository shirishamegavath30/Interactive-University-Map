const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const roomNo = document.getElementById("roomNo");
const blockName = document.getElementById("blockName");
const floorName = document.getElementById("floorName");
const distance = document.getElementById("distance");
const time = document.getElementById("time");
const roomInfo = document.getElementById("roomInfo");

searchBtn.addEventListener("click", searchRoom);

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchRoom();
    }
});

function searchRoom() {

    const room = searchInput.value.trim();

    if (room === "") {
        alert("Please enter a room number.");
        return;
    }

    const data = campusRooms[room];

    if (!data) {
        roomInfo.innerHTML = `
            <h2>Room Not Found</h2>
            <p>Please enter a valid room number.</p>
        `;

        roomNo.textContent = "-";
        blockName.textContent = "-";
        floorName.textContent = "-";
        distance.textContent = "-";
        time.textContent = "-";

        return;
    }

    // LEFT PANEL
    roomNo.textContent = data.room;
    blockName.textContent = data.block;
    floorName.textContent = data.floor;

    // RIGHT PANEL
    displayRoomDetails(room);

    // DRAW ROUTE
    drawRoute(data.block);
}