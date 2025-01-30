/*document.getElementById("loveButton").addEventListener("click", function() {
    alert("Baby, I hope you know I love you so much") ;
  alert("And I am super grateful to have you in my life") ;
  alert("With that being said...") ;
  alert("I have a super duper important question for you") ;
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    // Show the modal when the "loveButton" is clicked
    document.getElementById("loveButton").addEventListener("click", function() {
        // Set the message you want to display in the modal
        const message = "I love you too! ❤️";

        // Set the message in the modal's text content
        document.getElementById("showMessageText").textContent = message;

        // Show the modal by changing display to 'block'
        document.getElementById("showMessageModal").style.display = "block";
    });

    // Close the modal when the "closeButton" is clicked
    document.getElementById("closeButton").addEventListener("click", function() {
        // Hide the modal by setting display to 'none'
        document.getElementById("showMessageModal").style.display = "none";
    });
}); */

/*"Baby, I hope you know I love you so much",
        "And I am super grateful to have you in my life",
        "With that being said...",
        "I have a super duper important question for you"*/

        document.addEventListener('DOMContentLoaded', function () {
            // Messages to show (for your first modal)
            const messages = [
        "Baby, I hope you know I love you so much",
  "And I'm super grateful to have you in my life",
  "With that being said...",
  "I have a super duper important question for you"
            ];
            let messageIndex = 0;
        
            // Show the modal and messages when the "loveButton" is clicked
            document.getElementById("loveButton").addEventListener("click", function () {
                document.getElementById("showMessageModal").style.display = "block";
                document.getElementById("showMessageText").textContent = messages[messageIndex];
            });
        
            // Close the first modal and show the next message when the "closeButton" is clicked
            document.getElementById("closeButton").addEventListener("click", function () {
                messageIndex++;
        
                if (messageIndex < messages.length) {
                    document.getElementById("showMessageText").textContent = messages[messageIndex];
                } else {
                    document.getElementById("showMessageModal").style.display = "none";
                    messageIndex = 0; // Reset for next time
        
                    // Show the label and buttons after modal is closed
                    const label = document.getElementById("messageLabel");
                    label.style.display = "block";
        
                    const buttonContainer = document.getElementById("buttonContainer");
                    buttonContainer.style.display = "flex";
                }
            });
        
            // Handle the "No" button click to show the first virus warning modal
            document.getElementById("noButton").addEventListener("click", function () {
                document.getElementById("virusModal").style.display = "block";
            });
        
            // Close the first virus modal and show the follow-up message when "virusModalCloseButton" is clicked
            document.getElementById("virusModalCloseButton").addEventListener("click", function () {
                document.getElementById("virusModal").style.display = "none"; // Hide the first virus message modal
                document.getElementById("followUpMessage").style.display = "block"; // Show the follow-up message modal
            });
        
            // Close the follow-up message modal (same as the first modal close logic)
            document.getElementById("followUpMessageCloseButton").addEventListener("click", function () {
                document.getElementById("followUpMessage").style.display = "none"; // Close the follow-up message modal
            });
        
            // Handle "Yes" button in the virus warning modal to attempt virus removal
document.getElementById("yesButton").addEventListener("click", function () {
    // Remove the alert here to focus just on hiding elements and showing the success message
    // alert("Attempting to remove the virus... But you may have been compromised! 😱");

    // Hide all current elements after the "Yes" button is clicked
    document.getElementById("virusWarningModal").style.display = "none"; // Close the virus warning modal
    document.getElementById("virusModal").style.display = "none"; // Close the first virus modal
    document.getElementById("messageLabel").style.display = "none"; // Hide the thank you label
    document.getElementById("buttonContainer").style.display = "none"; // Hide the yes/no buttons
    document.getElementById("showMessageModal").style.display = "none"; // Hide the first message modal
    document.getElementById("loveButton").style.display = "none"; // Hide the love button
    document.getElementById("img").style.display = "none"; // Hide any other images

    // Show the "cartoon.gif" and "Yaeyyy!" text
    document.getElementById("yayMessage").style.display = "block"; // Show the text "Yaeyyy!"
});

        
            // Close the virus warning modal when the "virusWarningCloseButton" is clicked
            document.getElementById("virusWarningCloseButton").addEventListener("click", function () {
                document.getElementById("virusWarningModal").style.display = "none"; // Close the virus warning modal
            });
        });
        
         
