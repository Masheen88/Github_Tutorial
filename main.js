$("#dropdownSection1").css("display", "none");

let tutorial1 = "#tutorial1";
let tutorial1Dropdown = "#dropdownSection1";
showDropdown(tutorial1, tutorial1Dropdown);
let tutorial2 = "#tutorial2";
let tutorial2Dropdown = "#dropdownSection2";
showDropdown(tutorial2, tutorial2Dropdown);

let tutorial3 = "#tutorial3";
let tutorial3Dropdown = "#dropdownSection3";
showDropdown(tutorial3, tutorial3Dropdown);

function showDropdown(tutorialID, tutorialDropdownID) {
  console.log("Showing dropdown ID:", tutorialID, tutorialDropdownID);

  $(`${tutorialID}`).click(function () {
    $(`${tutorialDropdownID}`).toggleClass("show");

    if ($(`${tutorialDropdownID}`).hasClass("show")) {
      $(`${tutorialDropdownID}`).fadeIn(900);
      $(`${tutorialDropdownID}`).css("display", "block");
    } else {
      $(`${tutorialDropdownID}`).fadeOut(800);
      //display none after fadeout with delay
      setTimeout(function () {
        $(`${tutorialDropdownID}`).css("display", "none");
      }, 900);
    }
  });
}
