
function areaTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let areaOfTriangle = s(s - a)(s - b)(s - c);
    let areaOfTriangleFinal = Math.sqrt(areaOfTriangle);

    return areaOfTriangleFinal;
}

const areaResult = areaTriangle(2, 5, 10);
console.log(areaResult);