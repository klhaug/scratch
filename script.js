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


    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"        
    ]

    Promise.all(urls.map(url => {
        return fetch(url).then(resp=> resp.json())
    })).then(result => {
        console.log(result[0]),
        console.log(result[1]),
        console.log(result[2])
    }).catch(() => console.log("ERROR"))



async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log(data)
}


const getData = async function() {
    try {
        const [ users, posts, albums ] =  Promise.all(urls.map(url => {
            return fetch(url).then(resp=> resp.json())
        }))
            console.log("users", users),
            console.log("posts", posts),
            console.log("albums", albums)
    } catch {
        console.log("oopsidoopsi")
    }
}


