var fs = require('fs-extra');
const path = require("path");
const distPath = path.join(__dirname, "../dist");
if(fs.existsSync(distPath)) {
    fs.removeSync(distPath);
    console.log("Deleted dist");
}
