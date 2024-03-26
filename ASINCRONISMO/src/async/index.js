const fnAsync = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => resolve('async'), 2000)
            : reject(new Error('Error'))
    })
}


const anotherFunction = async ()=>{
    const something = await fnAsync()
    console.log(something);
    console.log('Hello world');
}

console.log('before');
anotherFunction()
console.log('after');