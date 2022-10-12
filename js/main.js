'use strict'
console.log('Starting up');
var gProjects = [

    {
        id: makeId(),
        name: "MineSweeper 2",
        title: "Electric Boogaloo",
        desc: "The nostalgic Game, along with a whole bunch of extra features and gamemodes",
        url: "https://cedrus81.github.io/mineSweeper/",
        publishedAt: 'Oct. 22',
        labels: ["CRUD", "CRUDL", "filter", "storage"],
        img: 'img/projects/mineSweeper.png'
    },
    {
        id: makeId(),
        name: "Denisse's Library",
        title: "Full CRUD project",
        desc: "A demo for a shop display, with filtering and sorting functions added as well",
        url: "https://cedrus81.github.io/Libreria/",
        publishedAt: 'Oct. 22',
        labels: ["CRUD", "CRUDL", "filter", "storage"],
        img: 'img/projects/libreria.jpg'
    },
    {
        id: makeId(),
        name: "YelpCamp",
        title: "Full outdoor camp review site",
        desc: "Full scale project, including a plethora of features, styles and details. Between 20-30 different libraries and APIs were used",
        url: "https://aqueous-headland-11003.herokuapp.com/",
        publishedAt: 'Aug. 22',
        labels: ["Nodejs", "MongoDB", "Express", "CRUD", "BootStrap", "Validation", "promises", "Databases", "EJS", "APIs"],
        img: 'img/projects/YelpCamp.jpg'
    },
]

$(document).ready(init)


function init() {
    _renderPortfolios()
}

function _renderPortfolios() {
    let strHTML = ''
    gProjects.forEach((project, idx) => strHTML +=
        `<div class="col-md-4 col-sm-6 portfolio-item">
        <a value="${idx}" class="portfolio-link" >
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${project.img}" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.title}</p>
    </div>
  </div>`)
    $('.portfolios').html(strHTML)
    $('.portfolio-link').click(_onOpenModal)
}


function _onOpenModal() {
    let value = +this.attributes.value.value
    let project = getProject(value)
    _renderModal(project)
    $('#portfolioModal').modal('show')
}


function _renderModal(project) {

    _renderModalHead(project)
    _renderModalBody(project)
    _renderModalFooter(project)

    $('.close-modal').click(onCloseModal)
}








// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()







function _renderModalHead(project) {
    $(`.modal-header`).html(`<img class="img-fluid" src="${project.img}" alt="">`)
}

function _renderModalBody(project) {
    $('.modal-body').html(`<h3>${project.name}</h3>
    <h5>${project.title}</h5>
    <p>${project.desc}</p>
    <p>Published at: ${project.publishedAt}</p>
    <p><b>Categories:</b> <br> ${project.labels.join(', ')}</p >
    <a href="${project.url}">`)
}

function _renderModalFooter(project) {
    $('.modal-footer').html(`
    <button type="button" class="btn btn-secondary close-modal">Back</button>

    <a href="${project.url}" target="_blank" rel="noopener noreferrer">
    <button type="button" class="btn btn-primary">Visit Project</button>
    </a>
    `)
}
function onCloseModal() {
    $('#portfolioModal').modal('hide')
}





















function getProject(value) {
    return gProjects[value]
}




function makeId(length = 5) {
    var txt = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return txt;
}