
function select(e) {
    const answer =   e.currentTarget.nextElementSibling;
    const isAnswerShown = answer.classList.contains('active')
    console.log(isAnswerShown)
    if (isAnswerShown) {
        answer.classList.remove('active')
    } else {
        answer.classList.add('active')
    }
}