window.onload = function() {
  var header = document.querySelector(".j-header");
  var switcher = document.querySelector(".j-menu-open");
  var popup = document.querySelector(".j-modal");
  var popupOpen = document.querySelectorAll(".j-modal-open");

  header.classList.remove("page-header--nojs");
  popup.classList.remove("modal--nojs");

  switcher.addEventListener("click", function() {
    if (header.classList.contains("page-header--nojs")) {
      header.classList.remove("page-header--nojs");
    } else {
      header.classList.add("page-header--nojs");
    }
  });

  for (var i = 0; i < popupOpen.length; i++) {
    popupOpen[i].addEventListener("click", function() {
      popup.classList.add("modal--active");
    });
    document.querySelector(".modal__button").addEventListener("click", function() {
      popup.classList.remove("modal--active");
    });
    popup.addEventListener("click", function(event){
      var target = event.target;
      if (target.closest(".modal__form") && !target.closest(".modal__button")) {
        event.stopPropagation();
      }
      else {
        popup.classList.remove("modal--active");
      }
    });
  }
}

(function(ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) {return null}
    else return this.parentElement.closest(selector)
  };
}(Element.prototype));
