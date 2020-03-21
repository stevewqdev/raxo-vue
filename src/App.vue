<template>
  <div id="app">
    <SweepCourtain :key="componentKeyCourtain" />
    <NewLoader />
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
    <CustomCursor :key="componentKeyCursor" />
  </div>
</template>

<!-- Global site tag (gtag.js) - Google Ads: 667386387 -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=AW-667386387"
></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-667386387");
</script>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import CustomCursor from "../src/components/cursor";
import Header from "../src/components/header";
import NewLoader from "../src/components/loader/newLoader";
import SweepCourtain from "../src/components/loader/sweepCourtain";

export default {
  components: {
    CustomCursor,
    Header,
    NewLoader,
    SweepCourtain
  },
  data() {
    return {
      componentKey: 0,
      componentKeyCursor: 1000,
      componentKeyLoader: 200,
      componentKeyCourtain: 300
    };
  },
  watch: {
    $route() {
      document.body.style.overflow = "auto";

      this.forceRerenderCourtain();
      this.forceRerenderCursor();
      setTimeout(
        function() {
          this.transformCursorOnHover();
          this.removeSidebarAnimations();
        }.bind(this),
        1000
      );
      // remove the big circle cursor if the route its no home
      setTimeout(
        function() {
          if (this.$route.path !== "/") {
            setTimeout(function() {
              document
                .querySelector(".cursor")
                .classList.remove("white-cursor");
              document.querySelector(".cursor").classList.remove("its__home");
            }, 500);
          }
        }.bind(this),
        1000
      );
      // Remove animations from sidebar on start
      setTimeout(function() {
        [...document.querySelectorAll("#mySidenav .aos-init")].forEach(
          element => {
            element.classList.remove("aos-animate");
          }
        );
      }, 2000);
    }
  },
  beforeCreate() {
    AOS.init({ disable: "mobile", anchorPlacement: "top-bottom" });
  },
  created() {
    setTimeout(
      function() {
        (function(c, a) {
          if (!a.__SV) {
            var b = window;
            try {
              var d,
                m,
                j,
                k = b.location,
                f = k.hash;
              d = function(a, b) {
                return (m = a.match(RegExp(b + "=([^&]*)"))) ? m[1] : null;
              };
              f &&
                d(f, "state") &&
                ((j = JSON.parse(decodeURIComponent(d(f, "state")))),
                "mpeditor" === j.action &&
                  (b.sessionStorage.setItem("_mpcehash", f),
                  history.replaceState(
                    j.desiredHash || "",
                    c.title,
                    k.pathname + k.search
                  )));
            } catch (n) {}
            var l, h;
            window.mixpanel = a;
            a._i = [];
            a.init = function(b, d, g) {
              function c(b, i) {
                var a = i.split(".");
                2 == a.length && ((b = b[a[0]]), (i = a[1]));
                b[i] = function() {
                  b.push([i].concat(Array.prototype.slice.call(arguments, 0)));
                };
              }
              var e = a;
              "undefined" !== typeof g ? (e = a[g] = []) : (g = "mixpanel");
              e.people = e.people || [];
              e.toString = function(b) {
                var a = "mixpanel";
                "mixpanel" !== g && (a += "." + g);
                b || (a += " (stub)");
                return a;
              };
              e.people.toString = function() {
                return e.toString(1) + ".people (stub)";
              };
              l = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(
                " "
              );
              for (h = 0; h < l.length; h++) c(e, l[h]);
              var f = "set set_once union unset remove delete".split(" ");
              e.get_group = function() {
                function a(c) {
                  b[c] = function() {
                    call2_args = arguments;
                    call2 = [c].concat(
                      Array.prototype.slice.call(call2_args, 0)
                    );
                    e.push([d, call2]);
                  };
                }
                for (
                  var b = {},
                    d = ["get_group"].concat(
                      Array.prototype.slice.call(arguments, 0)
                    ),
                    c = 0;
                  c < f.length;
                  c++
                )
                  a(f[c]);
                return b;
              };
              a._i.push([b, d, g]);
            };
            a.__SV = 1.2;
            b = c.createElement("script");
            b.type = "text/javascript";
            b.async = !0;
            b.src =
              "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL
                ? MIXPANEL_CUSTOM_LIB_URL
                : "file:" === c.location.protocol &&
                  "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(
                    /^\/\//
                  )
                ? "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"
                : "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";
            d = c.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(b, d);
          }
        })(document, window.mixpanel || []);
        mixpanel.init("1fdbe04a390e097c7f1dd5e21e592665");
      }.bind(this),
      1000
    );
  },
  mounted() {
    [...document.querySelectorAll(".logo__black")][0].classList.remove(
      "show__logo"
    );
    [...document.querySelectorAll(".logo__white")][0].classList.add(
      "show__logo"
    );

    // Set menu first Stage
    const menuName = document.querySelector(".menu__icon i");
    document.querySelector(".menu__icon").classList.add("pill__menu");
    menuName.classList.add("menu__name");
    menuName.addEventListener(
      "click",
      function() {
        menuName.classList.remove("menu__name");
        document.querySelector(".menu__icon").classList.remove("pill__menu");
      },
      false
    );

    setTimeout(
      function() {
        this.transformCursorOnHover();
        this.removeSidebarAnimations();
      }.bind(this),
      1000
    );
  },
  methods: {
    forceRerenderCourtain() {
      this.componentKeyCourtain += 1;
    },
    forceRerenderCursor() {
      this.componentKeyCursor += 1;
    },
    removeSidebarAnimations() {
      [...document.querySelectorAll("#mySidenav .aos-init")].forEach(
        element => {
          element.classList.remove("aos-animate");
        }
      );
    },
    transformCursorOnHover() {
      // Menu Cursor changer
      const logo = [...document.querySelectorAll(".logo")];
      const menu = [...document.querySelectorAll(".menu__icon")];
      const buttons = [...document.querySelectorAll("button")];
      const inputElements = [...document.querySelectorAll("input")];
      const otherElements = [...document.querySelectorAll(".team-overlay")];
      const projectsRows = [...document.querySelectorAll(".work_title")];
      const aLinks = [...document.querySelectorAll("a")];
      const menuLinks = [...document.querySelectorAll(".menu__link")];

      const allElements = logo
        .concat(menu)
        .concat(buttons)
        .concat(aLinks)
        .concat(inputElements)
        .concat(otherElements)
        .concat(projectsRows)
        .concat(menuLinks);

      const nextRoute = window.location.pathname;
      if (nextRoute === "/") {
        allElements.forEach(function(element) {
          element.addEventListener("mouseenter", function() {
            const theCursor = document.querySelector(".cursor");
            if (element.classList[0] === "slide-more") {
              theCursor.classList.remove("its__home");
            } else {
              theCursor.classList.add("morphed--cursor");
            }
          });
          element.addEventListener("mouseleave", function() {
            const theCursor = document.querySelector(".cursor");
            if (element.classList[0] === "slide-more") {
              theCursor.classList.add("its__home");
            } else {
              theCursor.classList.remove("morphed--cursor");
            }
          });
        });
      } else {
        allElements.forEach(function(element) {
          element.addEventListener("mouseenter", function() {
            const theCursor = document.querySelector(".cursor");
            theCursor.classList.add("morphed--cursor");
          });
          element.addEventListener("mouseleave", function() {
            const theCursor = document.querySelector(".cursor");
            theCursor.classList.remove("morphed--cursor");
          });
        });
      }
    }
  }
};
</script>

<style>
@font-face {
  font-display: swap; /* or block, swap, fallback, optional */
  font-family: "MarkPro";
  src: url("./assets/fonts/MarkPro-Black.eot");
  src: url("./assets/fonts/MarkPro-Black.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/MarkPro-Black.woff") format("woff"),
    url("./assets/fonts/MarkPro-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-display: swap; /* or block, swap, fallback, optional */
  font-family: "MarkPro";
  src: url("./assets/fonts/MarkPro.eot");
  src: url("./assets/fonts/MarkPro.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/MarkPro.woff2") format("woff2"),
    url("./assets/fonts/MarkPro.woff") format("woff"),
    url("./assets/fonts/MarkPro.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-display: swap; /* or block, swap, fallback, optional */
  font-family: "MarkPro";
  src: url("./assets/fonts/MarkPro-Bold.eot");
  src: url("./assets/fonts/MarkPro-Bold.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/MarkPro-Bold.woff") format("woff"),
    url("./assets/fonts/MarkPro-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-display: swap; /* or block, swap, fallback, optional */
  font-family: "MarkPro-Book";
  src: url("./assets/fonts/MarkPro-Book.eot");
  src: url("./assets/fonts/MarkPro-Book.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/MarkPro-Book.woff") format("woff"),
    url("./assets/fonts/MarkPro-Book.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-display: swap; /* or block, swap, fallback, optional */
  font-family: "MarkPro_1";
  src: url("./assets/fonts/MarkPro_1.eot");
  src: url("./assets/fonts/MarkPro_1.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/MarkPro_1.woff") format("woff"),
    url("./assets/fonts/MarkPro_1.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-display: swap; /* or block, swap, fallback, optional */
  font-family: "MarkPro";
  src: url("./assets/fonts/MarkPro-BoldItalic.eot");
  src: url("./assets/fonts/MarkPro-BoldItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/MarkPro-BoldItalic.woff") format("woff"),
    url("./assets/fonts/MarkPro-BoldItalic.ttf") format("truetype");
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-display: swap; /* or block, swap, fallback, optional */
  font-family: "MarkPro";
  src: url("./assets/fonts/MarkPro-BlackItalic.eot");
  src: url("./assets/fonts/MarkPro-BlackItalic.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/MarkPro-BlackItalic.woff") format("woff"),
    url("./assets/fonts/MarkPro-BlackItalic.ttf") format("truetype");
  font-weight: 900;
  font-style: italic;
}
*::-webkit-scrollbar {
  display: none !important;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.5s;
  transition-delay: 0.5s !important;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
*,
*:hover,
*:focus {
  outline: none !important;
  text-decoration: none !important;
  box-shadow: none !important;
}
a:hover,
a:focus {
  color: #d13368 !important;
}
input:focus {
  outline: none !important;
  box-shadow: none !important;
}
a {
  color: white !important;
  transition: color ease 0.5s;
}
/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}
.fade-enter-active {
  transition-delay: 0.25s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

body {
  font-family: "MarkPro_1", sans-serif;
  font-weight: normal;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background: black;
  cursor: none !important;
}
.body__wrapper {
  transition: opacity 0.7s ease-in-out;
}
.body__wrapper.fade__out {
  opacity: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  pointer-events: none;
}
div {
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 768px) {
  .cursor {
    display: none;
  }
}
.black-icon .menu__name,
.scrolling .menu__name {
  border: solid 2.3px white !important;
}
input,
button,
a {
  cursor: none !important;
}
.section__wrapper {
  position: relative;
  z-index: 10;
}
.section__wrapper.active {
  overflow: hidden;
}
.section__wrapper.active:before {
  content: "";
  width: 100%;
  height: 200vh;
  background: #0000004d;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  animation: show-overlay forwards 0.3s;
}
@keyframes show-overlay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.section__wrapper:before {
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
}
.section__wrapper {
  transition: opacity ease-in-out 0.3s;
}
</style>
