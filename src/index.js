// //1st Challenge 
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// //console.log(imgUrl)
// fetch(imgUrl)
// .then(res => res.json())
// .then(images => images.message.forEach(addImage))

// function addImage(dogImage) {
// const imageDog = document.querySelector('#dog-image-container')
// //console.log(imageDog)
// const img = document.createElement('img')
// img.src = dogImage
// //console.log(dogImage)
// imageDog.append(img)
// }

// //2nd Challenge
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// //console.log(breedUrl)
// fetch(breedUrl)
// //console.log(breedUrl)
// .then(res => res.json())
// .then(results => {
//     breeds = Object.keys(results.message)
//     updateBreedList(breeds)
//     addBreedSelectListener()
// })

// function updateBreedList(breeds) {
//     const unList = document.querySelector('#dog-breeds')
//     const list = document.createElement('li')
//      //console.log(list)
//     list.innerContent = dogBreed.message
//     unOrdered.append(list)
//     }
    
//     function handleChange(e){
//         let letter = e.target.value
//         let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
//         updateBreedList.textContent = ""
//         renderBreeds(filteredBreeds)
//     }

// //const dropDown = document.querySelector("#breed-dropdown")
// //console.log(dropDown)

//function dogData(ceo){
    
//}*/

/*function addImage(imageUrl) {
    const imageDog = document.querySelector('#dog-image-container')
    const img = document.createElement('img')
    img.src = imageUrl
    imageDog.append(img)
}
addImage("https://images.dog.ceo/breeds/hound-ibizan/n02091244_3631.jpg")*/


// document.addEventListener('DOMContentLoaded', function () {
//     loadImages();
//   });
  
//   function loadImages() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imgUrl)
//       .then(res => res.json())
//       .then(results => {
//         results.message.forEach(image => addImage(image))
//       });
//   }
  
//   function addImage(dogPicUrl) {
//     let container = document.querySelector('#dog-image-container');
//     let newImageEl = document.createElement('img');
//     newImageEl.src = dogPicUrl;
//     container.appendChild(newImageEl);
//   }


document.addEventListener("DOMContentLoaded", () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let breeds = []
    
    //Fetch
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => data.message.forEach(dogImage => renderImage(dogImage)))
        
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        breeds = Object.keys(data.message)
        renderBreeds(breeds)
    })
    
    //HTML Elements
    const dropdown = document.getElementById("breed-dropdown")
    const breedList = document.querySelector('#dog-breeds')
    const container = document.querySelector('#dog-image-container')
    
    
    //Event Listeners
    dropdown.addEventListener('change', handleChange)
    
    //Render Functions
    function renderImage(dogImage){
        const image = document.createElement('img')
        image.src = dogImage
        container.appendChild(image)
    }

function renderBreeds(breeds){
    breeds.forEach(breed => {
    let breedItem = document.createElement('li')
    breedItem.textContent = breed
    breedItem.style.cursor = 'pointer'
    breedList.appendChild(breedItem)
    breedItem.addEventListener('click', changeColor)
    })
}


//Callback Functions
function changeColor(e){
    if(e.target.style.color = "black"){
        e.target.style.color = "blue"
        
    }
    else{
    e.target.style.color = "black"
    }
}

function handleChange(e){
    let letter = e.target.value
    let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
    breedList.textContent = ""
    renderBreeds(filteredBreeds)
}

})

