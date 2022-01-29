// template_sbg618g

// service_3ke2bn5

// user_Nv7IGGmuawZuYuuauHS6i

const contact = (event) => {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_3ke2bn5",
      "template_sbg618g",
      event.target,
      "user_Nv7IGGmuawZuYuuauHS6i",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch((err) => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at itsjoshuahaughton@gmail.com",
      );
    });
};
