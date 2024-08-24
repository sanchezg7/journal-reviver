import fs from "fs";

try {
    const data = fs.readFileSync("../GJournal.json", "utf-8");
    console.log(data);
} catch (err) {
    console.error(err);
}

console.log("hello")