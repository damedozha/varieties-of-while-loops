
let count = 0
while(count < 20){
    console.log(count)

    count += 1
}

let riddle = "What has a bank but no money?"
let answer = "river"
let guess = ""

function askTheRiddle () {
    let input = prompt(riddle)
    if(input === null){
        return null
    } else {
        return input.toLowerCase
    }
}

//while it is true that guess 
//does not include the answer
while(!guess.includes(answer)){
    let input = prompt(riddle)
    if(input !== null){
    guess = input.toLowerCase()
    } else {
        break 
    }    
}

// let input = ""
// while(input === null){
//     let input = prompt("Are We There Yet")
// }


let counter = 23
while(true){
    console.log(`"This is the song that never ends,
    yes, it goes on, and on, my friends,some people started
    singing it, not knowing what it was, and they'll 
    keep on singing it forever just because......"`)
    if (counter > 1 ){
            counter -= 1    
        } else {
        break 
        }
    }

let goats = ["Sir Reginald","Peter","Billy Billy","Tina","Nelly", "Casper"]
let html = `
        <h3>Names of Goats</h3>
    <ul>
`
while(goats.length > 0){
    let goatName = goats.pop()
    html += `
        <li>${goatName}</li>
    `
}
html += '</ul>'
document.write(html)
console.log("Congratulations!!!")