export default
/* browser env */
(typeof window === 'object' && window) ||
/* Node.js env */
(typeof global === 'object' && global) ||
/* global self */
(typeof self === 'object' && self) ||
/* fallback to empty config object */
{}
