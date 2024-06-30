var fs = require('fs');
const path = require("path");
const baseDir = path.join(__dirname, "../dist/");
const fileNameMapping = [ 
        [baseDir+'index.web.d.ts', baseDir+'index.d.ts'],
        [baseDir+'index.web.d.ts.map', baseDir+'index.d.ts.map'],
        [baseDir+'index.web.js', baseDir+'index.js'],
        [baseDir+'index.web.js.map', baseDir+'index.js.map']
    ];
for(const file of fileNameMapping) {
    if(fs.existsSync(file[0])) {
        fs.rename(file[0], file[1], function (err) {
            if (err) throw err;
            console.log(`File Renamed from ${file[0]} to ${file[1]}`);
            });
    }
}
