
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


const charCount1 = (str) => {
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
const charCount2 = (str) => {
    let obj = {}
    for (let char of str)
    {
        char = char.toLowerCase()
        // testing to make sure is a number or letter
        if (/[a-z0-9]/.test(char))
        {
            obj[char] = ++obj[char] || 1
        }
        return obj

    }
}

// frequency counter


const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
    {
        return false
    }

    for (let i = 0; i < arr1.length; i++)
    {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1)
        {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

// anagrams

const validAnagram = (first, second) => {
    if (first.length !== second.length) return false;

    const lookup = {}

    for (let val of first)
    {
        let letter = val
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    // same as a for loop with val being the iterator
    for (let val of second)
    {
        let letter = val
        if (!lookup[letter])
        {
            return false
        } else
        {
            lookup[letter] -= 1
        }
    }
    return true
}

//. multiple pointers
const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[i] + arr[j] === 0)
            {
                return [arr[i], arr[j]]
            }
        }
    }
}

//refactored sumZero
const sumZero2 = (arr) => {
    let left = 0
    let right = arr.length - 1;
    while (left < right)
    {
        let sum = arr[left] + arr[right];
        if (sum === 0)
        {
            return [arr[left], arr[right]]
        } else if (sum > 0)
        {
            right--
        } else
        {
            left++
        }
    }
}


const countUniqueValues = (arr) => {
    let count = 0

    for (let i = 0; i < arr.length; i++)
    {
        for (let j = i + 1; arr.length; j++)
        {
            if (arr[i] === arr[j])
            {
                count++
            }
        }
    }

}

const countUniqueValues2 = (arr) => {
    let i = 0
    for (let j = 1; j < arr.length; j++)
    {
        if (arr[i] !== arr[j])
        {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}
[1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]





