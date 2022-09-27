import {createReadStream, createWriteStream} from 'fs';

const readMyStream = createReadStream(__dirname + "/readme.txt", "utf-8");

const writeMyStream = createWriteStream(__dirname + "/filer.txt")

readMyStream.on("data", (chunk) =>{
    console.log("chunk ooo!!!");
    console.log(chunk);
    writeMyStream.write("Okay warris!!")
    writeMyStream.write(chunk)
});

const newStream = createWriteStream(__dirname + "/warris.txt");

process.stdin.pipe(newStream);
process.stdin.pipe(writeMyStream);

