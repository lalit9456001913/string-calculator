function add(numbers) {
    if (!numbers) return 0;

    let delimiter =/,|\n/; 
    
    if (numbers.startsWith("//")) {
        let parts = numbers.split("\n");
        delimiter = parts[0].slice(2); 
        numbers = parts[1];             
    }
    
    const numArray = numbers.split(new RegExp(delimiter));

    const parsedNumbers = numArray.map(num => {
        const trimmedNum = num.trim(); 
        return trimmedNum === "" ? 0 : Number(trimmedNum); 
    });

    const negatives = parsedNumbers.filter(num => num < 0);

    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }

    return parsedNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = { add }; 
