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

<script>
import Allocate from "@/components/projects/allocate";
import Awake from "@/components/projects/awake";
import SmartCities from "@/components/projects/smartCities";
import Humanified from "@/components/projects/humanified";
import BaseWeb from "@/components/projects/base";
import Ultra from "@/components/projects/ultra-music";
import LondonCalling from "@/components/projects/londonCalling";
import Showtime from "@/components/projects/showtime";
import BbcEntertainment from "@/components/projects/bbcEntertainment";
import Cbeebies from "@/components/projects/cbeebies";
import CityCancer from "@/components/projects/cityCancer";
import Coloredge from "@/components/projects/coloredge";
import Engine from "@/components/projects/engine";
import EntertainmentHd from "@/components/projects/entertainmentHD";
import EntertainmentMina from "@/components/projects/entertainmentMina";
import FirstKey from "@/components/projects/firstKey";
import Fusion from "@/components/projects/fusion";
import GlobalPress from "@/components/projects/globalPress";
import HugoBoss from "@/components/projects/hugoBoss";
import Indago from "@/components/projects/indago";
import LeCordonBleu from "@/components/projects/leCordonBleu";
import Lufthansa from "@/components/projects/lufthansa";
import Onboard from "@/components/projects/onboard";
import Oracle from "@/components/projects/oracle";
import Pluto from "@/components/projects/pluto";
import Quantgene from "@/components/projects/quantgene";
import RockSummer from "@/components/projects/rockSummer";
import Sambazon from "@/components/projects/sambazon";
import Sermo from "@/components/projects/sermo";
import SimplyIraIralogix from "@/components/projects/simplyIraIralogix";
import SteelBridge from "@/components/projects/steelbridge";
import theDepartment from "@/components/projects/theDepartment";
import theLongWay from "@/components/projects/theLongWay";
import Univision from "@/components/projects/univision";
import Yankees from "@/components/projects/yankees";
import Investigation from "@/components/projects/investigation";
import RTW from "@/components/projects/repairTheWorld";
import Clearvuze from "@/components/projects/clearvuze";

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
