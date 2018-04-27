var books = {};

$(document).ready(function(){
    $('#modal-add-book-ok').on('click', addBookToLibrary);
    var saveBooks = localStorage.getItem('library');
    if (saveBooks) {
        books = JSON.parse(saveBooks);
        console.log(books);
        for( var key in books) {
            drawBook(key);
        }
    }
});

function addBookToLibrary(){
    var formData = $('form').serializeArray();
    // console.log(formData);
    var newArray = {};
    for (key in formData){
        newArray[formData[key]['name']] = formData[key]['value'];
    }
    // console.log(newArray);
    var data = $(this).attr('data');
    if (data == undefined){
        var randomArticle = Math.round(Math.random()*100000);
        books[randomArticle] = newArray;
        //console.log(books);
        drawBook(randomArticle);
    }
    else {
        books[data] = newArray;
        drawBook(data)    
    }
    console.log(books);
    $('#modal-add-book').modal('hide');
    localStorage.setItem('library', JSON.stringify(books));
   
}

function drawBook(article){
    var book = $('.book[data='+article+']');
    if (book.length == 0) {
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

        var buttonEdit = document.createElement('button');
        buttonEdit.className = "btn btn-success edit";
        buttonEdit.innerHTML = 'Edit';
        buttonEdit.setAttribute('data', article);
        buttonEdit.onclick = editBook;

        var buttonDelete = document.createElement('button');
        buttonDelete.className = "btn btn-warning edit";
        buttonDelete.innerHTML = 'Delete';
        buttonDelete.setAttribute('data', article);
        buttonDelete.onclick = deleteBook;

        div.appendChild(cover);
        div.appendChild(bookName);
        div.appendChild(bookYear);
        div.appendChild(buttonEdit);
        div.appendChild(buttonDelete);

        $('.book-panel').append(div);
    }
    else {
        var bookCover = book.find('.book-cover');
        bookCover.css({'background-image': 'url('+books[article]['book-cover']+')'});
        var bookYear = book.find('.book-year').eq(0);
        bookYear.html( books[article]['book-year'] );
        var bookName = book.find('.book-title').eq(0);
        bookName.html( books[article]['book-name'] );
        var bookAuthor = book.find('.book-author').eq(0);
        bookAuthor.html( books[article]['book-author'] );
        $('#modal-add-book-ok').removeAttr('data');
    }
}

function editBook(){
    var data  = $(this).attr('data');
    console.log(data);
    //show modal
    $('#modal-add-book').modal('show');
    $('form #book-name').val(books[data]['book-name']);
    $('form #book-author').val(books[data]['book-author']);
    $('form #book-cover').val(books[data]['book-cover']);
    $('form #book-year').val(books[data]['book-year']);
    $('#modal-add-book-ok').attr('data', data);
}

function deleteBook(){
    $(this).parent('.book').remove();
    var data = $(this).attr('data');
    console.log(data);
    delete books[data];
    console.log(books);
}