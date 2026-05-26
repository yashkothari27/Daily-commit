// sanitize input
const clean = s => String(s).replace(/<[^>]*>/g, '').trim();
module.exports = { clean };
