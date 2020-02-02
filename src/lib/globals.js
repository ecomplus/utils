let env, root

if (typeof window === 'object' && window) {
  // browser env
  root = env = window
} else if (typeof process === 'object' && process.env) {
  // Node.js env
  root = global
  env = process.env
} else {
  /* global self */
  // fallback to empty config object
  root = env = ((typeof self === 'object' && self) || {})
}

export { root, env }
