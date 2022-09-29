const names = ['Apu', 'Babu', 'Abu', 'Khabu', 'Labu', 'khabu', 'Apu', 'Babu', 'Abu', 'Khabu', 'Labu', 'khabu', 'Apu', 'Babu', 'Abu', 'Khabu', 'Labu', 'khabu', 'Apu', 'Babu', 'Abu', 'Khabu', 'Labu', 'khabu', 'Khabu', 'Labu', 'khabu', 'Apu', 'Babu', 'Abu', 'Khabu', 'Labu', 'khabu', 'Apu', 'Babu'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
//console.log(uniqueNames);

// const array1 = [1, 2, 3];

// console.log(array1.includes(0));

console.log(names.includes('Apu'));