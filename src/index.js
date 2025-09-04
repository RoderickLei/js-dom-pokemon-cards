const cardListUL = document.querySelector(".cards")

function createCardTitle(card){
    const cardTitle = document.createElement('h2')
    cardTitle.setAttribute('class', "card--title")
    cardTitle.innerText = card.name
    return cardTitle
}

function createCardImage(card){
    const cardImg = document.createElement('img')
    cardImg.setAttribute('width', "256")
    cardImg.setAttribute('class', "card--img")
    cardImg.setAttribute('src', card.sprites.other["official-artwork"].front_default)
    return cardImg
}

function createCardHP(card){
    const cardHP = document.createElement('li')
    cardHP.innerText = ("HP: " + card.stats[0].base_stat)
    return cardHP
}

function createCardAttack(card){
    const cardAttack = document.createElement('li')
    cardAttack.innerText = ("Attack: " + card.stats[1].base_stat)
    return cardAttack
}

function createCardDef(card){
    const cardDef = document.createElement('li')
    cardDef.innerText = ("Defense: " + card.stats[2].base_stat)
    return cardDef
}

function createCardSpAttack(card){
    const cardSpAttack = document.createElement('li')
    cardSpAttack.innerText = ("Special Attack: " + card.stats[3].base_stat)
    return cardSpAttack
}

function createCardSpDef(card){
    const cardSpDef = document.createElement('li')
    cardSpDef.innerText = ("Special Defence: " + card.stats[4].base_stat)
    return cardSpDef
}

function createCardSpeed(card){
    const cardSpeed = document.createElement('li')
    cardSpeed.innerText = ("Speed: " + card.stats[5].base_stat)
    return cardSpeed
}

function createCardText(card){
    const cardText = document.createElement('ul')
    cardText.setAttribute('class', "card--text")

    cardText.appendChild(createCardHP(card))
    cardText.appendChild(createCardAttack(card))
    cardText.appendChild(createCardDef(card))
    cardText.appendChild(createCardSpAttack(card))
    cardText.appendChild(createCardSpDef(card))
    cardText.appendChild(createCardSpeed(card))

    return cardText
}



function createCard(card){
    const cardLi = document.createElement('li')
    cardLi.appendChild(createCardTitle(card))
    cardLi.appendChild(createCardImage(card))
    cardLi.appendChild(createCardText(card))
    return cardLi
}

// Render all of the tasks to the page
function renderTasks() {
    console.log(data)
    console.log(data[0])

    for (let i = 0; i < data.length; i++) {
        const card = data[i]
        const cardList = createCard(card)
        // taskLi.appendChild(createTaskCheckBox(task))
        cardListUL.appendChild(cardList)
    }
}

// Call the initial render
function main() {
    renderTasks()
    // registerButtonClicked()
}

main()

// console.log(data);

// //You can start simple and just render a single 
// //pokemon card from the first element
// console.log(data[0]);
