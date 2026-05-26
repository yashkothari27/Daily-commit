// simple cache
const store = {};
const get = k => store[k];
const set = (k,v) => { store[k] = v; };
module.exports = { get, set };
