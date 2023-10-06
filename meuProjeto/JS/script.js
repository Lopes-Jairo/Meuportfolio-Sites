
const elementos = document.querySelectorAll(".hidden")


const observador = new IntersectionObserver((elementos) => {

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