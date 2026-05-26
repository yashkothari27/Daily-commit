// helpers
const retry = (fn, n=3) => fn().catch(e => n > 0 ? retry(fn, n-1) : Promise.reject(e));
module.exports = { retry };
