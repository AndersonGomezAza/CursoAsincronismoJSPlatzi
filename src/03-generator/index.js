function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next());
console.log(g.next().done);
console.log(g.next().value);

function* iterator (array) {
    for (const iterate of array) {
        yield iterate;
    }
}

const it = iterator(['Anderson', 'Omar', 'Juan', 'Camilo']);
console.log(it.next());
console.log(it.next().value);
console.log(it.next().value);