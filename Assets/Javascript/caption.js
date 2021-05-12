const captionContainer = document.querySelector(".c-captionContainer")
const caption = document.querySelector(".caption")
const heading = document.querySelector(".heading")

const captions = [

    {
        heading1: "Welcome to One Dental Clinic",
        text: "Visit to your dental hygienist, is a winning formula for healthy teeth and smile for the entire family.",
    },

    {
        heading1: "Trust Our Experience!",
        text: "Are you self-conscious about your smile? Talk to us about cosmetic options and embrace life with happiness and well-being",
    },

]

let index = 1

function updateCaptions() {
    const { heading1, text } = captions[index]

    caption.innerHTML = text
    heading.innerHTML = heading1
 

    index++

    if (index > captions.length - 1) {
        index = 0
    }
}

setInterval(updateCaptions, 5000)