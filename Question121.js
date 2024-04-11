"use strict";
for (let loop = 1; loop <= 10; loop++) {
    let gape = loop;
    if (gape == 5) {
        console.log("-- skipped number 5 with continue method");
        continue;
    }
    console.log(gape);
}
