const sidebar = document.querySelector(".sidebar");
let selectTitles = document.querySelectorAll(".title");
let selectTitle = document.querySelector(".title");
console.log(selectTitle);
function menuSlide(a) {
  if (!selectTitle) {
    sidebar.classList.toggle("show");
    createList();
    selectTitles.forEach((eachTitle) => {
      eachTitle.classList.toggle("showTitle");
    });
  } else if (selectTitles){
    removeList();
  }
  console.log(selectTitles)
}
function createList() {
  const selectAllLists = document.querySelectorAll(".list");
  selectAllLists.forEach((eachList) => {
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    eachList.appendChild(titleDiv);
    titleDiv.textContent = "Home";
  });
}

function removeList() {
  selectTitles.forEach((eachTitle) => {
    eachTitle.parentNode.removeChild(eachTitle);
  });
}
