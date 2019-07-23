export default
/* browser env */
(typeof window === 'object' && window) ||
/* Node.js env */
(typeof process === 'object' && process.env) ||
/* global self */
(typeof self === 'object' && self) ||
/* fallback to empty config object */
{}
