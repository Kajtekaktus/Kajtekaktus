const sectionList = document.querySelectorAll("section");
const menuList = document.querySelectorAll(".main-menu > li");

sectionList.forEach((section) => {
  section.classList.toggle("hidden");
});

menuList.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e);
    menuList.forEach((element2) => {
      element2.classList.remove("clicked");
    });
    e.target.classList.add("clicked");

    sectionList.forEach((section) => {
      console.log(section.classList);
      if (section.classList.contains(e.target.innerHTML)) {
        sectionList.forEach((section2) => {
          section2.classList.add("hidden");
        });
        section.classList.remove("hidden");
        section.classList.add("animate");
      }
    });
  });
});
