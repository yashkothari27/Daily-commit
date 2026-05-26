// custom errors
class AppError extends Error { constructor(msg, code) { super(msg); this.code = code; } }
module.exports = { AppError };
