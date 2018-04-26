var books = {};

$(document).ready(function(){
    $('#modal-add-book-ok').on('click', addBookToLibrary);
});

function addBookToLibrary(){
    var formData = $('form').serializeArray();
    // console.log(formData);
    var newArray = [];
    for (key in formData){
        newArray[formData[key]['name']] = formData[key]['value'];
    }
    // console.log(newArray);
    var randomArticle = Math.round(Math.random()*100000);
    books[randomArticle] = newArray;
    console.log(books);
    $('#modal-add-book').modal('hide');
    drawBook(randomArticle);
}

function drawBook(article){
    var div = document.createElement('div');
    div.className = "col-lg-3 book";
    div.setAttribute('data', article);

    var cover = document.createElement('div');
    cover.className = "book-cover";
    cover.style.backgroundImage = `url(${books[article]['book-cover']})`;

    var bookName = document.createElement('h4');
    bookName.className = "book-title";
    bookName.innerHTML = books[article]['book-name'];

    var bookYear = document.createElement('p');
    bookYear.className = "book-year";
    bookYear.innerHTML = books[article]['book-year'];

    div.appendChild(cover);
    div.appendChild(bookName);
    div.appendChild(bookYear);

    $('.book-panel').append(div);
}

