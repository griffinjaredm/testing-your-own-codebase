//The goal of this function will be to take a string and spit it back, but backwards.
//Edit: Was able to get it to work. I had to imagine that somebody hands me a piece of paper with the word "hello" on it and then asks me to write backwards on a blank sheet of paper. Here are the steps I would take: 1) I need to get a blank piece of paper and that would be let reversed = "". 2) I would then put my finger on the last letter which is "o" and write it down. 3) Move my finger one letter left and write that one down next to it and then keep going. 4) Then, stop when I've written the first letter. 5) Then finally, hand back the piece of paper and that's return reversed.  
function reverseString(str) {
    if (typeof str !== "string") {//
        throw new Error("Input must be a string")
    }

    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }

    return reversed
}

//So, obviously a palindrome is a phenomenon in English (maybe they study this in other languages too, I'm not sure) where a word is spelled the same backwards as it is forwards. A common example of this is 'civic' or 'racecar'. So, the goal of this function is to check whether a word reads the same forwards and backwards and it gives back true or false. I'm reusing the reverseString function already built to make the backwards 'piece of paper' as mentioned in my previous comment and it holds the original card next to the backwards piece of paper and asks "do these match?". Now, if it isn't handed a string it will refuse it with an error and its the same as reverseString. I know that javascript treats a capital R and a lowercasae r as different letters, essentially. So, "Racecar" wouldn't match its reverse unless everything is made lowercase first. This is why I put in const word = str.toLowerCase(). 
function isPalindrome(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string")
    }

    const word = str.toLowerCase()
    return word === reverseString(word)
}

//The goal of this function is to add up a list of numbers. I can see how a good example of of where this would be useful is a shopping cart adding up item prices. Another example could be a budgeting app that adds up a month of expenses. So, here, the function adds up every number in a list and gives back the total. Just like a calculator, it starts at 0, then goes through the list front to back and it adds each number on. If it is not handed a list, then it refuses. The second check I put in is inside the loop if any item isn't a number, then it refuses also.
function sumOfArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array")
    }

    let total = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            throw new Error("Every item must be a number")
        }
        total = total + arr[i]
    }

    return total
}


//The goal of this function is to find the biggest number in a list and give it back. The way I had to think about it was it was like thinking of flipping through a stack of numbered cards while holding the biggest one that has been seen so far. With each new card I'm asking "is this bigger than the one in my hand?" If it's a yes, then swap it in. I had to make it start with the first card and not 0 (which might seem like the natural starting point) but if there are negative numbers like [-5, -2, -9] then it would wrongly give back 0. 
function findMax(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array")
    }

    if (arr.length === 0) {
        throw new Error("Array cannot be empty")
    }

    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            throw new Error("Every item must be a number")
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}

test('Test for function: reverseString(str)', () => {
    expect ( reverseString("hello") ).toBe("olleh")
    expect (() => reverseString(123)).toThrow()
    expect (() => reverseString(-1)).toThrow()
    expect (() => reverseString(true)).toThrow()
    expect (() => reverseString(["h", "i"])).toThrow()
    expect (() => reverseString(null)).toThrow()
    expect (() => reverseString()).toThrow()
    expect ( reverseString("") ).toBe("")
    expect ( reverseString("a") ).toBe("a")
    expect ( reverseString("hi there") ).toBe("ereht ih")
    expect ( reverseString("123") ).toBe("321")
})



test('Test for function: isPalindrome(str)', () => {
    expect ( isPalindrome("racecar") ).toBe(true)
    expect ( isPalindrome("hello") ).toBe(false)
    expect (() => isPalindrome(123)).toThrow()
    expect (() => isPalindrome(true)).toThrow()
    expect (() => isPalindrome(null)).toThrow()
    expect (() => isPalindrome()).toThrow()
    expect ( isPalindrome("") ).toBe(true)
    expect ( isPalindrome("a") ).toBe(true)
    expect ( isPalindrome("Racecar") ).toBe(true)
})

test('Test for function: sumOfArray(arr)', () => {
    expect ( sumOfArray([1, 2, 3]) ).toBe(6)
    expect (() => sumOfArray("hello")).toThrow()
    expect (() => sumOfArray(5)).toThrow()
    expect (() => sumOfArray(null)).toThrow()
    expect (() => sumOfArray()).toThrow()
    expect (() => sumOfArray([1, "two", 3])).toThrow()
    expect ( sumOfArray([]) ).toBe(0)
    expect ( sumOfArray([5]) ).toBe(5)
    expect ( sumOfArray([-1, -2]) ).toBe(-3)
    expect ( sumOfArray([1.5, 2.5]) ).toBe(4)
})

test('Test for function: findMax(arr)', () => {
    expect ( findMax([1, 5, 3]) ).toBe(5)
    expect ( findMax([7]) ).toBe(7)
    expect ( findMax([-5, -2, -9]) ).toBe(-2)
    expect ( findMax([2.5, 2.4]) ).toBe(2.5)
    expect (() => findMax([])).toThrow()
    expect (() => findMax("hello")).toThrow()
    expect (() => findMax(5)).toThrow()
    expect (() => findMax(null)).toThrow()
    expect (() => findMax()).toThrow()
    expect (() => findMax([1, "two", 3])).toThrow()
})