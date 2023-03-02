showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
  if(addText.value != ""){
    let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  notesObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  addText.value = "";
  showNotes();
  }

  
});

//function to show all the elements
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="card notecard my-2 mx-2" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${ index}" 
            onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
        </div>`;
  });

  let notesElement = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElement.innerHTML = html;
  } else {
    notesElement.innerHTML = `<h5>Nothing to show! Use "Add Notes" section above to add notes</h5>`;
  }
}

// function to delete a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);//splice(start index, how many elements to delete)
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}


let searchText = document.getElementById("searchText");
searchText.addEventListener("input" , function() {
  let inputVal = searchText.value.toLowerCase();
  let noteCard = document.getElementsByClassName("notecard");
  Array.from(noteCard).forEach(function(element){
    let cardText = element.getElementsByTagName("p")[0].innerText;
    if(cardText.includes(inputVal)){
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  })
})