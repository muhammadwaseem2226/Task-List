const taskform = document.querySelector("#task-form");

const inputFeild = document.querySelector("#task");

const collection = document.querySelector(".collection");

const collectionItem = document.querySelector(".collection-item");

const filterInput = document.querySelector("#filter");

taskform.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputFeildValue = inputFeild.value;
  if (!inputFeildValue) {
    return alert("please fill the input feild");
  }

  const htmlList = `<a class="delete-item secondary-content"
  ><i class="fa fa-remove"></i
  ></a>`;
  const createLi = document.createElement("li");
  createLi.className = "collection-item";
  createLi.innerHTML += `${inputFeildValue} ${htmlList}`;

  collection.append(createLi);
  inputFeild.value = "";
});
collection.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;

  if (currentElement.className == "fa fa-remove") {
    currentElement.parentElement.parentElement.remove();
  }
});
filterInput.addEventListener("keyup", function (e) {
  const currentElement = e.target;

  const filterTaskInputValue = currentElement.value;

  const singleItemsCollection = document.querySelectorAll(".collection-item");

  singleItemsCollection.forEach(function (singleTask) {
    if (
      singleTask.innerText
        .toLowerCase()
        .indexOf(filterTaskInputValue.toLowerCase()) === -1
    ) {
      singleTask.style.display = "none";
    } else {
      singleTask.style.display = "block";
    }
  });
});
