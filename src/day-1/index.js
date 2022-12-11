const fs = require("fs");

const readStream = () => {
    const fileName = '/input.txt';
    const myReadStream = fs.createReadStream(__dirname + fileName, 'utf8');
    myReadStream.on("data", function (chunk) {
        const lines = chunk.trim().split("\n");

        let num = 1;
        const elfCaloriesArr = lines.reduce((total, currentValue, currentIndex, arr) => {
            if(currentValue !== '') {
                total[num] = parseInt(total[num]) + parseInt(currentValue);
            } else {
                num += 1;
                total[num] = 0;
            }
            return total
        }, {1: 0})
        const mostCalories =  Object.values(elfCaloriesArr).reduce((prev, current) => {
            return Math.max(prev, current)
        });
        console.log(mostCalories)
    });
}


readStream()