

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    // return the square root of the value
    return Math.sqrt(value);
}

// TODO: Implement square function
function calculateSquare(value) {
    return value * value;

}

// TODO: FIX reciprocal function
function reciprocal(value) {
    if (value === 0) {
        throw new Error("Cannot divide by zero");
    }
    return 1 / value;


}

// TODO: Implement natural log function
function naturalLog(value) {
    // return the natural log of the value
}

// TODO: Implement sine function
function sine(value) {
    return Math.sin(value);
}

// TODO: Implement cosine function
function cosine(value) {
    return Math.cos(value);
}

// TODO: Implement tangent function
function tangent(value) {
    return Math.tan(value);
    // return the tangent of the value
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal
};
