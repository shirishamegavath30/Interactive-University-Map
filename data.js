// ==========================================
// SNIST ROOM DATABASE
// ==========================================

const campusRooms = {};

function addRooms(block, floors, roomsPerFloor) {

    floors.forEach(function(floor) {

        for (let i = 1; i <= roomsPerFloor; i++) {

            const roomNumber = floor * 100 + i;

            campusRooms[roomNumber] = {

                room: roomNumber.toString(),

                block: block,

                floor:
                    floor % 10 === 1 ? "Ground Floor" :
                    floor % 10 === 2 ? "First Floor" :
                    floor % 10 === 3 ? "Second Floor" :
                    "Third Floor"
            };
        }
    });
}

// ECE BLOCK
addRooms("ECE Block", [11, 12, 13], 6);

// CSE BLOCK
addRooms("CSE Block", [21, 22, 23, 24], 8);

// FIRST YEAR BLOCK
addRooms("First Year Block", [41, 42, 43], 5);

// BIOTECH BLOCK
addRooms("Biotech Block", [81, 82, 83, 84], 7);