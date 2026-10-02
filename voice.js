// ==========================================
// SNIST Interactive University Navigation
// Voice Search & Voice Guidance
// ==========================================

const voiceBtn = document.getElementById("voiceBtn");


// ==========================================
// CHECK SPEECH RECOGNITION SUPPORT
// ==========================================

if (
    "webkitSpeechRecognition" in window ||
    "SpeechRecognition" in window
) {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    const recognition =
        new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    // ==========================================
    // START VOICE SEARCH
    // ==========================================

    voiceBtn.addEventListener("click", function () {

        try {

            recognition.start();

            voiceBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i>';
        }

        catch (error) {

            console.log(error);

        }

    });


    // ==========================================
    // VOICE RESULT
    // ==========================================

    recognition.onresult = function (event) {

        const text =
            event.results[0][0].transcript;


        console.log(
            "Voice input:",
            text
        );


        // Find four digit room number

        const room =
            text.match(/\d{4}/);


        if (room) {

            searchInput.value =
                room[0];


            searchRoom();


            speakDirections(
                room[0]
            );

        }

        else {

            alert(
                "Please say a valid room number."
            );

        }

    };


    // ==========================================
    // VOICE SEARCH END
    // ==========================================

    recognition.onend = function () {

        voiceBtn.innerHTML =
            '<i class="fa-solid fa-microphone"></i>';

    };


    // ==========================================
    // ERROR
    // ==========================================

    recognition.onerror = function (event) {

        console.log(
            "Voice recognition error:",
            event.error
        );


        voiceBtn.innerHTML =
            '<i class="fa-solid fa-microphone"></i>';


        if (event.error === "not-allowed") {

            alert(
                "Microphone permission was denied."
            );

        }

    };

}


// ==========================================
// BROWSER DOES NOT SUPPORT VOICE SEARCH
// ==========================================

else {

    voiceBtn.addEventListener(
        "click",
        function () {

            alert(
                "Voice search is not supported in this browser."
            );

        }
    );

}


// ==========================================
// SPEAK DIRECTIONS
// ==========================================

function speakDirections(roomNo) {

    if (!campusRooms[roomNo]) {

        return;

    }


    // Stop previous speech

    window.speechSynthesis.cancel();


    const room =
        campusRooms[roomNo];


    const message =
        `Navigating to Room ${room.room}. ` +
        `Proceed to ${room.block}. ` +
        `Go to the ${room.floor}. ` +
        `Your destination is Room ${room.room}.`;


    const speech =
        new SpeechSynthesisUtterance(
            message
        );


    speech.lang = "en-IN";

    speech.rate = 0.9;

    speech.pitch = 1;


    window.speechSynthesis.speak(
        speech
    );

}