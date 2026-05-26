// response parser
const parse = (data) => { try { return JSON.parse(data); } catch { return null; } };
module.exports = { parse };
