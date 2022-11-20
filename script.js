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
    const onTopElement = getOnTopElement(list, e.clientY)
    const movingCard = document.querySelector('.moving')
    if (onTopElement) {
      list.insertBefore(movingCard, onTopElement)
    } else {
      list.append(movingCard)
    }
  })
})

const getOnTopElement = (list, y) => {
  const inertCards = Array.from(list.querySelectorAll('.card:not(.moving)'))
  return inertCards.reduce(
    (closestCard, inertCard) => {
      const cardBox = inertCard.getBoundingClientRect()
      // use middle of card to decide if the mouse is above or bellow that card
      const cardDistance = y - cardBox.top - cardBox.height / 2
      if (cardDistance < 0 && cardDistance > closestCard.cardDistance) {
        return { cardDistance, result: inertCard }
      }
      return closestCard
    },
    { cardDistance: Number.NEGATIVE_INFINITY, result: null },
  ).result
}
