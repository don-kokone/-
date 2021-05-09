const testimonialContainer = document.querySelector(".testimonialContainer")
const testimonial = document.querySelector(".testimonial")
const username = document.querySelector(".username")

const testimonials =  [

    {
        text: "Highly qualified treatment as well as medical and personal care is a matter of course what you cannot find anywhere. I appreciate that the doctors are looking for a personalized solution and it does not matter how much time and work it costs. If a dental innovation could help the treatment I am sure to find it in this clinic. I am happy and very much satisfied that I made up my mind for One Dental clinic.",
        name: "Harry",
    },

    {
        text: "After many experiences with dentists in Europe and the USA, I have to say that Dr Mitre was the first one who made me less apprehensive and more relaxed. In past years, I had to undergo a number of difficult treatments, including extractions and implants, I trusted Dr Mitre for his vast experience and attentive care. He is well seconded by Dr Pinto, and his wife also provides excellent professional support. At One Dental Clinic, the environment is calm, the equipment is state of the art. The Vietnamese assistants know their job and speak good English, and patients are followed up. For me no question, I will continue going to One Dental Clinic as long as I need for maintenance or repair.",
        name: "Susan",
    },

    {
        text: "[Business name] was [positive attribute]. The team helped me [problem the business solved]. I had a problem with [key challenge], but they took care of it right away.",
        name: "Megan",
    },
]

let index = 1

function updateTestimonial(){
   const {text, name} = testimonials[index]

   testimonial.innerHTML = text
   username.innerHTML = name

   index++

   if (index > testimonials.length - 1) {
       index = 0
   }
}

setInterval(updateTestimonial, 5000)