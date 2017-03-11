'use strict'

window.$ = window.jQuery = require("jquery");

const init = ()=> {
  let url = localStorage.getItem("md-file-path");

  //cannot set id attribute for section tag. Otherwise, it cannot move
  //to the next slide.
  let slideElement = $("<section></section>");
  $("#slides-holder").append(slideElement);
  if(url === null) {
    $("section").text("No Markdown File Selected");
  }
  else {
    $("section").attr({
      "data-separator-vertical": "^\\|\\|\\|\\|\\|$",
      "data-separator": "^\\-\\-\\-\\-\\>$",
      "data-markdown": url
    });

    console.log("successfully set section properties");
  }
}

init();
