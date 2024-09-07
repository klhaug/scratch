const button = document.getElementById("button");

button.addEventListener("click", () => {
    console.log('its working')
})


const promise = new Promise((resolve, reject) => {
    if(true) {
    resolve ("Stuff worked");
    } else {
    reject ("Error, it broke")
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiii!')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKE!')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me your looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })


promise
    .then(result => result + "!")
    .then(result2 => {
        throw Error
        console.log(result2);
    })
    .catch(console.log)