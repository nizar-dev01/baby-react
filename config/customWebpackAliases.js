const path = require('path')
const p = (filePath) => path.resolve(__dirname, "../src" + (filePath || ""))
module.exports = {
    "@": p(),
    "@c": p("/components")
}