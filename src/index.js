console.log('%c HI', 'color: firebrick')

const ul = document.querySelector("#dog-breeds")


ul.addEventListener("click", e => {
  if (e.target.matches("li")) {
      e.target.style.color = "blue"
  }
})


function renderImage(imageUrl) {
  const img = document.createElement("img")
  img.src = imageUrl
  const imgContainer = document.querySelector("#dog-image-container")
  imgContainer.append(img)
}

function renderBreed(breed) {
    const li = document.createElement("li")
    li.textContent = breed
    ul.append(li)
}

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(data => {
    const imgs = data.message

    imgs.forEach(imageUrl => {
        renderImage(imageUrl)
    })
  });

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    
    Object.keys(data.message).forEach(breed => {
        renderBreed(breed)
    })
  });




