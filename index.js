



// Function for the Dark Mode
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
    // Write your code to manipulate the DOM here 
}
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.


//Signature Ouput Based off user Inputs----------------------------------------------------------

  // Creat paragraphs based off user input
  let signNowButton = document.getElementById("sign-now-button");
  let count = 3;



  const addSignature = (person) => {

  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');

  const name = nameInput.value;  // Get the values from the inputs
  const hometown = hometownInput.value;

  let signatureElement = document.createElement('p');  // Create a new paragraph element for the signature
  newSignature.textContent = `🖊️ ${person.name} supports this cause.`;
  const signaturesSection = document.querySelector('.signatures'); // Find the signatures section and append the new signature
  signaturesSection.appendChild(signatureElement);

  // Update the counter
  const oldCounter = document.getElementById('counter');
  if (oldCounter) {
    oldCounter.remove();
  }
  count = count + 1;

  const counterElement = document.createElement('p');
  counterElement.id = 'counter';
  counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesSection.appendChild(counterElement);  // Append the new counter to the signatures section


  toggleModal(person); // Clear the input fields after adding the signature
  nameInput.value = '';
  hometownInput.value = '';
  emailInput.value = '';
}
//signNowButton.addEventListener("click", addSignature);










// Script.js Part of the program : Responsible for validatin Input--------------------------------


const validateForm = () => {

  let containsErrors = false;
  const email = document.getElementById('email');
  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  };

  for (let i = 0; i < petitionInputs.length; i++) {

    if (petitionInputs[i].value.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
    }
    else
    {
        petitionInputs[i].classList.remove('error');
    }
  }

  if(containsErrors == false)
  {
    addSignature();
    for(let i = 0; i < petitionInputs.length; i++){
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }



  if (!email.value.includes('.com') || !email.value.includes('.org') ) {
      containsErrors = true;
      email.classList.add('error');
  }
  else
  {
      email.classList.remove('error');
  }
}
signNowButton.addEventListener('click', validateForm);







//Animations----------------------------------------------------------
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};


// Select and cache the nav links
let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
    let windowHeight = window.innerHeight;

    for (let i = 0; i < revealableContainers.length; i++) {
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            revealableContainers[i].classList.add('active');
        } else {
            revealableContainers[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);




let reduceMotionButton = document.getElementById("reduce-motion-button");

const reduceMotion = () => {
    // Update animation object properties as needed
    let animation = {
        revealDistance: 150, // You can adjust this value as needed
        initialOpacity: 0,
        transitionDelay: '0s', // Set transition delay to 0 for immediate change
        transitionDuration: '0s', // Set transition duration to 0 for immediate change
        transitionProperty: 'none', // Disable transition
        transitionTimingFunction: 'linear' // You can change this to a different timing function if desired
    };

    // Loop through revealableContainers and update their styles
    for (let i = 0; i < revealableContainers.length; i++) {
        revealableContainers[i].style.transitionDelay = animation.transitionDelay;
        revealableContainers[i].style.transitionDuration = animation.transitionDuration;
        revealableContainers[i].style.transitionProperty = animation.transitionProperty;
        revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
    }
};

reduceMotionButton.addEventListener("click", reduceMotion);






const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");
  modalContent.textContent = `Thank you for your support ${person.name}!!`;

  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.display = "none";
  }, 4000); // 4 seconds timeout
};

  document.getElementById("close-modal-btn").addEventListener("click", () => {
  document.getElementById("thanks-modal").style.display = "none";
});
