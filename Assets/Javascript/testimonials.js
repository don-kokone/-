const testimonialContainer = document.querySelector(".c-testimonialContainer")
const testimonial = document.querySelector(".testimonial")
const user = document.querySelector(".user")

const testimonials = [

    {
        text: "Highly qualified treatment as well as medical and personal care is a matter of course what you cannot find anywhere. I appreciate that the doctors are looking for a personalized solution and it does not matter how much time and work it costs. If a dental innovation could help the treatment I am sure to find it in this clinic.",
        name: "~Harry",
    },

    {
        text: "After many experiences with dentists in Europe and the USA, I have to say that Dr Mitre was the first one who made me less apprehensive and more relaxed. In past years, I had to undergo a number of difficult treatments, including extractions and implants, I trusted Dr Mitre for his vast experience and attentive care.",
        name: "~Susan",
    },

    {
        text: "I can't recommend this dental practice highly enough, visited recently as a new patient requiring treatment. I found the reception staff to be most welcoming, approachable, and professional. The dentist and nurse work well together, you feel instantly at ease with them",
        name: "~Megan",
    },

    {
        text: "I'd been avoiding the dentist for years due to bad experiences. Then due to a gum infection I had to make an emergency appointment at One Dental Clinic. I have been a patient ever since. My dentist is very reassuring and very helpful.",
        name: "~Jeff",
    }
]

let i = 1

function updateTestimonial() {
    const { text, name } = testimonials[index]

    testimonial.innerHTML = text
    user.innerHTML = name

    i++

    if (i > testimonials.length - 1) {
        i = 0
    }
}

setInterval(updateTestimonial, 5000)