const books = [
    {Book:'Train Dreams', Author :'Denis Johnson', Year:2011 },
    {Book:'The Tigers Wife', Author:'Téa Obreht', Year: 2013},
    {Book:'Salvage the Bones', Author:'Jesmyn Ward', Year:2014},
    {Book:'The book Thief', Author:'Markus Zusak', Year:2006},
    {Book:'The Road', Author:'Cormac', Year:2007},
    {Book:'The Kite Runner', Author:'Hosseini', Year:2008},
]

const result1 = books.filter((books) => books.Year < 2010);

console.log("Books published before 2010:",result1);
const result2 = books.filter((book) => book.Year > 2010).map((book)=>({
Book:book.Book,Author:book.Author.toUpperCase(),Year:book.Year
}));
console.log("Books published after 2010:",result2)
