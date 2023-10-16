

const elementos = document.querySelectorAll(".show")

const observador = new IntersectionObserver((elementos) => {


    elementos.forEach((i) => {

        i.target.classList.remove("show")

        i.target.classList.add("hidden")

    })

    elementos.forEach((i) => {


        if (i.isIntersecting === true) {

            i.target.classList.add('show')

        } else {

            i.target.classList.remove('show')

        }

    })

})

elementos.forEach((elemento) => {
    observador.observe(elemento)

})