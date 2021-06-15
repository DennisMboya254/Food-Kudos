const burger = document.querySelector("#burger");
const sidebar = document.querySelector("#sidebar");
const navwrapper = document.querySelector("#navwrapper");
const nav = document.querySelector("#nav");

burger.addEventListener("click", () => {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
  } else {
    sidebar.classList.add("hidden");
  }
});

function search_recipe() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("listitem");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

function main() {
  let view = document.getElementById("view");
  let exportPDf = document.getElementById("export-pdf");
  exportPDf.onclick = (e) => html2pdf(view);
}

// const linkColor = document.querySelectorAll(".nav__link");

// function colorLink() {
//   if (linkColor) {
//     linkColor.forEach((l) => l.classList.remove("active"));
//     this.classList.add("active");
//   }
// }

// linkColor.forEach((l) => l.addEventListener("click", colorLink));
