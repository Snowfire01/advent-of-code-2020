l = require("fs").readFileSync("passports.txt", "utf-8").split("\n\n")

one = l.reduce((x, y) => x + (y.split(/[ \n]/).length - (y.includes("cid")) == 7), 0)

b = (c, d, e, f, g) => c >= 2010 && c <= 2020 && d >= 1920 && d <= 2002 && e >= 2020 && e <= 2030 && f >= (g == "cm" ? 150 : 59) && f <= (g == "cm" ? 193 : 76)

two = l
    .reduce((x, y) => x + b(...
        ((/(?=.*iyr:(\d{4}))(?=.*byr:(\d{4}))(?=.*eyr:(\d{4}))(?=.*hcl:#[\da-f]{6})(?=.*hgt:(\d{2,3})(in|cm))(?=.*ecl:(?=amb|blu|brn|gry|grn|hzl|oth))(?=.*pid:\d{9}).*/
            .exec(y.replace(/\n/g, " ")) ?? [])
            .slice(1)
        )
    ), -1)

console.log("Part 1: " + one)
console.log("Part 2: " + two)