const fnAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve("Estas entrando al resolve"),2000 )
        : reject (new Error('Estas entrando al reject como error'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello You are entry in the another function");
}

console.log('this message is before de another function');
anotherFn();
console.log('this message is after the another function');