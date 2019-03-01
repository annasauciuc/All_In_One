const translateIndex = data => {
  for (const key in data) {
    let ids = document.getElementById(key);
    if (ids) {
      const element = data[key];
      document.getElementById(key).innerHTML = element;
    }
  }
};

const translation = (id, lang) => {
  document.getElementById(id).addEventListener("click", function() {
    $.get(lang).done(function(data) {
      translateIndex(data);
    });
  });
};
translation("spain", "/assets/translation/es.json");
translation("england", "/assets/translation/en.json");

//FloatingButton

const floatingButton = document.querySelector("#floating-action-button");
floatingButton.style.display = "none";
const handleFloatingButton = () => {
  const threshold = 300; // number of pixels before bottom of page that you want to start fading
  const opac = window.scrollY / threshold;
  floatingButton.style.display = "block";

  if (opac <= 0) {
    floatingButton.style.opacity = "0.0";
  } else {
    floatingButton.style.opacity = "1.0";
  }
  floatingButton.style.opacity = `${opac}`;
};
window.addEventListener("scroll", handleFloatingButton);

// To be able to redirect from the projects page , to home page,directly  to the bookmark #id
const navLinks = (navItem, href) => {
  $(navItem).on("click", function() {
    $(this).attr("href", "../../index.html" + href);
  });
};
navLinks("#menuAbout", "#aboutMe");
navLinks("#menuContact", "#contact");

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
