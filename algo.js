
//Implement the function which takes an array containing the names of people that like an item.It must return the display text as shown in the examples:

function likes(names) {
    // TODO

    const namesLeft = names.length
    console.log(namesLeft)
    switch (names.length)
    {
        case 0: return "no one likes this"
        case 1: return `${names[0]} likes this`
        case 2: return `${names[0]} and ${names[1]} like this`
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default: return `${names[0]}, ${names[1]} and ${namesLeft - 2} others like this`

    }
}

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:


const multiplicationTable = n => {
    const result = [];
    for (let i = 1; i <= n; i++)
    {
        const row = [];
        for (let j = 1; j <= n; j++)
            row.push(i * j);
        res.push(row);
    }
    return result;
}


const charCount = (str) => {
    // make an object to return at end
    let result = {}
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++)
    {
        let char = str[i].toLowerCase()
        //    if the char is a number/letter AND is a key in object, add one to count 
        if (result[char] > 0)
        {
            result[char++]
        }
        //    if the char is a number/letter AND is a not in object, add it to object and set value 
        else
        {
            result[char] = 1
        }
        // if character is something else (space, period, etc.) don't do anything 
        // return object
    }
    return result
}

// refactored charCount
const charCount = (str) => {
    let obj = {}
    for (let char of str)
    {
        char = char.toLowerCase()
        // testing to make sure is a number or letter
        if (/[a-z0-9]/.test(char))
        {
            if (obj[char] > 0)
            {
                obj[char++]
            } else
            {
                obj[char] = 1
            }
            return obj
        }

    }
}






