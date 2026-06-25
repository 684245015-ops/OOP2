let books: [string, boolean][] = [
    ["The Great Gatsby", true],["To Kill a Mockingbird", false],["1984", true],["Pride and Prejudice", false],["The Catcher in the Rye", false]];
    
let availableCount: number = 0;
let borrowedCount: number = 0;

for (let book of books) {
    let title: string = book[0];
    let isBorrowed: boolean = book[1];

    if (isBorrowed) {
        console.log(`${title} - Status: Borrowed`);
        borrowedCount++;
    } else {
        console.log(`${title} - Status: Available`);
        availableCount++;
    }
}

console.log(`Total Available Books: ${availableCount}`);
console.log(`Total Borrowed Books: ${borrowedCount}`);