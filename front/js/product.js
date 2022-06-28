const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")

fetch(`http://localhost:3000/api/products/${id}`)
.then((response) => response.json())
.then((res) => handleData(res))

function handleData(data) {
    console.log ({data})
    //const altTxt = data.altTxt
    //const colors = data.colors
    //const description = data.description
    //const imageUrl = data.imageUrl
    //const name = data.name
    //const price = data.price
    //const _id = data._id
    const { altTxt, colors, description, imageUrl, name, price } = data
    makeImage(altTxt, imageUrl)
    makeTitle(name)
    makePrice(price)
    makeDescription(description)
    makeColors(colors)
}

function makeImage(altTxt, imageUrl){
    const image = document.createElement ('img')
    image.src = imageUrl
    image.alt = altTxt
    const parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
}

function makeTitle(name) {
    const h1 = document.querySelector("#title")
    if (h1 != null) h1.textContent = name
}

function makePrice(price){
    const span = document.querySelector("#price")
    if (span !=null) span.textContent = price
}

function makeDescription(description) {
    const p = document.querySelector("#description")
    if (p !=null) p.textContent = description
}

function makeColors(colors) {
    const select = document.querySelector("#colors")
    if (select !=null) {
        colors.forEach((color) => {
            const option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
        })
    }
}





