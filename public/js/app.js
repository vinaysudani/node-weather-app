console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messgeOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messgeOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    var address = search.value

    fetch('http://localhost:3000/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messgeOne.textContent = data.error;
            } else {
                messgeOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})