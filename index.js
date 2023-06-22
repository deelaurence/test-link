let input = document.querySelector("input")
let button = document.querySelector("button")
let result = document.querySelector("#result")

smileys = {
    happy: "😄",
    sad: "😌"
}

let generateSmiley = ((e) => {
    e.preventDefault()
    let inputArray = input.value.split(" ")
    console.log(inputArray)
    let modifiedString = ""
    inputArray.forEach((word) => {
        if (word == "happy") {
            word = smileys.happy
        }
        modifiedString += word + " "
    })
    result.innerHTML = modifiedString
    console.log(modifiedString)
})


button.addEventListener('click', generateSmiley)