// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
modal.classList.add("hidden");

const hearts = document.getElementsByClassName("like-glyph");
for (const heart of hearts) {
  heart.addEventListener("click", function(e) {
    console.log(heart.classList);
    if (heart.classList[1] === "activated-heart") {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    } else {
      return mimicServerCall()
      .then(function() {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      })
      .catch(function(error) {
        modal.classList.remove("hidden");
        const p = document.getElementById("modal-message");
        p.innerText = error.message;
        setTimeout(function() {
          modal.classList.add("hidden");
        }, 5000);
      });
    }
  });
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
