const p = (path)=> "../src" + (path || "")
module.exports = {
    "@": p(),
    "@c": p("/components")
}