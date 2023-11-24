$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu__toggler").click(function () {
    $(this).toggleClass("menu__toggler__active");
    $(".nav-links").toggleClass("menu__toggler__active");
  });
  $(".settings__toggle").click(function () {
    $(this).toggleClass("settings__toggle__active");
    $(".settings__label").toggleClass("settings__toggle__active");
    $(".settings__toggle__close").toggleClass("settings__toggle__active");
    $(".body__overlay").toggleClass("body__overlay__active");
  });
  $(".settings__toggle__close").click(function () {
    $(this).toggleClass("settings__toggle__active");
    $(".settings__label").toggleClass("settings__toggle__active");
    $(".settings__toggle").toggleClass("settings__toggle__active");
    $(".body__overlay").toggleClass("body__overlay__active");
  });
  // $(".color__styled__border").click(function () {
  //   $(this).toggleClass("border__color__active");
  //   $(".first__color__button").addClass("border__color__active__first");
  //   $(".color__styled__border").removeClass("border__color__active__second");
  //   $(".color__styled__border").removeClass("border__color__active__third");
  //   $(".color__styled__border").removeClass("border__color__active__fourth");
  //   $(".color__styled__border").removeClass("border__color__active__fifth");
  // });
  $(".first__color__button").click(function () {
    $(this).toggleClass("border__color__active");
    //border active
    $(".first__color__button").addClass("border__color__active__first");
    $(".color__styled__border").removeClass("border__color__active__second");
    $(".color__styled__border").removeClass("border__color__active__third");
    $(".color__styled__border").removeClass("border__color__active__fourth");
    $(".color__styled__border").removeClass("border__color__active__fifth");
    // profile
    $(".profile__image__svg").addClass("first__color__svg");
    $(".profile__image__svg").removeClass("second__color__svg");
    $(".profile__image__svg").removeClass("third__color__svg");
    $(".profile__image__svg").removeClass("fourth__color__svg");
    $(".profile__image__svg").removeClass("fifth__color__svg");
    //logo color changer
    $(".logo").addClass("first__color__svg");
    $(".logo").removeClass("second__color__svg");
    $(".logo").removeClass("third__color__svg");
    $(".logo").removeClass("fourth__color__svg");
    $(".logo").removeClass("fifth__color__svg");
    // bg colors change
    $(".settings__toggle").addClass("first__color__bg");
    $(".settings__toggle").removeClass("second__color__bg");
    $(".settings__toggle").removeClass("third__color__bg");
    $(".settings__toggle").removeClass("fourth__color__bg");
    $(".settings__toggle").removeClass("fifth__color__bg");
    // contact btn
    $(".contact__btn").addClass("first__color__bg");
    $(".contact__btn").removeClass("second__color__bg");
    $(".contact__btn").removeClass("third__color__bg");
    $(".contact__btn").removeClass("fourth__color__bg");
    $(".contact__btn").removeClass("fifth__color__bg");
    // contact btn
    $(".cv_button").addClass("first__color__bg");
    $(".cv_button").removeClass("second__color__bg");
    $(".cv_button").removeClass("third__color__bg");
    $(".cv_button").removeClass("fourth__color__bg");
    $(".cv_button").removeClass("fifth__color__bg");
    // h1shat
    $(".h1shat").addClass("first__color__h1");
    $(".h1shat").removeClass("second__color__h1");
    $(".h1shat").removeClass("third__color__h1");
    $(".h1shat").removeClass("fourth__color__h1");
    $(".h1shat").removeClass("fifth__color__h1");
    // skills
    $(".skill-per").addClass("first__color__bg");
    $(".skill-per").removeClass("second__color__bg");
    $(".skill-per").removeClass("third__color__bg");
    $(".skill-per").removeClass("fourth__color__bg");
    $(".skill-per").removeClass("fifth__color__bg");
    // services
    $(".services__box__i").addClass("first__color__bg");
    $(".services__box__i").removeClass("second__color__bg");
    $(".services__box__i").removeClass("third__color__bg");
    $(".services__box__i").removeClass("fourth__color__bg");
    $(".services__box__i").removeClass("fifth__color__bg");
    // education
    $(".rounded").addClass("first__color__bg");
    $(".rounded").removeClass("second__color__bg");
    $(".rounded").removeClass("third__color__bg");
    $(".rounded").removeClass("fourth__color__bg");
    $(".rounded").removeClass("fifth__color__bg");
    $(".line").addClass("first__color__bg");
    $(".line").removeClass("second__color__bg");
    $(".line").removeClass("third__color__bg");
    $(".line").removeClass("fourth__color__bg");
    $(".line").removeClass("fifth__color__bg");
    // works
    $(".works__box").addClass("first__color__bg");
    $(".works__box").removeClass("second__color__bg");
    $(".works__box").removeClass("third__color__bg");
    $(".works__box").removeClass("fourth__color__bg");
    $(".works__box").removeClass("fifth__color__bg");
    // contact
    $(".submit__btn").addClass("first__color__bg");
    $(".submit__btn").removeClass("second__color__bg");
    $(".submit__btn").removeClass("third__color__bg");
    $(".submit__btn").removeClass("fourth__color__bg");
    $(".submit__btn").removeClass("fifth__color__bg");
  });

  $(".second__color__button").click(function () {
    $(this).toggleClass("border__color__active");
    //border active
    $(".second__color__button").addClass("border__color__active__second");
    $(".first__color__button").removeClass("border__color__active__first");
    $(".color__styled__border").removeClass("border__color__active__third");
    $(".color__styled__border").removeClass("border__color__active__fourth");
    $(".color__styled__border").removeClass("border__color__active__fifth");
    // profile
    $(".profile__image__svg").addClass("second__color__svg");
    $(".profile__image__svg").removeClass("first__color__svg");
    $(".profile__image__svg").removeClass("third__color__svg");
    $(".profile__image__svg").removeClass("fourth__color__svg");
    $(".profile__image__svg").removeClass("fifth__color__svg");
    //logo color changer
    $(".logo").addClass("second__color__svg");
    $(".logo").removeClass("first__color__svg");
    $(".logo").removeClass("third__color__svg");
    $(".logo").removeClass("fourth__color__svg");
    $(".logo").removeClass("fifth__color__svg");
    // bg colors change
    $(".settings__toggle").addClass("second__color__bg");
    $(".settings__toggle").removeClass("first__color__bg");
    $(".settings__toggle").removeClass("third__color__bg");
    $(".settings__toggle").removeClass("fourth__color__bg");
    $(".settings__toggle").removeClass("fifth__color__bg");

    // contact btn
    $(".contact__btn").addClass("second__color__bg");
    $(".contact__btn").removeClass("fifth__color__bg");
    $(".contact__btn").removeClass("third__color__bg");
    $(".contact__btn").removeClass("fourth__color__bg");
    $(".contact__btn").removeClass("first__color__bg");
    // contact btn
    $(".cv_button").addClass("second__color__bg");
    $(".cv_button").removeClass("first__color__bg");
    $(".cv_button").removeClass("third__color__bg");
    $(".cv_button").removeClass("fourth__color__bg");
    $(".cv_button").removeClass("fifth__color__bg");
    // h1shat
    $(".h1shat").addClass("second__color__h1");
    $(".h1shat").removeClass("fifth__color__h1");
    $(".h1shat").removeClass("third__color__h1");
    $(".h1shat").removeClass("fourth__color__h1");
    $(".h1shat").removeClass("fifth__color__h1");
    // skills
    $(".skill-per").addClass("second__color__bg");
    $(".skill-per").removeClass("first__color__bg");
    $(".skill-per").removeClass("third__color__bg");
    $(".skill-per").removeClass("fourth__color__bg");
    $(".skill-per").removeClass("fifth__color__bg");
    // services
    $(".services__box__i").addClass("second__color__bg");
    $(".services__box__i").removeClass("first__color__bg");
    $(".services__box__i").removeClass("third__color__bg");
    $(".services__box__i").removeClass("fourth__color__bg");
    $(".services__box__i").removeClass("fifth__color__bg");
    // education
    $(".rounded").addClass("second__color__bg");
    $(".rounded").removeClass("first__color__bg");
    $(".rounded").removeClass("third__color__bg");
    $(".rounded").removeClass("fourth__color__bg");
    $(".rounded").removeClass("fifth__color__bg");
    $(".line").addClass("second__color__bg");
    $(".line").removeClass("first__color__bg");
    $(".line").removeClass("third__color__bg");
    $(".line").removeClass("fourth__color__bg");
    $(".line").removeClass("fifth__color__bg");
    // works
    $(".works__box").addClass("second__color__bg");
    $(".works__box").removeClass("first__color__bg");
    $(".works__box").removeClass("third__color__bg");
    $(".works__box").removeClass("fourth__color__bg");
    $(".works__box").removeClass("fifth__color__bg");
    // contact
    $(".submit__btn").addClass("second__color__bg");
    $(".submit__btn").removeClass("first__color__bg");
    $(".submit__btn").removeClass("third__color__bg");
    $(".submit__btn").removeClass("fourth__color__bg");
    $(".submit__btn").removeClass("fifth__color__bg");
  });
  $(".third__color__button").click(function () {
    $(this).toggleClass("border__color__active");
    //border active
    $(".third__color__button").addClass("border__color__active__third");
    $(".first__color__button").removeClass("border__color__active__first");
    $(".second__color__button").removeClass("border__color__active__second");
    $(".color__styled__border").removeClass("border__color__active__fourth");
    $(".color__styled__border").removeClass("border__color__active__fifth");
    // profile
    $(".profile__image__svg").addClass("third__color__svg");
    $(".profile__image__svg").removeClass("first__color__svg");
    $(".profile__image__svg").removeClass("second__color__svg");
    $(".profile__image__svg").removeClass("fourth__color__svg");
    $(".profile__image__svg").removeClass("fifth__color__svg");
    //logo color changer
    $(".logo").addClass("third__color__svg");
    $(".logo").removeClass("first__color__svg");
    $(".logo").removeClass("second__color__svg");
    $(".logo").removeClass("fourth__color__svg");
    $(".logo").removeClass("fifth__color__svg");
    // bg colors change
    $(".settings__toggle").addClass("third__color__bg");
    $(".settings__toggle").removeClass("second__color__bg");
    $(".settings__toggle").removeClass("first__color__bg");
    $(".settings__toggle").removeClass("fourth__color__bg");
    $(".settings__toggle").removeClass("fifth__color__bg");

    // contact btn
    $(".contact__btn").addClass("third__color__bg");
    $(".contact__btn").removeClass("second__color__bg");
    $(".contact__btn").removeClass("fifth__color__bg");
    $(".contact__btn").removeClass("fourth__color__bg");
    $(".contact__btn").removeClass("first__color__bg");

    // contact btn
    $(".cv_button").addClass("third__color__bg");
    $(".cv_button").removeClass("first__color__bg");
    $(".cv_button").removeClass("second__color__bg");
    $(".cv_button").removeClass("fourth__color__bg");
    $(".cv_button").removeClass("fifth__color__bg");

    // h1shat
    $(".h1shat").addClass("third__color__h1");
    $(".h1shat").removeClass("second__color__h1");
    $(".h1shat").removeClass("first__color__h1");
    $(".h1shat").removeClass("fourth__color__h1");
    $(".h1shat").removeClass("fifth__color__h1");

    // skills
    $(".skill-per").addClass("third__color__bg");
    $(".skill-per").removeClass("second__color__bg");
    $(".skill-per").removeClass("first__color__bg");
    $(".skill-per").removeClass("fourth__color__bg");
    $(".skill-per").removeClass("fifth__color__bg");
    // services
    $(".services__box__i").addClass("third__color__bg");
    $(".services__box__i").removeClass("second__color__bg");
    $(".services__box__i").removeClass("first__color__bg");
    $(".services__box__i").removeClass("fourth__color__bg");
    $(".services__box__i").removeClass("fifth__color__bg");
    // education
    $(".rounded").addClass("third__color__bg");
    $(".rounded").removeClass("second__color__bg");
    $(".rounded").removeClass("first__color__bg");
    $(".rounded").removeClass("fourth__color__bg");
    $(".rounded").removeClass("fifth__color__bg");
    $(".line").addClass("third__color__bg");
    $(".line").removeClass("second__color__bg");
    $(".line").removeClass("first__color__bg");
    $(".line").removeClass("fourth__color__bg");
    $(".line").removeClass("fifth__color__bg");

    // works
    $(".works__box").addClass("third__color__bg");
    $(".works__box").removeClass("second__color__bg");
    $(".works__box").removeClass("first__color__bg");
    $(".works__box").removeClass("fourth__color__bg");
    $(".works__box").removeClass("fifth__color__bg");
    // contact
    $(".submit__btn").addClass("third__color__bg");
    $(".submit__btn").removeClass("second__color__bg");
    $(".submit__btn").removeClass("first__color__bg");
    $(".submit__btn").removeClass("fourth__color__bg");
    $(".submit__btn").removeClass("fifth__color__bg");
  });
  $(".fourth__color__button").click(function () {
    $(this).toggleClass("border__color__active");
    //border active
    $(".fourth__color__button").addClass("border__color__active__fourth");
    $(".first__color__button").removeClass("border__color__active__first");
    $(".second__color__button").removeClass("border__color__active__second");
    $(".third__color__button").removeClass("border__color__active__third");
    $(".color__styled__border").removeClass("border__color__active__fifth");
    // profile
    $(".profile__image__svg").addClass("fourth__color__svg");
    $(".profile__image__svg").removeClass("first__color__svg");
    $(".profile__image__svg").removeClass("second__color__svg");
    $(".profile__image__svg").removeClass("third__color__svg");
    $(".profile__image__svg").removeClass("fifth__color__svg");
    //logo color changer
    $(".logo").addClass("fourth__color__svg");
    $(".logo").removeClass("second__color__svg");
    $(".logo").removeClass("third__color__svg");
    $(".logo").removeClass("first__color__svg");
    $(".logo").removeClass("fifth__color__svg");
    // bg colors change
    $(".settings__toggle").addClass("fourth__color__bg");
    $(".settings__toggle").removeClass("second__color__bg");
    $(".settings__toggle").removeClass("third__color__bg");
    $(".settings__toggle").removeClass("first__color__bg");
    $(".settings__toggle").removeClass("fifth__color__bg");
    // contact btn
    $(".contact__btn").addClass("fourth__color__bg");
    $(".contact__btn").removeClass("second__color__bg");
    $(".contact__btn").removeClass("third__color__bg");
    $(".contact__btn").removeClass("fourth__color__bg");
    $(".contact__btn").removeClass("fifth__color__bg");

    // contact btn
    $(".cv_button").addClass("fourth__color__bg");
    $(".cv_button").removeClass("first__color__bg");
    $(".cv_button").removeClass("third__color__bg");
    $(".cv_button").removeClass("second__color__bg");
    $(".cv_button").removeClass("fifth__color__bg");
    // h1shat
    $(".h1shat").addClass("fourth__color__h1");
    $(".h1shat").removeClass("second__color__h1");
    $(".h1shat").removeClass("third__color__h1");
    $(".h1shat").removeClass("first__color__h1");
    $(".h1shat").removeClass("fifth__color__h1");
    // skills
    $(".skill-per").addClass("fourth__color__bg");
    $(".skill-per").removeClass("second__color__bg");
    $(".skill-per").removeClass("third__color__bg");
    $(".skill-per").removeClass("first__color__bg");
    $(".skill-per").removeClass("fifth__color__bg");
    // services
    $(".services__box__i").addClass("fourth__color__bg");
    $(".services__box__i").removeClass("second__color__bg");
    $(".services__box__i").removeClass("third__color__bg");
    $(".services__box__i").removeClass("first__color__bg");
    $(".services__box__i").removeClass("fifth__color__bg");
    // education
    $(".rounded").addClass("fourth__color__bg");
    $(".rounded").removeClass("second__color__bg");
    $(".rounded").removeClass("third__color__bg");
    $(".rounded").removeClass("first__color__bg");
    $(".rounded").removeClass("fifth__color__bg");
    $(".line").addClass("fourth__color__bg");
    $(".line").removeClass("second__color__bg");
    $(".line").removeClass("third__color__bg");
    $(".line").removeClass("first__color__bg");
    $(".line").removeClass("fifth__color__bg");

    // works
    $(".works__box").addClass("fourth__color__bg");
    $(".works__box").removeClass("second__color__bg");
    $(".works__box").removeClass("third__color__bg");
    $(".works__box").removeClass("first__color__bg");
    $(".works__box").removeClass("fifth__color__bg");
    // contact
    $(".submit__btn").addClass("fourth__color__bg");
    $(".submit__btn").removeClass("second__color__bg");
    $(".submit__btn").removeClass("third__color__bg");
    $(".submit__btn").removeClass("first__color__bg");
    $(".submit__btn").removeClass("fifth__color__bg");
  });
  $(".fifth__color__button").click(function () {
    $(this).toggleClass("border__color__active");
    //border active
    $(".fifth__color__button").addClass("border__color__active__fifth");
    $(".first__color__button").removeClass("border__color__active__first");
    $(".second__color__button").removeClass("border__color__active__second");
    $(".third__color__button").removeClass("border__color__active__third");
    $(".fourth__color__button").removeClass("border__color__active__fourth");
    // profile
    $(".profile__image__svg").addClass("fifth__color__svg");
    $(".profile__image__svg").removeClass("first__color__svg");
    $(".profile__image__svg").removeClass("second__color__svg");
    $(".profile__image__svg").removeClass("fourth__color__svg");
    $(".profile__image__svg").removeClass("third__color__svg");
    //logo color changer
    $(".logo").addClass("fifth__color__svg");
    $(".logo").removeClass("second__color__svg");
    $(".logo").removeClass("third__color__svg");
    $(".logo").removeClass("fourth__color__svg");
    $(".logo").removeClass("first__color__svg");
    // bg colors change
    $(".settings__toggle").addClass("fifth__color__bg");
    $(".settings__toggle").removeClass("second__color__bg");
    $(".settings__toggle").removeClass("third__color__bg");
    $(".settings__toggle").removeClass("fourth__color__bg");
    $(".settings__toggle").removeClass("first__color__bg");
    // contact btn
    $(".contact__btn").addClass("fifth__color__bg");
    $(".contact__btn").removeClass("second__color__bg");
    $(".contact__btn").removeClass("third__color__bg");
    $(".contact__btn").removeClass("fourth__color__bg");
    $(".contact__btn").removeClass("first__color__bg");
    // contact btn
    $(".cv_button").addClass("fifth__color__bg");
    $(".cv_button").removeClass("first__color__bg");
    $(".cv_button").removeClass("third__color__bg");
    $(".cv_button").removeClass("fourth__color__bg");
    $(".cv_button").removeClass("second__color__bg");
    // h1shat
    $(".h1shat").addClass("fifth__color__h1");
    $(".h1shat").removeClass("first__color__h1");
    $(".h1shat").removeClass("second__color__h1");
    $(".h1shat").removeClass("third__color__h1");
    $(".h1shat").removeClass("fourth__color__h1");

    // skills
    $(".skill-per").addClass("fifth__color__bg");
    $(".skill-per").removeClass("second__color__bg");
    $(".skill-per").removeClass("third__color__bg");
    $(".skill-per").removeClass("fourth__color__bg");
    $(".skill-per").removeClass("first__color__bg");
    // services
    $(".services__box__i").addClass("fifth__color__bg");
    $(".services__box__i").removeClass("second__color__bg");
    $(".services__box__i").removeClass("third__color__bg");
    $(".services__box__i").removeClass("fourth__color__bg");
    $(".services__box__i").removeClass("first__color__bg");

    // education
    $(".rounded").addClass("fifth__color__bg");
    $(".rounded").removeClass("second__color__bg");
    $(".rounded").removeClass("third__color__bg");
    $(".rounded").removeClass("fourth__color__bg");
    $(".rounded").removeClass("first__color__bg");
    $(".line").addClass("fifth__color__bg");
    $(".line").removeClass("second__color__bg");
    $(".line").removeClass("third__color__bg");
    $(".line").removeClass("fourth__color__bg");
    $(".line").removeClass("first__color__bg");

    // works
    $(".works__box").addClass("fifth__color__bg");
    $(".works__box").removeClass("second__color__bg");
    $(".works__box").removeClass("third__color__bg");
    $(".works__box").removeClass("fourth__color__bg");
    $(".works__box").removeClass("first__color__bg");
    // contact
    $(".submit__btn").addClass("fifth__color__bg");
    $(".submit__btn").removeClass("second__color__bg");
    $(".submit__btn").removeClass("third__color__bg");
    $(".submit__btn").removeClass("fourth__color__bg");
    $(".submit__btn").removeClass("first__color__bg");
  });
});
// sliding bars
$(".skill-per").each(function () {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function () {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
    }
  );
});
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#nav-links a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("nav-links a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

let username = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let sendMsg = document.getElementById("sendMsg");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  // username validation

  if (nameValue === "") {
    setErrorFor(username, "This canot be empty");
  } else if (nameValue.length < 2) {
    setErrorFor(username, "Username need to be longer than 2 characters");
  } else if (nameValue.length > 30) {
    setErrorFor(username, "Username longer than 30 characters");
  } else {
    setSuccessFor(username);
  }

  // email validation
  if (emailValue === "") {
    setErrorFor(email, "This canot be empty");
  } else {
    setSuccessFor(email);
  }
  // subject validation
  if (subjectValue === "") {
    setErrorFor(subject, "This canot be empty");
  } else if (subjectValue.length < 2) {
    setErrorFor(subject, "Username need to be longer than 2 characters");
  } else if (subjectValue.length > 30) {
    setErrorFor(subject, "Username longer than 30 characters");
  } else {
    setSuccessFor(subject);
  }
  // message validation
  if (messageValue === "") {
    setErrorFor(message, "This canot be empty");
  } else if (messageValue.length < 2) {
    setErrorFor(message, "Username need to be longer than 2 characters");
  } else if (messageValue.length > 30) {
    setErrorFor(message, "Username longer than 30 characters");
  } else {
    setSuccessFor(message);
  }
}

function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.classList = "form-control-div success";
}
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.classList = "form-control-div error";
  const smalltext = formControl.querySelector("small");
  smalltext.innerText = message;
}
// send mail

function sendMail() {
  let params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_i7jtus5";
  const templateId = "template_jtr0l9c";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      alert("The message is sent succesfuly");
      console.log(res);
    })
    .catch((err) => alert(err));
}
