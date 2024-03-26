const promise = new Promise((resolve, reject) => {
    resolve('tudo bem')
})

const cows = 9
const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We Have ${cows} on the farm`)
    } else {
        reject('There is no cows on the farm')
    }
})

countCows.then((result) => {
    console.log(result)
}).catch(err => {
    console.log(err)
}).finally(()=>{
    console.log('Finally');
})