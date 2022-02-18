console.log('welcome to notes app. This is app.js');
showNotes();
// if user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addText.value = "";
   // console.log(notesobj);
    showNotes();
});
// function to show notes element ...
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = " ";
    notesobj.forEach(function (element, index) {
        html += `
        <div class=" noteCard my-2 mx-3 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">NOTE ${index + 1}</h5>
         
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote (this.id)" class="btn btn-primary"> Delete notes</button>
         </div>
        
      </div>
               `;
    });
    let notesElm = document.getElementById(`notes`);
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! use "Add a Note"section above to add notes`
    }
}
// function to delete 
function deleteNote(index) {
   // console.log('i am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
let search = document.getElementById('searchText');
search.addEventListener("input", function () {


    let inputVal = search.value.tolLowerCase;
    //console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputVal)) {
            element.style.display = "block";
 }
         else {
            element.style.display = "none";

        }
        // console.log(cardText);

    })
})
