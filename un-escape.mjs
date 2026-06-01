import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('C:\\Users\\Admin\\OneDrive\\Desktop\\New folder\\dolphin\\web\\src');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('\\`') || content.includes('\\$')) {
        content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
        fs.writeFileSync(file, content, 'utf8');
        console.log("Fixed: " + file);
    }
}
