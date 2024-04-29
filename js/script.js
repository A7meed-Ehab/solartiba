$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".mynav").addClass("sticky");
    } else {
      $(".mynav").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll").addClass("show");
    } else {
      $(".scroll").removeClass("show");
    }
  });
  $(".scroll").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // dropdown
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".dropdown__menu").addClass("sticky1");
    } else {
      $(".dropdown__menu").removeClass("sticky1");
    }
    if (this.scrollY > 500) {
      $(".scroll").addClass("show");
    } else {
      $(".scroll").removeClass("show");
    }
  });
  // navar/menu
  $(".menu-btn").click(function () {
    $(".mynav .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // owl carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoPlayTimeOut: 2000,
    autoPlayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
// typing Animation
// var typed = new Typed(".typing",{
//     strings: ["Egypt branch" ,"Dubai branch" , "Gambia branch" , ""],
//     typeSpeed:100,
//     backSpeed:60 ,
//     loop: true ,
// });
// var typed = new Typed(".typing-2", {
//   strings: ["Egypt branch", "Dubai branch", "Gambia branch", ""],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

// start loading-overlay
// $(window).load(function () {
//   $("body").css("overflow", "auto");

//   $(".loading-overlay h1").fadeOut(2000, function () {
//     $(this)
//       .parent()
//       .fadeOut(2000, function () {
//         $(this).remove();
//       });
//   });
// });

// slider
// start calculating
// $("#calc").on("click", function () {
//   console.log("Calculating")
//   const { value: ipAddress } =  Swal.fire({
//   title: "Enter your IP address",
//   input: "text",
//   inputLabel: "Your IP address",
//   showCancelButton: true,
//   inputValidator: (value) => {
//     if (!value) {
//       return "You need to write something!";
//     }
//   }
// });
// if (ipAddress) {
//   Swal.fire(`Your IP address is ${ipAddress}`);
// }
// })

$("#calc").on("click", async function () {
  console.log();
  let clacLang = $("#calc").text();
  let lang = "en";
  if (clacLang !== "Calculator")
    lang = "german";
  let data = 10;
  await Swal.fire({
    title: `${lang == "en" ? "Solar Calculator" : "Solarrechner"}`,
    // text: "Modal with a custom image.",
    //  imageUrl: "https://unsplash.it/400/200",

    // imageWidth: 400,
    // imageHeight: 200,
    // imageAlt: "Custom image",
    input: "number",

    html: `
    <img src="images/solar1.jpg" width="400px" height="200px" class="d-block m-auto"/>
   <p class="mt-2">${
     lang == "en" ? "Enter Space in" : "Geben Sie Leerzeichen ein"
   } M²</p>
  `,
  }).then((result) => {
    data = result.value;
  });
  if (data) {
    const res = data / 5;
    let val;
    if (res >= 1 && res <= 20) val = res * 2500;
    else if (res > 20 && res <= 50) val = res * 2000;
    else if (res > 50) val = res * 1700;
    else val = `${
      lang == "en"
        ? "Please enter a valid number"
        : "Bitte geben Sie eine gültige Nummer ein"
    }`;
    Swal.fire(
      `${
        isNaN(val)
          ? val
          : `${lang == "en" ? "Cost" : "kosten"} = ${new Intl.NumberFormat(
              "en-US"
            ).format(val)} CHF.`
      }`
    );
  }
});

// end calculating
