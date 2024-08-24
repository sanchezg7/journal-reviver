import {Journal} from "./types";

const fs = require("fs");

try {
    const data: Journal = fs.readFileSync("../GJournal.json", "utf-8");
    console.log(data);
} catch (err) {
    console.error(err);
}

console.log("hello")