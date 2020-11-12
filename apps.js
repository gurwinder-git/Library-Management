console.log('i am here');

class Books {
    constructor(name, author, bookType) {
        this.nameOV = name;
        this.authorOV = author;
        this.typeOV = bookType;

    }

    add(obj) {
        console.log('you book added', obj);
        let tableBody = document.getElementById('tableBody');
        let tablerows = document.getElementsByClassName('tableRow').length;
        let tableRowHtml = `<tr class="tableRow">
                                <th scope="row">${tablerows + 1}</th>
                                <td>${obj.nameOV}</td>
                                <td>${obj.authorOV}</td>
                                <td>${obj.typeOV}</td>
                             </tr>`
        tableBody.innerHTML = tableBody.innerHTML + tableRowHtml;
    }

    validate(obj) {
        if (obj.nameOV.length < 2 || obj.authorOV.length < 2) {
            if(typeof obj.nameOV != 'string' || typeof obj.authorOV != 'string'){
                return false;
            }
            
        }
        else {
            return true;
        }
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    show(type, message) {
        console.log('iiam in show');
        let alertdiv = document.getElementById('alertdiv');
        alertdiv.innerHTML = `<div class="alert alert-${type} my-3" role="alert">
                                 ${message}
                              </div>
                             `;
        setTimeout(function () {
            alertdiv.innerHTML = ''
        }, 5000);
    }
}


// adding Event listener

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', formSubmit);

function formSubmit(e) {

    let bookNametxt = document.getElementById('bookNametxt').value;
    let authorNametxt = document.getElementById('authorNametxt').value;
    let cookingRadio = document.getElementById('cookingRadio');
    let programmingRadio = document.getElementById('programmingRadio');
    let scienceRadio = document.getElementById('scienceRadio');
    let type;
    if (cookingRadio.checked) {
        type = cookingRadio.value;
        // console.log(type);

    }

    else if (programmingRadio.checked) {
        type = programmingRadio.value;
        // console.log(type);
    }

    else if (scienceRadio.checked) {
        type = scienceRadio.value;
        // console.log(type);

    }

    let bookobj = new Books(bookNametxt, authorNametxt, type);

    if (bookobj.validate(bookobj)) {
        bookobj.add(bookobj);
        bookobj.show('success', 'Your book has been added');
        bookobj.clear();
    }

    else {
        console.log('error');
        bookobj.show('danger', 'Please enter valid input');
    }
    e.preventDefault();
}