// Hide all dropdowns initially
$(".dropdownSection").hide();

// Store all tutorial and dropdown IDs in arrays
const tutorialIds = ["#tutorial1", "#tutorial2", "#tutorial3"];
const dropdownIds = [
  "#dropdownSection1",
  "#dropdownSection2",
  "#dropdownSection3",
];

// Function to hide all dropdowns except for one
function hideOtherDropdowns(exceptId) {
  dropdownIds.forEach((id) => {
    if (id !== exceptId) {
      $(id).removeClass("show").hide();
    }
  });
}

// Function to show a specific dropdown
function showDropdown(tutorialID, dropdownID) {
  $(tutorialID).click(function () {
    hideOtherDropdowns(dropdownID); // Hide all other dropdowns

    const $dropdown = $(dropdownID);

    if ($dropdown.hasClass("show")) {
      $dropdown.removeClass("show").css("overflow", "hidden");

      $dropdown.animate(
        {
          "max-height": "0",
          opacity: "0",
        },
        900,
        function () {
          $dropdown.hide();
        }
      );
    } else {
      $dropdown.css({
        "max-height": "none",
        display: "block",
      });

      const actualHeight = $dropdown.outerHeight(true);

      $dropdown.css("max-height", "0");

      $dropdown
        .show()
        .addClass("show")
        .animate(
          {
            "max-height": actualHeight + "px",
            opacity: "1",
          },
          900,
          function () {
            // Animation complete, allow overflow content to be visible
            $dropdown.css("overflow", "auto");
          }
        );
    }
  });
}

// Attach click events
tutorialIds.forEach((tutorialID, index) => {
  showDropdown(tutorialID, dropdownIds[index]);
});

function getOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    console.log("Android");
    return "Android";
  }

  // iOS
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    console.log("iOS");
    return "iOS";
  }

  // Mac OS
  if (/Mac OS/.test(userAgent)) {
    console.log("MacOS");
    return "MacOS";
  }

  // Windows OS
  if (/Windows/.test(userAgent)) {
    console.log("Windows");
    return "Windows";
  }

  console.log("Unknown OS");
  return "unknown";
}

// let OSVersion = getOS();

if (OSVersion == "Windows") {
  $(".MacOS").css("display", "none");
  $("#youLikeMacs").css("display", "none");
}
if (OSVersion == "iOS" || OSVersion == "MacOS") {
  $(".tutorial").css("display", "none");
  $("#tutorial2").css("display", "block");
  $("#youLikePCs").css("display", "none");
}

let tutorialLink1 = document.getElementById("tutorialLink1");
let tutorialLink2 = document.getElementById("tutorialLink2");

tutorialLink1.addEventListener("click", function () {
  $(`#tutorial3`).off("click");
  //expand tutorial1Dropdown
  $(`${tutorial1Dropdown}`).toggleClass("show");
});

tutorialLink2.addEventListener("click", function () {
  $(`#tutorial3`).off("click");
  //expand tutorial2Dropdown
  $(`${tutorial2Dropdown}`).toggleClass("show");
});
