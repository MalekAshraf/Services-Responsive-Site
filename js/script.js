window.addEventListener("scroll", function () {
  var skillsSection = document.getElementById("skills-section");
  var sectionPosition = skillsSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (sectionPosition < screenPosition) {
    document.getElementById("html-progress").style.width = "95%";
    document.getElementById("css-progress").style.width = "85%";
    document.getElementById("bootstrap-progress").style.width = "75%";
    document.getElementById("javascript-progress").style.width = "80%";
  }
});
