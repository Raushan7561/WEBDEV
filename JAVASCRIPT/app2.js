console.log("✅ app2.js file connected successfully!");

let btn = document.querySelector("button");
let input = document.querySelector("#taskinput");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  let dltbtn = document.createElement("button");
  dltbtn.innerText = "Delete";
  dltbtn.classList.add("delete");

  dltbtn.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(dltbtn);
  ul.appendChild(li);
  input.value = "";
});

// Enable delete for existing tasks
document.querySelectorAll(".delete").forEach((button) => {
  button.addEventListener("click", function() {
    this.parentElement.remove();
  });
});
