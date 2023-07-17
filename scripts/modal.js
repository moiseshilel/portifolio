// Dados dos Projetos

const dataProjects = [
    {
        title: 'Challenge Encriptador',
        date: '25 de Junho de 2023',
        description: `Challenge proposto pela Alura + ONE <br><br>

        Neste projeto foram utilizadas as seguintes ferramentas: <br><br>
        
        • HTML5; <br>
        • JavaScript; <br>
        • CSS3; <br><br>
        
        • O intuito deste projeto é disponibilizar um site capaz de encriptar e desemcriptar mensagens.`, 
        videoSrc: 'assets/projects/encriptador.gif',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7078601054052859904/',
        repository: 'https://github.com/moiseshilel/challenge-Encriptador',
        site: 'https://moiseshilel.github.io/challenge-Encriptador/'

    },
    {
        title: 'Conversor de Moedas',
        date: '17 de Julho de 2023',
        description: `Neste desafio foi designado que fosse desenvolvido um conversor de moedas, com valores prefixados e um segundo conversor à escolha do aluno.<br><br>

        Neste projeto foram utilizadas as seguintes ferramentas: <br><br>
        
        • Java; <br>
        • Eclipse; <br>
        `, 
        videoSrc: 'assets/projects/conversor-moedas.gif',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7086749507308142592/',
        repository: 'https://github.com/moiseshilel/conversor-moedas-java',
        site: 'https://github.com/moiseshilel/conversor-moedas-java'

    },
    {
        title: 'Site Barbearia Alura',
        date: '15 de Junho de 2023',
        description: `editando...; <br><br>
        • editando...; <br>
        • editando...;' <br>
        • editando...; <br>
        • editando...; <br>
        • editando...;`,
        videoSrc: 'assets/projects/sitebarbearia.jpg',
        linkedin: '',
        repository: 'https://github.com/moiseshilel/site-Barbearia-Alura',
        site: 'https://moiseshilel.github.io/site-Barbearia-Alura/'

    },
    // {
    //     title: 'Site Barbearia Alura',
    //     date: '15 de Junho de 2023',
    //     description: "---",
    //     videoSrc: 'assets/projects/conversor.mp4',
    //     linkedin: '',
    //     repository: 'https://github.com/moiseshilel/site-Barbearia-Alura',
    //     site: 'https://moiseshilel.github.io/site-Barbearia-Alura/'

    // },

]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {

            if (index != 5) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
            modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()
