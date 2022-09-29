for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
        console.log('foo-bar');
    }
    else if (i % 3 === 0 && i !== 0) {
        console.log('foo');
    }
    else if (i % 5 === 0 && i !== 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}