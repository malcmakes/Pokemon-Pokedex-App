
// const BREEDS_URL = 'https://pokeapi.co/api/v2/pokemon/'

const BREEDS_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
.then(res => res.json() )
.then(data => fetchPokemon(data))

const fetchPokemon = (res) => {
    const firstArr = [res][0].results //makes fetched data an array
    
    firstArr.forEach(function (entry){
        const option = document.createElement('option') //<option><option>
        option.value = entry.name  //<option value = 'breed'
        option.innerText = entry.name 
        select.appendChild(option)
    })

}

select.addEventListener('change', event => {
    let url = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`

    getDogImg(url)
    // getPokeMoves(url)
   
})

const img = document.querySelector('.dog-img')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const movesList = document.querySelector('#movesUl')

const getDogImg = url => {
    fetch(url) //going to the API url above
    .then(res => {
        return res.json() //get JSON message back
    })
    .then(data => {

        img.src = data['sprites']['front_default']
        height.innerText = `Height: ${data.height}`
        weight.innerText = `Weight: ${data.weight}`
        movesList.innerText =  getAttack(url)

    })
}

const getAttack = url => {
    fetch(url) //going to the API url above
    .then(res => {
        return res.json() //get JSON message back
    })
    .then(data => {
                function attacksUpdated () {

                    // const moveName = data.moves[0].move.name
            
                    let attacksArr = data.moves.map(move => move.move.name).slice(0, 10).join(', ')

                    
                    return attacksArr
                   

                    // for(let i=0; i < attacksArr.length; i++){
                    //     if(attacksArr[i] == "undefined"|| attacksArr[i] === undefined ) {
                    //         console.log('detected')
                    //     } else {
                    //         return attacksArr
                    //     }
                    // }
            

                      
                    // let attacksArr = data.moves.map(move => move.move.name).slice(0, 10).join(', ')
                    //         return attacksArr     
                 
                }
                
                const li = document.createElement('li')
                // li.value = attacksArr
                li.innerText = attacksUpdated()
                movesList.appendChild(li)

    })
}







            // function attackMoves () {

            //     attacksArr = data.moves.map(move => move.move.name).slice(0, 10).join(', ')
            //     console.log(attacksArr)

               
            //     const li = document.createElement('li')
            //     li.value = attacksArr
            //     li.innerText = attacksArr
            //     movesList.appendChild(li)
            // }

            // attackMoves()
           



            // let attacking = data.moves.forEach(move => {
            //     console.log( move.move.name) 
                
            //      return move.move.name
            // })



        



// const getPokeMoves = url => {
//     fetch(url) //going to the API url above
//     .then(res => {
//         return res.json() //get JSON message back
//     })
//     .then(data => {
//        const attacksArr = data.moves.map(move => move.move.name).slice(0, 10).join(', ')
//        console.log(attacksArr)

//         const li = document.createElement('li')
//         li.value = attacksArr
//         li.innerText = attacksArr
//         movesUl.appendChild(li)
    
        
//     })
// }















// const breedsObject = data.message //Turn message into an object
// const breedsArray = Object.keys(breedsObject) //Turn the object into an array

// for (let i = 0; i < breedsArray.length; i++) {
//     const option = document.createElement('option') //<option></option>
//     option.value = breedsArray[i] //<option value = 'breed'>
//     option.innerText = breedsArray[i] //<option value = 'breed' </option>

//     select.appendChild(option) //adds current <option> tag to the select box list of options 
// }




//------------------------------------------------------------------------------------


// const fetchPokemon = (res) => {
//     console.log(res)

//     const arr = [res]
//     console.log(arr)

//     const firstArr = arr[0].results

//     const array = firstArr.map (pokemon => pokemon.name)
//     console.log(array)


// const fetchPokemon = (res) => {
//     const {results} = res
//     const names = results.map(pokemon => pokemon.name)
    
// }


    






















//function that creates a random number between 1-100

// function generateRandom() {

//     let maxLimit = 100
//     let rand = Math.random() * maxLimit
//     rand = Math.floor(rand)

//     return rand
// }


// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){

//     const choice = generateRandom()
   

//     const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {


//         console.log(data.name)
//         console.log(choice)

    
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
   
// }


