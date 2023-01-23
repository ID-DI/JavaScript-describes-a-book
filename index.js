//BOOK SECTION
class Book 
{
    constructor (_bookTitle, _bookAuthor, _currentPage, _maxPages)
    {
        this.bookTitle = _bookTitle;
        this.bookAuthor = _bookAuthor;
        this.currentPage = _currentPage;
        this.maxPages = _maxPages; 
    }
}

const bookArray = []

let newBook1 = new Book('Eugene Onegin', 'Alexander Pushkin', 310, 310)
let newBook2 = new Book('Baudolino', 'Umberto Eco', 257, 565)
let newBook3 = new Book('The Silmarillion', 'J.R.R.Tolkien', 365, 365)
let newBook4 = new Book('The Bible', 'Various', 987, 1200)
let newBook5 = new Book('It', 'Stephen King', 0, 1138)
let newBook6 = new Book('David Copperfield', 'Charles Dickens', 1022, 1024)
let newBook7 = new Book('Lord of the Flies', 'William Golding', 224, 224)
bookArray.push(newBook1, newBook2, newBook3, newBook4, newBook5, newBook6, newBook7)


//FUNCTION SECTION
function printAllBooks(bookArray)
{
    const resultsDiv = document.getElementById('allBooks')

    bookArray.forEach((Book, index) => {
    resultsDiv.innerHTML = ''})

    bookArray.forEach((Book, index) => {
        document.getElementById('allBooks').innerHTML += 
        `<li><span class='font-weight-bold'>"${Book.bookTitle}"</span> by <span class='font-italic'>${Book.bookAuthor}</span></li>`
    })
}

function printStatusBooks(bookArray) 
{
    document.getElementById('bookStatus').innerHTML =''
    bookArray.forEach((Book, index)=>{
        if(Book.currentPage === Book.maxPages)
        {
            document.getElementById('bookStatus').innerHTML+=
            `<li class = "text-success">You already read <span class='font-weight-bold'>"${Book.bookTitle}"</span> by <span class='font-italic'>${Book.bookAuthor}</span></li>`
        }
        else
        {
            document.getElementById('bookStatus').innerHTML+=
            `<li class = "text-danger">You still need to read <span class='font-weight-bold'>"${Book.bookTitle}"</span> by <span class='font-italic'>${Book.bookAuthor}</span></li>` 
        }
    })
}


function printDataTable(bookArray)
{
    document.getElementById('tableData').innerHTML =''

    bookArray.forEach((Book, index)=>{
        {
            document.getElementById('tableData').innerHTML+=
            `<tr class ="border">
                <td class="px-md-3 py-1">${Book.bookTitle}</td> 
                <td class="px-md-3 py-1">${Book.bookAuthor}</td> 
                <td class="px-md-3 py-1">${Book.maxPages}</td> 
                <td class="px-md-3 py-1">${Book.currentPage}</td>
                <td>
                    <div class='progress'>
                        <div class='progressInner' style='width: ${Math.floor((Book.currentPage / Book.maxPages) * 100)}%'>
                        <p class='pTag text-center mt-2 font-weight-bold'>${Math.floor((Book.currentPage / Book.maxPages) * 100)}%</p>
                        </div>
                    </div>
                </td>
            </tr>`
        }
    })
}

{/* <td class="px-md-3 py-1" id = "newPage">
<div class = 'text-center d-flex mx-0'> 
    <input type="text" class="form-control w-25" id="newPageNum">
    <button type="button" class="btn btn-outline-primary" onclick="updateCurrentPage()">Update page</button> 
</div>
</td> */}
// function updateCurrentPage() 
// {
//     var newPageNumber = document.getElementById('newPageNum').value
//     bookArray.forEach((Book, index)=>{
//         console.log('new number', newPageNumber)
//         if (Book.maxPages < newPageNumber)
//         {
//             document.getElementById('progress').innerHTML =''
//             document.getElementById('progress').innerHTML+=`
//             <div class='progressInner' style='width: ${Math.floor((Book.currentPage / Book.maxPages) * 100)}%'>
//             <p class='pTag text-center mt-2 font-weight-bold'>${Math.floor((Book.currentPage / Book.maxPages) * 100)}%</p>
//             </div>
//            `
//         } 
//     })
//  newPageNumber = ''
// }

printAllBooks(bookArray);
printStatusBooks(bookArray);
printDataTable(bookArray);
// updateCurrentPage(bookArray);

//FORM SECTION
const addNewBookForm = document.getElementById('addBook');
function handleAddNewBook(e)
{
    e.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value
    const bookAuthor = document.getElementById('bookAuthor').value
    const currentPage = document.getElementById('currentPage').value
    const maxPages = document.getElementById('maxPages').value

    document.getElementById('warningEmptyInput').textContent =''
    if(bookTitle.length < 2 || bookAuthor.length < 4 || currentPage === null || maxPages === null)
    {
        document.getElementById('warningEmptyInput').textContent = 'Fill all the fields before adding the book.'
        return
    }
    bookArray.forEach(function(value, index)
    {
        if(value.bookTitle == bookTitle)
        {
            document.getElementById('warningEmptyInput').textContent = `You already have book with the title - "${bookTitle}" in your library.`
            return{break:forEach} 
        }
    })
    
    let newBook = new Book(bookTitle, bookAuthor, currentPage, maxPages)
    bookArray.push(newBook)
    printAllBooks(bookArray);
    printStatusBooks(bookArray);
    printDataTable(bookArray); 

    document.getElementById('bookTitle').value = ''
    document.getElementById('bookAuthor').value = ''
    document.getElementById('currentPage').value = null
    document.getElementById('maxPages').value = null   
}

addNewBookForm.addEventListener('submit', handleAddNewBook)

