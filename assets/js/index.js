const translateIndex = data => {
  document.getElementById("menuMyProjects").innerHTML = data.MENU_MY_PROJECTS;
  document.getElementById("menuAbout").innerHTML = data.MENU_ABOUT_ME;
  document.getElementById("menuContact").innerHTML = data.CONTACT;
  document.getElementById("presentationText").innerHTML = data.SUBTITLE;
  document.getElementById("typed").innerHTML = data.TITLE;
  document.getElementById("aboutSection").innerHTML =
    data.SECTION_ABOUT_ME_TITLE;
  document.getElementById("aboutSectionText").innerHTML =
    data.SECTION_ABOUT_ME_TEXT;
  document.getElementById("contactTitle").innerHTML = data.CONTACT_TITLE;
  document.getElementById("contactText").innerHTML = data.CONTACT_TEXT;
  document.getElementById("footerQuote").innerHTML = data.FOOTER_TEXT;
  document.getElementById("codeQuote").innerHTML = data.CODEQUOTE;
  document.getElementById("authorQuote").innerHTML = data.AUTHOR;
  document.getElementById("hobbiesTitle").innerHTML = data.HOBBIESTITLE;
  document.getElementById("hireTitle").innerHTML = data.HIRETITLE;
  document.getElementById("hireWorker").innerHTML = data.HIREWORKER;
  document.getElementById("hireWorkerText").innerHTML = data.HIREWORKERP;
  document.getElementById("hirePassionate").innerHTML = data.HIREPASSIONATE;
  document.getElementById("hirePassionateText").innerHTML =
    data.HIREPASSIONATEP;
  document.getElementById("hireLearner").innerHTML = data.HIRELEARNER;
  document.getElementById("hireLearnerText").innerHTML = data.HIRELEARNERP;
  document.getElementById("hireMotivated").innerHTML = data.HIREMOTIVATED;
  document.getElementById("hireMotivatedText").innerHTML = data.HIREMOTIVATEDP;
  document.getElementById("hireIntime").innerHTML = data.HIREINTIME;
  document.getElementById("hireIntimeText").innerHTML = data.HIREINTIMEP;
  document.getElementById("hireTeam").innerHTML = data.HIRETEAMWORK;
  document.getElementById("hireTeamText").innerHTML = data.HIRETEAMWORKP;
  //  document.getElementById("hobbiesTitle").innerHTML = data.HOBBIESTITLE;
};

const translateProjects = data => {
  document.getElementById("menuMyProjects").innerHTML = data.MENU_MY_PROJECTS;
  document.getElementById("menuAbout").innerHTML = data.MENU_ABOUT_ME;
  document.getElementById("menuContact").innerHTML = data.CONTACT;
  document.getElementById("projectsTitle").innerHTML = data.PROJECTS;
  document.getElementById("skillsTitle").innerHTML = data.SKILLS;
  document.getElementById("floatsProject").innerHTML = data.FLOATS_TITLE;
  document.getElementById("floatsProjectText").innerHTML = data.FLOATS_TEXT;
  document.getElementById("whoProject").innerHTML = data.HOW_I_AM_TITLE;
  document.getElementById("whoProjectText").innerHTML = data.HOW_I_AM_TEXT;
  document.getElementById("adminProject").innerHTML = data.ADMINISTRATION_TITLE;
  document.getElementById("adminProjectText").innerHTML =
    data.ADMINISTRATION_TEXT;
  document.getElementById("netflixProject").innerHTML = data.NETFLIX_TITLE;
  document.getElementById("netflixProjectText").innerHTML = data.NETFLIX_TEXT;
  document.getElementById("formProject").innerHTML = data.FORM_TITLE;
  document.getElementById("formProjectText").innerHTML = data.FORM_TEXT;
  document.getElementById("sassProject").innerHTML = data.SASS_TITLE;
  document.getElementById("sassProjectText").innerHTML = data.SASS_TEXT;
  document.getElementById("footerQuote").innerHTML = data.FOOTER_TEXT;
  document.getElementById("faceRecognition").innerHTML = data.FACERECOGNITION;
  document.getElementById("faceRecognitionText").innerHTML =
    data.FACERECOGNITION_TEXT;
};

const translation = (id, lang) => {
  document.getElementById(id).addEventListener("click", function() {
    $.get(lang).done(function(data) {
      if (window.location.href.indexOf("projects") > -1) {
        translateProjects(data);
      } else {
        translateIndex(data);
      }
    });
  });
};
translation("spain", "/assets/translation/es.json");
translation("england", "/assets/translation/en.json");

//FloatingButton
$(document).ready(function() {
  $("#floating-action-button").hide();
});

$(window).scroll(function() {
  var threshold = 300; // number of pixels before bottom of page that you want to start fading
  // var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
  var op = $(window).scrollTop() / threshold;
  if (op <= 0) {
    $("#floating-action-button").hide();
  } else {
    $("#floating-action-button").show();
  }
  $("#floating-action-button").css("opacity", op);
});
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
