
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
            if (!form.checkValidity()) {
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



function onContactMe(ev) {
    const $elInputs = $('.contact-me').find('.form-control')
    let mailData = {}
    for (const inpt of $elInputs) {
        if (!inpt.value) {
            console.log('Invalid email!')
            return
        }
        mailData[inpt.name] = inpt.value
    }
    open(`https://mail.google.com/mail/?view=cm&fs=1&to=${mailData.email}&su=${mailData.subject}&b
    ody=${mailData.message}`)
}
