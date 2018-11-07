var fs = require('fs');
let filePath = process.argv[2];
if (!filePath) {
    console.log('Please provide json filename as the argument. eg: filename.json')
    process.exit()
}

try {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let jsonString = JSON.stringify(json)
    const strippedJson = jsonString.replace(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/g, "")
    console.log(strippedJson)
    fs.writeFile(`${filePath}_stripped.json`, strippedJson, 'utf8', function(err) {
        console.log('dsdsds');
        if(err) {
            console.log(err);
            process.exit()
        }
    
        console.log("The file was saved!");
        process.exit()
    });

} catch {
    console.log(`Cannot open json with the filename of ${filePath}`)
    process.exit()
}
