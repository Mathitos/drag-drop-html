console.log('hi')

const cards = document.querySelectorAll('.card')
const lists = document.querySelectorAll('.list')

cards.forEach((card) => {
  card.addEventListener('dragstart', () => {
    card.classList.add('moving')
  })

  card.addEventListener('dragend', () => {
    card.classList.remove('moving')
  })
})

lists.forEach((list) => {
  list.addEventListener('dragover', (e) => {
    e.preventDefault()
    const movingCard = document.querySelector('.moving')
    list.append(movingCard)
  })
})
