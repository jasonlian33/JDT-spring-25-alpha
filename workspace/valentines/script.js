const messages = [
    "Are you sure?",
    "Really sure?",
    "Pookie Please?",
    "I'm going to cry... :(",
    "You're breaking my heart!",
    "REALLY sure?",
    "please?",
    "pretty please?",
    "PLEASE?",
    "PRETTY PLEASE?",
    "PLEASE PLEASE PLEASE?",
    "PLEASE PLEASE PLEASE PLEASE PL",
    "stop",
    "STOP",
    ":(",
    ":( :(",
    ":( :( :(",
    "I'm sad now",
    "No",
    "No",
    "No",
    "No",
];

let currentMessageIndex = 0;

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let yesScale = 1;
let noScale = 1;


yesButton.addEventListener("click", () =>{
    document.getElementById('joe').src = "https://delavanlakesvet.com/wp-content/uploads/sites/195/2022/03/smiling-cat-for-web.jpg";
    yesButton.textContent = "Yay!!!!!!!!";
    noButton.style.display = "none";
    yesButton.style.transform = "scale(1.6)";
    yesButton.classList.add('shake');
});

noButton.addEventListener("click", () => {
    yesScale += 0.1;
    yesButton.style.transform = `scale(${yesScale})`;

    noScale -= 0.1;
    noButton.style.transform = `scale(${noScale})`;

    // teleport no button
    teleportButton(noButton);

    noButton.textContent = messages[currentMessageIndex];

    currentMessageIndex = (currentMessageIndex + 1) % messages.length;


})

function teleportButton(button) {
    const screenWidth = window.innerWidth; // Get the width of the screen
    const screenHeight = window.innerHeight; // Get the height of the screen
    const card = document.querySelector('.card'); // Get the card element
    const cardRect = card.getBoundingClientRect(); // Get the card's position and size
    // Define padding to keep the button within the screen and away from the card
    const padding = 20;
    // Calculate safe boundaries for the button
    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;
    // Ensure the button doesn't overlap with the card
    let randomX, randomY;
    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while (
        // Check if the button overlaps with the card
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );
    // Apply the new position
    button.style.position = 'absolute'; // Ensure the button can move freely
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

















