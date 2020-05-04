// https://github.com/darkskyapp/string-hash/blob/master/index.js
// (via https://github.com/sveltejs/svelte/blob/91d758e35b2b2154512ddd11e6b6d9d65708a99e/src/compiler/compile/utils/hash.ts#L2)
const stringHashCode = string => {
  let hash = 5381
  let i = string.length
  while (i--) hash = ((hash << 5) - hash) ^ string.charCodeAt(i)
  return (hash >>> 0).toString(36)
}

export default stringHashCode
