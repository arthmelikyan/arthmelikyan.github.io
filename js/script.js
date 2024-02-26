(function (a) {
  "use strict";
  a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var e = a(this.hash);
      if (
        ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")), e.length)
      )
        return (
          a("html, body").animate(
            { scrollTop: e.offset().top - 54 },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
    }
  }),
    a(".js-scroll-trigger").click(function () {
      a(".navbar-collapse").collapse("hide");
    }),
    a("body").scrollspy({ target: "#mainNav", offset: 56 });
  var e = function () {
    a("#mainNav").offset().top > 100
      ? a("#mainNav").addClass("navbar-shrink")
      : a("#mainNav").removeClass("navbar-shrink");
  };
  e(),
    a(window).scroll(e),
    a(".portfolio-modal").on("show.bs.modal", function (e) {
      a(".navbar").addClass("d-none");
    }),
    a(".portfolio-modal").on("hidden.bs.modal", function (e) {
      a(".navbar").removeClass("d-none");
    });
})(jQuery);

new Typed("#typetext", {
  strings: [
    "Welcome to my CV page",
    "I am Arthur",
    "I am a <strong>WEB</strong> developer",
  ],
  typeSpeed: 70,
  backSpeed: 300,
  cursorChar: "_",
  fadeOut: !0,
  loop: !0,
});

$("#contact-form").on("submit", function (e) {
  e.preventDefault();

  let btn = $(this).find('#send-email');
  let message = $("#message").val();
  let subject = $("#subject").val();
  let email = $("#email").val();
  btn.prop("disabled", true);

  axios
    .post("https://py.elaserlondon.com/contact/send", {
        email: email,
        subject: subject,
        message: message,
        type: "a"
     })
    .then((data) => {
        $("#message").val("");
        $("#subject").val("");
        $("#email").val("");
        btn.prop("disabled", false);
        showToast(data.data.message);
    })
    .catch((error) => {
      setTimeout(() => {
        btn.prop("disabled", false);
      }, 1000);

      if (error.response.data) {
        showToast(Object.keys(error.response.data)[0].toUpperCase() + ': ' + error.response.data[Object.keys(error.response.data)[0]], "error");
        return false;
      }

      showToast("something wrong...", "error");
      // location.reload();
    });
});

function showToast(message, type = "success") {
  let bg = "linear-gradient(to right, #00b09b, #96c93d)";

  if (type === "error") {
    bg = "linear-gradient(to right, #880808, #CC5500)";
  }

  Toastify({
    text: message,
    style: {
      background: bg,
    },
  }).showToast();
}

function makePlural(word, numb) {
  return `${numb} ${word}${numb > 1 ? "s" : ""}`;
}

function getExperience(firstJobDate) {
  let years = moment().diff(moment(firstJobDate, "DD-MM-YYYY"), "years");
  let months =
    moment().diff(moment(firstJobDate, "DD-MM-YYYY"), "months") - years * 12;
  let daysLeft =
    moment().daysInMonth() -
    moment()
      .subtract(months, "months")
      .subtract(years, "years")
      .diff(moment(firstJobDate, "DD-MM-YYYY"), "days");

  console.log(`${daysLeft} days remaining`);
  return `${years} years ${
    months ? "& " + makePlural("month", months) : ""
  } of hardworking`;
}

let experience = $("#experience-counter");

experience.text(getExperience(experience.attr("data-from")));
