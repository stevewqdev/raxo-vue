/* eslint-disable */
<template>
  <div id="pageHeader">
    <div class="floating-shadow"></div>
    <div class="header__wrapper">
      <div class="navbar__wrapper">
        <!--<div class="trigger__menu" @click="toggleNavbar"></div>-->
        <div class="menu__icon" id="menuControlOpen" @click="toggleNavbar">
          <i><span></span></i>
        </div>
        <div class="frame">
          <div class="logo" data-aos="fade-down" data-aos-delay="600">
            <router-link to="/">
              <img
                class="logo__white"
                src="../assets/raxo-white.svg"
                alt="Raxo-Logo"
              />
              <img
                class="logo__black"
                src="../assets/raxo-black.svg"
                alt="Raxo-Logo"
              />
            </router-link>
          </div>
        </div>
      </div>

      <Sidenav :key="componentKey" />
    </div>
  </div>
</template>

<script>
import Sidenav from "./sidenav";
export default {
  name: "Header",
  components: {
    Sidenav
  },
  watch: {
    $route() {
      if (this.$route.includes("creative-work")) {
        document
          .getElementById("menuControlOpen")
          .classList.add("fixed__menu__button");
      } else {
        document
          .getElementById("menuControlOpen")
          .classList.remove("fixed__menu__button");
      }

      if (this.$route.name !== undefined) {
        setTimeout(function() {
          document.getElementById("cursor").classList.remove("morphed--cursor");
          [
            ...document.querySelectorAll(".cursor__inner--dot")
          ][0].classList.remove("custom-mix-cursor");
        }, 1000);
      }

      document
        .getElementById("menuControlOpen")
        .classList.remove("opened__menu");
      document.getElementById("mySidenav").classList.remove("openedDesktop");
      document.getElementById("mySidenav").classList.remove("openedMobile");
    }
  },
  methods: {
    toggleNavbar() {
      const navbarEl = document.getElementById("mySidenav").classList;
      if (
        navbarEl.contains("openedDesktop") ||
        navbarEl.contains("openedMobile")
      ) {
        document.getElementById("mySidenav").classList.remove("openedDesktop");
        document.getElementById("mySidenav").classList.remove("openedMobile");
        document.querySelector(".menu__icon").classList.remove("opened__menu");
        document.querySelector(".section__wrapper").classList.remove("active");
        [...document.querySelectorAll("#mySidenav .aos-init")].forEach(
          element => {
            element.classList.remove("aos-animate");
          }
        );
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
        const menuName = document.querySelector(".menu__icon i");
        menuName.classList.remove("menu__name");
        document.querySelector(".menu__icon").classList.remove("pill__menu");
        [...document.querySelectorAll("#mySidenav .aos-init")].forEach(
          element => {
            element.classList.add("aos-animate");
          }
        );
        document.querySelector(".section__wrapper").classList.add("active");
        document.querySelector(".menu__icon").classList.add("opened__menu");
        if (window.screen.width > 768) {
          document.getElementById("mySidenav").classList.add("openedDesktop");
        } else {
          document.getElementById("mySidenav").classList.add("openedMobile");
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar__wrapper {
  position: static;
  height: 90px;
  z-index: 9999999;
  background: #ffffff00;
  pointer-events: bounding-box;
}
#menuControlOpen .menu__name {
  width: 75px;
  height: 36px;
  padding: 0px 6px;
  border-radius: 31px;
  background: white;
  font-style: inherit;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.trigger__menu {
  position: absolute;
  width: 200px;
  height: 160px;
  right: 0;
  display: none;
}
#menuControlOpen .menu__name span {
  color: #111;
  font-style: inherit;
  font-size: 13px !important;
  font-family: MarkPro-Book;
  opacity: 1;
  position: relative;
  top: 0;
  left: -24px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.menu__icon i span {
  opacity: 0;
  width: 0;
}
.menu__icon i span:before {
  content: "menu";
  transform: scale(0);
}
.menu__icon i {
  transition: font-size cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    width cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s,
    height cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s 0.6s;
  position: relative;
}
@media (max-width: 4000px) {
  #pageHeader {
    width: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .frame .logo img {
    width: 100px;
    top: 70px;
    position: absolute;
    left: 0;
  }
  .menu__icon i {
    width: 35px;
    height: 35px;
  }
  .menu__icon {
    right: -120px;
    top: 75px;
    z-index: 999999999;
  }
  .nav__links {
    padding-top: 2.5vh;
  }
}
@media (max-width: 3000px) {
  .the__project {
    height: 35vh;
  }
  .menu__icon {
    top: 60px;
  }
}
@media (max-width: 2500px) {
  #pageHeader {
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .menu__icon {
    right: 0px;
    top: 35px;
  }

  .frame .logo img {
    width: 70px;
  }
  .menu__icon i {
    width: 26px;
    height: 26px;
  }
  .frame .logo img {
    left: 0px;
    top: 40px;
    position: absolute;
  }
}
@media (max-width: 2000px) {
  .menu__icon {
    right: 15px;
    top: 25px;
  }
  .frame .logo img {
    position: absolute;
    left: 70px;
    top: 40px;
  }
}

.sidenav {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 9999999;
  top: 0;
  right: 0;
  background-color: #000;
  overflow-x: hidden;
  transition: width 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  padding-bottom: 40px;
}
.sidenav.openedDesktop {
  width: 28vw;
}
.sidenav.openedMobile {
  width: 100vw;
}
#pageHeader {
  position: absolute;
  top: 0;
}
.nav__links {
  padding-top: 7vh;
  padding-left: 5vw;
  font-family: "MarkPro-Book";
  flex-direction: column;
  display: flex;
}
#mySidenav {
  overflow: hidden;
}
#mySidenav small {
  color: white;
  font-weight: bold;
  font-size: 12px;
}
.sidenav a {
  padding: 8px 8px 5px 0px;
  text-decoration: none;
  font-family: "MarkPro-Book";
  font-size: 1.7vw;
  color: #fff;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: #f1f1f1;
  opacity: 0.6;
  text-decoration: none;
}
.sidenav .closebtn {
  color: #fff;
  position: relative;
  top: -15px;
  right: 2px;
  font-size: 44px;
  font-weight: 100;
  margin-left: 50px;
  text-align: right;
  cursor: pointer;
  margin: 14px 18px 0 23px;
  font-weight: bold;
  font-family: "MarkPro-Book";
}
.bottom__links {
  display: flex;
  padding: 0 20px 0 40px;
  position: absolute;
  bottom: 50px;
  justify-content: space-evenly;
  width: 100%;
  text-transform: uppercase;
}
.bottom__links a {
  font-size: 10px;
  letter-spacing: 1px;
}
.menu__icon {
  position: absolute;
  cursor: pointer;
}
.menu__icon i {
  background: transparent;
  display: block;
  border: solid 2.3px #111111;
  border-radius: 50%;
  transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.menu__icon:hover i {
  background: black;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.menu__icon.dark__menu i {
  border: solid 2.3px black;
}
.menu__icon.dark__menu:hover i {
  background: black;
}
.nav__links p,
.nav__links a {
  text-align: left;
  font-family: "MarkPro-Book";
  display: initial;
  width: 110px;
}
.logo__white,
.logo__black {
  transition: all ease-in-out 0.2s;
  opacity: 0;
}
.logo__white.show__logo,
.logo__black.show__logo {
  opacity: 1;
}
.scrolling .logo__white {
  opacity: 0;
}
.scrolling .logo__black {
  opacity: 1;
}

@media (max-width: 768px) {
  .sidenav .nav__links a {
    font-size: 7.7vw;
  }
  .nav__links {
    padding-left: 10vw;
  }
  .frame .logo img {
    left: 50px;
  }
  .trigger__menu {
    position: absolute;
    width: 200px;
    height: 130px;
    right: 0;
    z-index: 9999999999;
    display: block;
  }
}
@media (max-width: 500px) {
  .frame .logo img {
    left: 15px;
    top: 15px;
  }
  .bottom__links {
    bottom: 130px;
    padding: 0 20px 0 20px;
  }
  .sidenav .nav__links a {
    font-size: 7vw;
  }
  .nav__links {
    padding-left: 12vw;
  }
  .nav__links {
    padding-top: 6vh;
  }
  .sidenav .closebtn {
    top: -10px;
    font-size: 45px;
  }
}
</style>
