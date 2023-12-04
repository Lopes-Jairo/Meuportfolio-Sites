// Pegando do HTML a classe que será observada

const elementos = document.querySelectorAll('.to-hide')

//criando o observador que vai observar a classe
const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            // quando os elementos com esta classe estiver visivel, acrescenta a classe to-show
            entry.target.classList.add('to-show')

        } else {
            // se nao estiver visivel, remove a classe to-show
            entry.target.classList.remove('to-show')
        }
    })
})

// informamos que o observador irá observar todos as tags dentro da variavel elementos.
elementos.forEach((el) => observador.observe(el))