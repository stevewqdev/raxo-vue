<template>
  <div class="contact__page contact__component section__wrapper">
    <title>Contact Creative Design Studio NYC - Raxo TV</title>
    <meta name="description" content="Seeking a brand new web or digital design for your startup or entertainment industry? Contact Raxo design studio team NYC today! Let’s discuss over a coffee table. Looking to begin a rebrand for your company or design a new website for your startup? Contact Raxo and their design team in NYC today!
    ">
    <div class="contact__page__wrapper">
      <div class="form__wrapper">
        <div class="the__form">
          <form
            @submit="formSubmit"
            action="https://api.staticforms.xyz/submit"
            method="post"
          >
            <input type="text" name="honeypot" style="display:none" />
            <input
              type="hidden"
              name="redirectTo"
              value="https://raxo.tv/#/contact?submit=true"
            />
            <input
              type="hidden"
              name="accessKey"
              value="62da1f83-65ea-424b-94ab-a0d2d15e2e9c"
            />
            <!--  -->
            <div class="user__name step_one input__info">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Hi! What's Your Name?
              </h2>
              <div class="input__wrapper">
                <label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    name="name"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  />
                </label>
              </div>
            </div>
            <div class="company__name step_two input__info">
              <h2 data-aos="fade-up" data-aos-delay="200">
                And What's Your Company?
              </h2>
              <div class="input__wrapper">
                <label>
                  <input
                    v-model="company"
                    type="text"
                    class="form-control"
                    name="$company"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </label>
              </div>
            </div>
            <div class="company__name step_three input__info">
              <h2 data-aos="fade-up" data-aos-delay="200">
                What’s your e-mail?
              </h2>
              <div class="input__wrapper">
                <label>
                  <input
                    v-model="email"
                    type="text"
                    class="form-control"
                    name="email"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </label>
              </div>
            </div>
            <div class="company__name step_four input__info">
              <h2 data-aos="fade-up" data-aos-delay="200">
                Leave us a message
              </h2>
              <div class="input__wrapper">
                <label>
                  <textarea
                    v-model="message"
                    type="text"
                    class="form-control"
                    name="$message"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </label>
              </div>
            </div>
            <div class="form__message">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Perfect!
              </h2>
              <h2 data-aos="fade-up" data-aos-delay="200">
                We Will Contact You <br />
                As Soon As Possible :)
              </h2>
            </div>
            <button
              class="btn form__message__btn"
              data-step="1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Next Step
            </button>
          </form>
        </div>
      </div>
      <div class="contact__info">
        <div class="contact__wrapper">
          <p class="title" data-aos="fade-up" data-aos-delay="200">
            Contact
          </p>
          <a href="mailto:hello@raxo.tv" class="title"
            ><h4 data-aos="fade-up" data-aos-delay="200">hello@raxo.tv</h4></a
          >
          <br />
          <br />
          <p class="title" data-aos="fade-up" data-aos-delay="400">
            Address
          </p>
          <a href="https://goo.gl/maps/9MX7fAvdArozoHBn7" target="_BLANK">
            <h4 class="title" data-aos="fade-up" data-aos-delay="500">
              12 W 32nd St. 5th Floor. <br />
              New York, NY, 10001 <br />
              USA
            </h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      company: "",
      accessKey: "278dd506-a9d7-4c40-a0ea-e20781101478",
      email: "",
      message: ""
    };
  },
  mounted() {
    // Check if form is submitted
    if (this.$route.query.submit) {
      document.querySelector(".step_one").style.display = "none";
      document.querySelector(".step_two").style.display = "none";
      document.querySelector(".form__message").style.display = "block";
      document.querySelector(".btn").innerHTML = "Repeat";
    }
    document.querySelector(".btn").addEventListener("click", function() {
      if (document.querySelector(".btn").innerHTML === "Repeat") {
        document.querySelector(".step_one").style.display = "block";
        document.querySelector(".step_two").style.display = "none";
        document.querySelector(".form__message").style.display = "none";
        document.querySelector(".btn").innerHTML = "Next Step";
        const submitButton = document.querySelector(".btn");
        submitButton.dataset.step = 1;
      }
    });
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      const submitButton = document.querySelector(".btn");

      const currentStep = submitButton.dataset.step;
      if (currentStep === "1") {
        const stepOneInputs = [...document.querySelectorAll(".step_one input")];
        stepOneInputs.forEach(input => {
          if (input.value.length >= 3) {
            input.classList.remove("error__input");
            input.parentElement.classList.remove("label__error");
          } else {
            input.classList.add("error__input");
            input.parentElement.classList.add("label__error");
          }
        });

        if ([...document.querySelectorAll(".error__input")].length < 1) {
          submitButton.dataset.step = 2;
          document.querySelector(".step_one").style.display = "none";
          document.querySelector(".step_three").style.display = "none";
          document.querySelector(".step_four").style.display = "none";
          document.querySelector(".step_two").style.display = "block";
        }
      } else if (currentStep === "2") {
        const stepTwoInputs = [...document.querySelectorAll(".step_two input")];
        stepTwoInputs.forEach(input => {
          if (input.value.length >= 2) {
            input.classList.remove("error__input");
            input.parentElement.classList.remove("label__error");
          } else {
            input.classList.add("error__input");
            input.parentElement.classList.add("label__error");
          }
        });

        if ([...document.querySelectorAll(".error__input")].length < 1) {
          submitButton.dataset.step = 3;
          document.querySelector(".step_one").style.display = "none";
          document.querySelector(".step_three").style.display = "block";
          document.querySelector(".step_four").style.display = "none";
          document.querySelector(".step_two").style.display = "none";
        }
      } else if (currentStep === "3") {
        var stepTwoInputs = [...document.querySelectorAll(".step_three input")];
        stepTwoInputs.forEach(input => {
          if (input.value.length >= 2) {
            input.classList.remove("error__input");
            input.parentElement.classList.remove("label__error");
          } else {
            input.classList.add("error__input");
            input.parentElement.classList.add("label__error");
          }
        });

        if ([...document.querySelectorAll(".error__input")].length < 1) {
          submitButton.dataset.step = 4;
          document.querySelector(".step_one").style.display = "none";
          document.querySelector(".step_three").style.display = "none";
          document.querySelector(".step_four").style.display = "block";
          document.querySelector(".step_two").style.display = "none";
        }
      } else if (currentStep === "4") {
        var stepTwoInputs = [...document.querySelectorAll(".step_three input")];
        stepTwoInputs.forEach(input => {
          if (input.value.length >= 2) {
            input.classList.remove("error__input");
            input.parentElement.classList.remove("label__error");
          } else {
            input.classList.add("error__input");
            input.parentElement.classList.add("label__error");
          }
        });

        if ([...document.querySelectorAll(".error__input")].length < 1) {
          submitButton.dataset.step = 5;

          document.querySelector("form").submit();
        }
      } else if (currentStep === "5") {
        submitButton.dataset.step = 1;
        document.querySelector(".step_one").classList.remove("fadeInUp");
        document.querySelector(".step_one").classList.remove("fadeOutUp");
        document.querySelector(".step_two").classList.remove("fadeInUp");
        document.querySelector(".step_two").classList.remove("fadeOutUp");
        document.querySelector(".step_three").classList.remove("fadeInUp");
        document.querySelector(".step_three").classList.remove("fadeOutUp");
        document.querySelector(".step_four").classList.remove("fadeInUp");
        document.querySelector(".step_four").classList.remove("fadeOutUp");

        document.querySelector("form").classList.remove("fadeInUp");
        document.querySelector("form").classList.remove("fadeOutUp");
        document.querySelector(".form__message").classList.remove("fadeInUp");
        document.querySelector(".form__message").classList.remove("fadeOutUp");
        const allInputs = [...document.querySelectorAll("input")];
        allInputs.forEach(input => {
          input.value = "";
        });
      } else {
        alert("Something goes wrong, please try again in a couple of minutes");
      }
    }
  }
};
</script>

<style scoped>
.form__message {
  display: none;
  text-align: left;
  font-size: 4.1vw;
  text-transform: uppercase;
  font-family: MarkPro;
  font-weight: 900;
  margin: 0;
}
.contact__page {
  background: black;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 4000px) {
  .contact__page__wrapper {
    width: 55%;
    display: flex;
  }
  .the__form {
    padding-left: 2%;
  }
}
@media (max-width: 2000px) {
  .contact__page__wrapper {
    width: 100%;
    display: flex;
  }
  .the__form {
    padding-left: 2%;
  }
}
.the__form {
  overflow: hidden;
}
.form__wrapper {
  background: black;
  color: white;
  min-height: 100vh;
  display: flex;
  padding: 6em 0 0 6em;
  width: 73vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.the__form {
  width: 100%;
}
.the__form input {
  border: none;
  background: transparent;
  border-bottom: solid 2px #4e4e4e;
  font-size: 50px;
  padding: 12px 0;
  color: #4e4e4e;
  text-transform: capitalize;
  font-family: MarkPro;
  margin-right: 22%;
  height: 75px;
  border-radius: 0;
}
.the__form textarea {
  border: none;
  background: transparent;
  border-bottom: solid 2px #4e4e4e;
  font-size: 25px;
  padding: 12px 0;
  color: #4e4e4e;
  text-transform: capitalize;
  font-family: MarkPro;
  margin-right: 22%;
  height: 75px;
  border-radius: 0;
}
.step_four label {
  width: 60%;
}
.contact__info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 27vw;
  padding: 6em 0px;
  text-align: left;
}
.contact__info p {
  margin: 0;
  padding: 16px 0;
  font-family: MarkPro-Book;
  font-size: 9px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.2px;
  pointer-events: none;
}
.contact__info h4 {
  margin: 0;
  font-family: MarkPro;
  font-weight: normal;
  font-size: 20px;
  line-height: 1.5em;
}
.input__info {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.input__info.step_two,
.input__info.step_three,
.input__info.step_four {
  display: none;
}
.input__wrapper {
  max-height: 200px;
  overflow: hidden;
  height: 120px;
}
input.error__input {
  border-bottom: solid 2px #aa4c4c;
}
.input__wrapper label {
  position: relative;
}
.step_one {
  transition: all ease-in-out 0.5s;
}
label.label__error:before {
  content: "Hey! don't leave the field blank :)";
  position: absolute;
  top: 85px;
  font-size: 12px;
  font-family: MarkPro-book;
  animation-name: showFieldMessage;
  animation-duration: 0.3s;
}
@keyframes showFieldMessage {
  from {
    opacity: 0;
    bottom: -30px;
  }
  to {
    opacity: 1;
    bottom: 0px;
  }
}
form {
  display: flex;
  flex-direction: column;
}
form .btn {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: transparent;
  font-family: MarkPro-Book;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-size: 10px;
  margin-top: 120px;
  font-weight: bold;
  cursor: pointer;
  transition: all cubic-bezier(0.86, 0, 0.07, 1) 0.3s !important;
  color: white;
  border: solid 3px white;
}
form .btn:hover {
  background: #ffffff;
  color: black;
  border: solid 3px white;
}
form h2 {
  text-align: left;
  font-size: 4.1vw;
  text-transform: uppercase;
  font-family: MarkPro;
  font-weight: 900;
  margin: 0;
}
.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 0s;
  animation-fill-mode: forwards;
}
input {
  transition: all cubic-bezier(0.86, 0, 0.07, 1) 0.3s;
}
input:focus {
  border-bottom: 2px solid rgb(255, 255, 255);
}
@keyframes fadeOutUp {
  0% {
    opacity: 1;
    top: 0px;
  }
  5% {
    opacity: 0;
    top: 0px;
  }
  100% {
    position: absolute;
    top: -1000px;
    opacity: 0;
  }
}
.input__info.step_two.fadeInUp {
  display: flex;
  animation-name: fadeInUp;
  animation-duration: 0s;
  animation-fill-mode: forwards;
}
.form__message.fadeInUp {
  display: flex;
  flex-direction: column;
  animation-name: fadeInUp;
  animation-duration: 0s;
  animation-fill-mode: forwards;
}
.form__message h2:nth-child(2) {
  margin-top: 25px;
}
@keyframes fadeInUp {
  0% {
    bottom: -1000px;
    opacity: 0;
  }
  100% {
    bottom: 0px;
    opacity: 1;
  }
}
@media (max-width: 500px) {
  .contact__page__wrapper {
    flex-direction: column;
  }
  .form__wrapper {
    padding: 20px 5px;
    width: 100%;
    height: 400px;
    min-height: 540px;
    margin-top: 70px;
  }
  form h2 {
    font-size: 50px;
  }
  .the__form input {
    font-size: 26px;
  }
  .contact__info {
    width: 100%;
    padding: 0 20px 40px;
    background: black;
  }
  form .btn {
    margin-top: 10px;
  }
  .contact__page {
    padding: 0 15px;
  }
  .contact__page__wrapper {
    padding: 0 15px;
  }
}
</style>
<style>
.menu__icon.white-menu i {
  border: solid 2.3px #ffffff;
}
.menu__icon.white-menu:hover i {
  background: transparent;
  transition: 0.3s ease-in;
}
</style>
