'use strict'
console.log('Starting up');

$(document).ready(init)
$('.contact-me').submit(onContactMe)

function init() {
    _renderPortfolios()
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


