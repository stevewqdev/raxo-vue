<template :key="componentKey">
  <div
    class="project__block project__component section__wrapper project__internal__page"
  >
    <title>
      Raxo Professional Design Work Portfolio of Motion Graphics, Animation
    </title>
    <meta
      name="description"
      content="Browse our top work portfolio of motion graphics, digital marketing, graphic design, professional web and animation design. Contact Raxo team to discuss your project."
    />
    <meta
      name="keyword"
      content="motion graphics portfolio, digital marketing portfolio, graphic design portfolio, professional design work, animation design portfolio"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Awake v-if="['awake'].includes($route.name)"></Awake>
    <SmartCities
      v-else-if="['smart-cities'].includes($route.name)"
    ></SmartCities>
    <Showtime v-else-if="['showtime'].includes($route.name)"></Showtime>
    <Allocate v-else-if="['allocate'].includes($route.name)"></Allocate>
    <Humanified
      v-else-if="
        ['humanifed-branding-web-design-app-development'].includes($route.name)
      "
    ></Humanified>
    <Ultra
      v-else-if="
        ['ultra-music-animation-design-web-development'].includes($route.name)
      "
    ></Ultra>
    <LondonCalling
      v-else-if="
        ['bbc-entertainment-london-calling-design'].includes($route.name)
      "
    ></LondonCalling>
    <Yankees
      v-else-if="['yankees-creative-design'].includes($route.name)"
    ></Yankees>
    <Univision
      v-else-if="
        ['univision-election-design-animation-tv'].includes($route.name)
      "
    ></Univision>
    <theLongWay
      v-else-if="
        ['the-long-way-back-entertainment-design-animation'].includes(
          $route.name
        )
      "
    ></theLongWay>
    <SteelBridge
      v-else-if="
        ['steelbridge-labs-incubator-branding-web-design'].includes($route.name)
      "
    ></SteelBridge>
    <theDepartment
      v-else-if="
        ['the-department-design-web-development'].includes($route.name)
      "
    ></theDepartment>
    <SimplyIraIralogix
      v-else-if="
        ['simply-ira-iralogix-branding-design-web'].includes($route.name)
      "
    ></SimplyIraIralogix>
    <Sambazon
      v-else-if="['sambazon-design-animation'].includes($route.name)"
    ></Sambazon>
    <Quantgene
      v-else-if="['quantgene-is-a-cell-free-platform'].includes($route.name)"
    ></Quantgene>
    <Pluto
      v-else-if="
        ['pluto-tv-is-an-Internet-based-television'].includes($route.name)
      "
    ></Pluto>
    <Oracle
      v-else-if="
        ['oracle-cloud-hero-marketing-design-web-development'].includes(
          $route.name
        )
      "
    ></Oracle>
    <Onboard
      v-else-if="
        ['onboard-informatics-design-web-development'].includes($route.name)
      "
    ></Onboard>
    <Lufthansa
      v-else-if="
        ['lufthansa-creative-design-web-development'].includes($route.name)
      "
    ></Lufthansa>
    <LeCordonBleu
      v-else-if="
        ['le-cordon-bleu-creative-design-web-development'].includes($route.name)
      "
    ></LeCordonBleu>
    <Indago
      v-else-if="['indago-design-animation'].includes($route.name)"
    ></Indago>
    <HugoBoss
      v-else-if="['hugo-boss-design-animation'].includes($route.name)"
    ></HugoBoss>
    <GlobalPress
      v-else-if="['global-press-design'].includes($route.name)"
    ></GlobalPress>
    <Fusion
      v-else-if="['fusion-beauty-creative-packaging'].includes($route.name)"
    ></Fusion>
    <EntertainmentMina
      v-else-if="
        ['bbc-entertainment-mina-jack-animation-design-tv'].includes(
          $route.name
        )
      "
    ></EntertainmentMina>
    <Coloredge
      v-else-if="['coloredge-is-a-unique-media-company'].includes($route.name)"
    ></Coloredge>
    <CityCancer
      v-else-if="['city-cancer-challenge'].includes($route.name)"
    ></CityCancer>
    <Cbeebies
      v-else-if="['bbc-entertainment-cbeebies-creative'].includes($route.name)"
    ></Cbeebies>
    <BbcEntertainment
      v-else-if="
        ['bbc-entertainment-design-animation-tv'].includes($route.name)
      "
    ></BbcEntertainment>
    <BaseWeb
      v-else-if="['base-develops-and-manages'].includes($route.name)"
    ></BaseWeb>
    <RockSummer
      v-else-if="['rock-summer-is-an-initiative-started'].includes($route.name)"
    ></RockSummer>
    <FirstKey
      v-else-if="
        ['first-key-homes-strategy-design-web-development'].includes(
          $route.name
        )
      "
    ></FirstKey>
    <Engine
      v-else-if="
        ['engine-shop-branding-design-web-development'].includes($route.name)
      "
    ></Engine>
    <Sermo
      v-else-if="
        ['sermo-branding-design-web-development'].includes($route.name)
      "
    ></Sermo>
    <EntertainmentHd
      v-else-if="
        ['bbc-entertainment-HD-design-animation-tv'].includes($route.name)
      "
    ></EntertainmentHd>
    <Investigation
      v-else-if="
        ['investigation-13-entertainment-design-animation'].includes(
          $route.name
        )
      "
    ></Investigation>
    <RTW v-else-if="['repair-the-world'].includes($route.name)"></RTW>
    <Clearvuze v-else-if="['clearvuze'].includes($route.name)"></Clearvuze>
  </div>
</template>

<style src="../assets/projects/css/plugins.css"></style>
<style src="../assets/projects/css/style.css"></style>
<style src="../assets/projects/css/bootstrap.min.css"></style>
<script
  src="//script.crazyegg.com/pages/scripts/0078/3474.js"
  async="async"
></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-vue@2.0.1/dist/bootstrap-vue.common.min.js"></script>
<script src="../assets/projects/js/menu-js.js"></script>
<script src="../assets/projects/js/plugins.js" type="text/javascript"></script>
<script src="../assets/projects/js/script.js"></script>
<script src="../assets/projects/js/parallax.js" type="text/javascript"></script>
<style scoped></style>
<!-- start Mixpanel -->
<script type="text/javascript">
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
            call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
            e.push([d, call2]);
          };
        }
        for (
          var b = {},
            d = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)),
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
          "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)
        ? "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"
        : "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";
    d = c.getElementsByTagName("script")[0];
    d.parentNode.insertBefore(b, d);
  }
})(document, window.mixpanel || []);
mixpanel.init("1fdbe04a390e097c7f1dd5e21e592665");
</script>
<!-- end Mixpanel -->
<script>
const Allocate = () => import("@/components/projects/allocate");
const Awake = () => import("@/components/projects/awake");
const SmartCities = () => import("@/components/projects/smartCities");
const Humanified = () => import("@/components/projects/humanified");
const BaseWeb = () => import("@/components/projects/base");
const Ultra = () => import("@/components/projects/ultra-music");
const LondonCalling = () => import("@/components/projects/londonCalling");
const Showtime = () => import("@/components/projects/showtime");
const BbcEntertainment = () => import("@/components/projects/bbcEntertainment");
const Cbeebies = () => import("@/components/projects/cbeebies");
const CityCancer = () => import("@/components/projects/cityCancer");
const Coloredge = () => import("@/components/projects/coloredge");
const Engine = () => import("@/components/projects/engine");
const EntertainmentHd = () => import("@/components/projects/entertainmentHD");
const EntertainmentMina = () =>
  import("@/components/projects/entertainmentMina");
const FirstKey = () => import("@/components/projects/firstKey");
const Fusion = () => import("@/components/projects/fusion");
const GlobalPress = () => import("@/components/projects/globalPress");
const HugoBoss = () => import("@/components/projects/hugoBoss");
const Indago = () => import("@/components/projects/indago");
const LeCordonBleu = () => import("@/components/projects/leCordonBleu");
const Lufthansa = () => import("@/components/projects/lufthansa");
const Onboard = () => import("@/components/projects/onboard");
const Oracle = () => import("@/components/projects/oracle");
const Pluto = () => import("@/components/projects/pluto");
const Quantgene = () => import("@/components/projects/quantgene");
const RockSummer = () => import("@/components/projects/rockSummer");
const Sambazon = () => import("@/components/projects/sambazon");
const Sermo = () => import("@/components/projects/sermo");
const SimplyIraIralogix = () =>
  import("@/components/projects/simplyIraIralogix");
const SteelBridge = () => import("@/components/projects/steelbridge");
const theDepartment = () => import("@/components/projects/theDepartment");
const theLongWay = () => import("@/components/projects/theLongWay");
const Univision = () => import("@/components/projects/univision");
const Yankees = () => import("@/components/projects/yankees");
const Investigation = () => import("@/components/projects/investigation");
const RTW = () => import("@/components/projects/repairTheWorld");
const Clearvuze = () => import("@/components/projects/clearvuze");

import AOS from "aos";

export default {
  name: "Projects",
  components: {
    Sermo,
    BaseWeb,
    Yankees,
    Univision,
    theLongWay,
    SteelBridge,
    theDepartment,
    SimplyIraIralogix,
    Sambazon,
    RockSummer,
    Quantgene,
    Pluto,
    Oracle,
    Onboard,
    Lufthansa,
    Investigation,
    LeCordonBleu,
    Indago,
    HugoBoss,
    GlobalPress,
    Engine,
    Fusion,
    EntertainmentMina,
    FirstKey,
    EntertainmentHd,
    Coloredge,
    CityCancer,
    Cbeebies,
    BbcEntertainment,
    Allocate,
    Awake,
    SmartCities,
    Humanified,
    Ultra,
    LondonCalling,
    Showtime,
    RTW,
    Clearvuze
  },
  created() {
    (function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );

    ga("create", "UA-60308086-1", "auto");
    ga("send", "pageview");
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  },
  watch: {
    $route(to, from) {
      this.forceRerender();
    }
  },
  mounted() {
    mixpanel.track(
      "Raxo Professional Design Work Portfolio of Motion Graphics, Animation"
    );

    mixpanel.track_links("#mySidenav a", "Clicked main menu link", {
      referrer: document.referrer
    });

    document.querySelector(".loader__screen").style.display = "none";

    var logo = [...document.querySelectorAll(".logo")];
    var menu = [...document.querySelectorAll(".menu__icon")];
    var bottomLinks = [...document.querySelectorAll(".bottom__links a")];
    var listElements = [...document.querySelectorAll(".nav__links a")];
    var buttons = [...document.querySelectorAll("button")];
    var aLinks = [...document.querySelectorAll(".contact__info a")];
    var inputElements = [...document.querySelectorAll("input")];
    var otherElements = [...document.querySelectorAll(".team-overlay")];
    var nextButtons = [...document.querySelectorAll(".nav-link")];
    var npButtons = [...document.querySelectorAll(".new-footer .nav-link")];
    var allElements = logo
      .concat(menu)
      .concat(nextButtons)
      .concat(bottomLinks)
      .concat(listElements)
      .concat(buttons)
      .concat(aLinks)
      .concat(inputElements)
      .concat(otherElements)
      .concat(npButtons);
    allElements.forEach(function(element) {
      element.addEventListener("mouseenter", function() {
        var theCursor = document.querySelector(".cursor");
        theCursor.classList.add("morphed--cursor");
      });
      element.addEventListener("mouseleave", function() {
        var theCursor = document.querySelector(".cursor");
        theCursor.classList.remove("morphed--cursor");
      });
    });

    function toggleClass(element, classString) {
      if (element.className == classString) {
        element.className = "";
      } else {
        element.className = classString;
      }
    }
    [...document.querySelectorAll(".logo__black")][0].classList.remove(
      "show__logo"
    );
    [...document.querySelectorAll(".logo__white")][0].classList.add(
      "show__logo"
    );
    document.querySelector(".menu__icon").classList.remove("dark__menu");
  },
  updated() {
    setTimeout(function() {
      window.scroll({
        top: 0,
        left: 0
      });
    }, 1000);
  }
};
</script>

<style>
.project__internal__page.project__component h1,
.project__internal__page.project__component h2,
.project__internal__page.project__component h3,
.project__internal__page.project__component h4,
.project__internal__page.project__component h5,
.project__internal__page.project__component h6 {
  font-family: "MarkPro-Book", serif;
  font-weight: bold !important;
}
</style>
