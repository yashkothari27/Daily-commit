// event bus
const listeners = {};
const on = (e,fn) => (listeners[e] = listeners[e]||[]).push(fn);
module.exports = { on };
