document.addEventListener("DOMContentLoaded", () => {
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

    //if you close any section scroll up to #page-content
    $("html, body").animate(
      {
        scrollTop: $("#page-content").offset().top,
      },
      1000
    );
  }

  // Function to show a specific dropdown
  function showDropdown(tutorialID, dropdownID) {
    $(tutorialID).click(function () {
      hideOtherDropdowns(dropdownID); // Hide all other dropdowns

      const $dropdown = $(dropdownID);
      //fade in the dropdown over 5 while allow the animation to run

      $dropdown.css("opacity", "0").show();

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
            1200,
            function () {
              // Animation complete, allow overflow content to be visible
              $dropdown.css("overflow", "auto");
            }
          );
        // Additional code for scrolling to the top of this dropdown
        $("html, body").animate(
          {
            scrollTop: $dropdown.offset().top,
          },
          1000
        );
      }
    });
  }

  // Attach click events
  tutorialIds.forEach((tutorialID, index) => {
    showDropdown(tutorialID, dropdownIds[index]);
  });

  //Don't allow the progress bar method to run unless a tutorial has been clicked
  function checkIfTutorialClicked() {
    //have an event listener for each tutorial and if it's clicked, set a variable to true
    let tutorial1Clicked = false;
    let tutorial2Clicked = false;
    let tutorial3Clicked = false;

    $("#tutorial1").click(function () {
      console.log("tutorial1 clicked");
      tutorial1Clicked = true;
      progressBar();
    });
    $("#tutorial2").click(function () {
      tutorial2Clicked = true;
      progressBar();
    });
    $("#tutorial3").click(function () {
      tutorial3Clicked = true;
      progressBar();
    });
  }

  checkIfTutorialClicked();

  function progressBar() {
    $(window).on("scroll", function () {
      var winScroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var scrolled = (winScroll / height) * 100;
      // prevent value from going past 100
      if (scrolled > 100) {
        scrolled = 100;
      }
      let progressBar = document.getElementById("progress-bar");
      let progressBarValue = (progressBar.style.width = scrolled + "%");

      if (scrolled > 98) {
        progressBarValue = "100";
      }

      //if $("#progress-bar").css("width", scrolled + "%"); is 100% then display fireworks
      // console.log("Progress:", progressBarValue);
      //convert the string% to a number
      progressBarValue = parseInt(progressBarValue);

      if (progressBarValue > 99) {
        console.log("Fireworks!");
      }
    });
  }

  //Get OS function
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
      return "Windows";
    }

    console.log("Unknown OS");
    return "unknown";
  }

  let OSVersion = getOS();

  if (OSVersion == "Windows") {
    console.log("...Looking out the window.");
  }
  if (OSVersion == "iOS" || OSVersion == "MacOS") {
    console.log("...biting the apple.");
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

  // Error Handling Example
  try {
    // Code that might throw an error
  } catch (error) {
    console.error("An error occurred: ", error);
  }
});
