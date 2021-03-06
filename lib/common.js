
// helper to get the name from a listing entry, in a standard form
function normalizeEntryName (entry) {
  if (typeof entry === 'string') entry = { name: entry }
  if (!entry || typeof entry.name !== 'string') {
    throw new Error('Invalid entry passed to normalizeEntryName')
  }
  var name = ('' + (entry.name || ''))
  name = (name.startsWith('/')) ? name : ('/' + name)
  name = (name !== '/' && name.endsWith('/')) ? name.slice(0, -1) : name
  return name
}

// helper to convert a dat-node object to a hyperdrive archive
function normalizeArchive (archive) {
  return (archive.archive) ? archive.archive : archive
}

// helper to convert an encoding to something acceptable
function toValidEncoding (str) {
  if (!str) return 'utf8'
  if (!['utf8', 'utf-8', 'hex', 'base64', 'binary'].includes(str)) return 'binary'
  return str
}

// `pathParts` and `childParts` should be arrays (`str.split('/')`)
function isPathChild (pathParts, childParts) {
  // all path parts should be contained in the child parts
  for (var i = 0; i < pathParts.length; i++) {
    if (pathParts[i] !== childParts[i]) return false
  }
  return true
}

module.exports = {
  normalizeArchive,
  normalizeEntryName,
  toValidEncoding,
  isPathChild
}