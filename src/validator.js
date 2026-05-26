// input validation
const validate = (input) => input && input.length > 0 && input.length < 256;
module.exports = { validate };
