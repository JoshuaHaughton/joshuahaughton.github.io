let isModalOpen = false;
let contrastToggle = false;

const toggleContrast = () => {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
};

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

const toggleModal = () => {
  isModalOpen
    ? document.body.classList.remove("modal--open")
    : (document.body.classList += " modal--open");

  isModalOpen = !isModalOpen;
};
