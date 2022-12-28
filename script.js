"use strict";

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

const closeModal = function (toBeChanged) {
  for (let i = 0; i < modal.length; i++) {
    if (modal[i].dataset.select == toBeChanged) {
      modal[i].classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
};

const openModal = function (toBeChanged) {
  // console.log(`did it work ${toBeChanged}`);

  for (let i = 0; i < modal.length; i++) {
    if (modal[i].dataset.select == toBeChanged) {
      modal[i].classList.remove("hidden");
      overlay.classList.remove("hidden");
    }
  }
};

//btnsCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", () => {
  // going through all the modals are removing from all
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

// btnsOpenModal.map(btn => {...}) this wont work becuase btnsopenmodal is a nodeList and not an array
// use another function inside addEventListener to call a function with param passed in to prevent it from calling
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    openModal(btnsOpenModal[i].dataset.select);
  });
}

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", () => {
    closeModal(btnsOpenModal[i].dataset.select);
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
