window.onscroll = function () {
    myFunction();
  };
  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth", // 👈
    });
  }

  function scrollToContent(id) {
    closeNav();
    setTimeout(async () => {
      console.log(id);
      await document.getElementById(id).scrollIntoView();
      if (id == "services") {
        window.scrollBy(0, -100);
      } else {
        window.scrollBy(0, -50);
      }

      // document.getElementById(id).scrollTop = 500;
      // console.log(document.getElementById(id).scrollTop);
    }, 0);
  }

  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  document.querySelector(".upArrow").style.display = "none";
  function myFunction() {
    if (window.scrollY > sticky) {
      if (!header.classList.contains("sticky")) {
        header.classList.add("sticky");
        document.querySelector(".main-pic").style.marginTop = "70px";
        document.querySelector(".upArrow").style.display = "block";
      }
    } else {
      header.classList.remove("sticky");
      document.querySelector(".main-pic").style.marginTop = "0px";
      document.querySelector(".upArrow").style.display = "none";
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  $(document).ready(function () {
    // Images loaded is zero because we're going to process a new set of images.
    var imagesLoaded = 0;
    // Total images is still the total number of <img> elements on the page.
    var totalImages = $("img").length;

    // Step through each image in the DOM, clone it, attach an onload event
    // listener, then set its source to the source of the original image. When
    // that new image has loaded, fire the imageLoaded() callback.
    $("img").each(function (idx, img) {
      $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
    });

    // Do exactly as we had before -- increment the loaded count and if all are
    // loaded, call the allImagesLoaded() function.
    function imageLoaded() {
      imagesLoaded++;
      if (imagesLoaded == totalImages) {
        allImagesLoaded();
      }
    }

    function allImagesLoaded() {
      document.querySelector(".overlay").style.display = "none";
    }
  });