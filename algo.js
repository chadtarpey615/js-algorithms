
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