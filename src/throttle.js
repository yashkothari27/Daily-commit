// throttle
const throttle = (fn, ms) => { let t; return (...a) => { if (!t) { fn(...a); t = setTimeout(()=>t=null, ms); } }; };
module.exports = { throttle };
