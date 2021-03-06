import Vue from "vue";
import Router from "vue-router";
import OldWork from "./views/OldWork.vue";
import Contact from "./views/Contact.vue";
import Home from "./views/Home.vue";
import Team from "./views/Team.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
// Projects Routes Called Async
const Allocate = () => import("@/components/projects/allocate");
const Awake = () => import("@/components/projects/awake");
const SmartCities = () => import("@/components/projects/smartCities");
const Humanified = () => import("@/components/projects/humanified");
const Base = () => import("@/components/projects/base");
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

Vue.use(Router);
import VueRouter from "vue-router";

export default new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    { path: "*", component: NotFound },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/work",
      name: "old-work",
      component: OldWork,
      meta: {
        title: "Raxo | Our Projects"
      }
    },
    // {
    //   path: "/work2",
    //   name: "work",
    //   component: Gallery,
    //   meta: {
    //     title: "Raxo | Our Projects"
    //   }
    // },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    // ================= Projects Routes =============== //
    {
      path: "/creative-work/allocate",
      name: "allocate",
      component: Allocate
    },
    {
      path: "/creative-work/awake",
      name: "awake",
      component: Awake
    },
    {
      path: "/creative-work/smart-cities",
      name: "smart-cities",
      component: SmartCities
    },
    {
      path: "/creative-work/humanifed-branding-web-design-app-development",
      name: "humanifed-branding-web-design-app-development",
      component: Humanified
    },
    {
      path: "/creative-work/ultra-music-animation-design-web-development",
      name: "ultra-music-animation-design-web-development",
      component: Ultra
    },
    {
      path: "/creative-work/bbc-entertainment-london-calling-design",
      name: "bbc-entertainment-london-calling-design",
      component: LondonCalling
    },
    {
      path: "/creative-work/showtime",
      name: "showtime",
      component: Showtime
    },
    {
      path: "/creative-work/base-develops-and-manages",
      name: "base-develops-and-manages",
      component: Base
    },
    {
      path: "/creative-work/coloredge-is-a-unique-media-company",
      name: "coloredge-is-a-unique-media-company",
      component: Coloredge
    },
    {
      path: "/creative-work/city-cancer-challenge",
      name: "city-cancer-challenge",
      component: CityCancer
    },
    {
      path: "/creative-work/rock-summer-is-an-initiative-started",
      name: "rock-summer-is-an-initiative-started",
      component: RockSummer
    },
    {
      path: "/creative-work/pluto-tv-is-an-Internet-based-television",
      name: "pluto-tv-is-an-Internet-based-television",
      component: Pluto
    },
    {
      path: "/creative-work/oracle-cloud-hero-marketing-design-web-development",
      name: "oracle-cloud-hero-marketing-design-web-development",
      component: Oracle
    },
    {
      path: "/creative-work/hugo-boss-design-animation",
      name: "hugo-boss-design-animation",
      component: HugoBoss
    },
    {
      path: "/creative-work/first-key-homes-strategy-design-web-development",
      name: "first-key-homes-strategy-design-web-development",
      component: FirstKey
    },
    {
      path: "/creative-work/the-department-design-web-development",
      name: "the-department-design-web-development",
      component: theDepartment
    },
    {
      path: "/creative-work/engine-shop-branding-design-web-development",
      name: "engine-shop-branding-design-web-development",
      component: Engine
    },
    {
      path: "/creative-work/bbc-entertainment-design-animation-tv",
      name: "bbc-entertainment-design-animation-tv",
      component: BbcEntertainment
    },
    {
      path: "/creative-work/yankees-creative-design",
      name: "yankees-creative-design",
      component: Yankees
    },
    {
      path: "/creative-work/sermo-branding-design-web-development",
      name: "sermo-branding-design-web-development",
      component: Sermo
    },
    {
      path: "/creative-work/bbc-entertainment-mina-jack-animation-design-tv",
      name: "bbc-entertainment-mina-jack-animation-design-tv",
      component: EntertainmentMina
    },
    {
      path: "/creative-work/bbc-entertainment-HD-design-animation-tv",
      name: "bbc-entertainment-HD-design-animation-tv",
      component: EntertainmentHd
    },
    {
      path: "/creative-work/bbc-entertainment-cbeebies-creative",
      name: "bbc-entertainment-cbeebies-creative",
      component: Cbeebies
    },
    {
      path: "/creative-work/le-cordon-bleu-creative-design-web-development",
      name: "le-cordon-bleu-creative-design-web-development",
      component: LeCordonBleu
    },
    {
      path: "/creative-work/onboard-informatics-design-web-development",
      name: "onboard-informatics-design-web-development",
      component: Onboard
    },
    {
      path: "/creative-work/the-long-way-back-entertainment-design-animation",
      name: "the-long-way-back-entertainment-design-animation",
      component: theLongWay
    },
    {
      path: "/creative-work/univision-election-design-animation-tv",
      name: "univision-election-design-animation-tv",
      component: Univision
    },
    {
      path: "/creative-work/sambazon-design-animation",
      name: "sambazon-design-animation",
      component: Sambazon
    },
    {
      path: "/creative-work/steelbridge-labs-incubator-branding-web-design",
      name: "steelbridge-labs-incubator-branding-web-design",
      component: SteelBridge
    },
    {
      path: "/creative-work/simply-ira-iralogix-branding-design-web",
      name: "simply-ira-iralogix-branding-design-web",
      component: SimplyIraIralogix
    },
    {
      path: "/creative-work/global-press-design",
      name: "global-press-design",
      component: GlobalPress
    },
    {
      path: "/creative-work/indago-design-animation",
      name: "indago-design-animation",
      component: Indago
    },
    {
      path: "/creative-work/investigation-13-entertainment-design-animation",
      name: "investigation-13-entertainment-design-animation",
      component: Investigation
    },
    {
      path: "/creative-work/fusion-beauty-creative-packaging",
      name: "fusion-beauty-creative-packaging",
      component: Fusion
    },
    {
      path: "/creative-work/quantgene-is-a-cell-free-platform",
      name: "quantgene-is-a-cell-free-platform",
      component: Quantgene
    },
    {
      path: "/creative-work/lufthansa-creative-design-web-development",
      name: "lufthansa-creative-design-web-development",
      component: Lufthansa
    },
    {
      path: "/creative-work/repair-the-world",
      name: "repair-the-world",
      component: RTW
    },
    {
      path: "/creative-work/clearvuze",
      name: "clearvuze",
      component: Clearvuze
    }
  ]
});


// import Vue from "vue";
// import Router from "vue-router";
// import Gallery from "./views/Gallery.vue";
// import OldWork from "./views/OldWork.vue";
// import Contact from "./views/Contact.vue";
// import Home from "./views/Home.vue";
// import Team from "./views/Team.vue";
// import About from "./views/About.vue";
// import NotFound from "./views/NotFound.vue";

// //Import Projects
// import CreativeWork from "./views/Projects.vue";
// Vue.use(Router);
// import VueRouter from "vue-router";

// export default new VueRouter({
//   base: process.env.BASE_URL,
//   routes: [
//     { path: "*", component: NotFound },
//     {
//       path: "/",
//       name: "home",
//       component: Home
//     },
//     {
//       path: "/work",
//       name: "old-work",
//       component: OldWork,
//       meta: {
//         title: "Raxo | Our Projects"
//       }
//     },
//     {
//       path: "/work2",
//       name: "work",
//       component: Gallery,
//       meta: {
//         title: "Raxo | Our Projects"
//       }
//     },
//     {
//       path: "/contact",
//       name: "contact",
//       component: Contact
//     },
//     {
//       path: "/team",
//       name: "team",
//       component: Team
//     },
//     {
//       path: "/about",
//       name: "about",
//       component: About
//     },
//     // ================= Projects Routes =============== //
//     {
//       path: "/creative-work/allocate",
//       name: "allocate",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/awake",
//       name: "awake",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/smart-cities",
//       name: "smart-cities",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/humanifed-branding-web-design-app-development",
//       name: "humanifed-branding-web-design-app-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/ultra-music-animation-design-web-development",
//       name: "ultra-music-animation-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/bbc-entertainment-london-calling-design",
//       name: "bbc-entertainment-london-calling-design",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/showtime",
//       name: "showtime",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/base-develops-and-manages",
//       name: "base-develops-and-manages",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/coloredge-is-a-unique-media-company",
//       name: "coloredge-is-a-unique-media-company",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/city-cancer-challenge",
//       name: "city-cancer-challenge",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/rock-summer-is-an-initiative-started",
//       name: "rock-summer-is-an-initiative-started",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/pluto-tv-is-an-Internet-based-television",
//       name: "pluto-tv-is-an-Internet-based-television",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/oracle-cloud-hero-marketing-design-web-development",
//       name: "oracle-cloud-hero-marketing-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/hugo-boss-design-animation",
//       name: "hugo-boss-design-animation",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/first-key-homes-strategy-design-web-development",
//       name: "first-key-homes-strategy-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/the-department-design-web-development",
//       name: "the-department-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/engine-shop-branding-design-web-development",
//       name: "engine-shop-branding-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/bbc-entertainment-design-animation-tv",
//       name: "bbc-entertainment-design-animation-tv",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/yankees-creative-design",
//       name: "yankees-creative-design",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/sermo-branding-design-web-development",
//       name: "sermo-branding-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/bbc-entertainment-mina-jack-animation-design-tv",
//       name: "bbc-entertainment-mina-jack-animation-design-tv",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/bbc-entertainment-HD-design-animation-tv",
//       name: "bbc-entertainment-HD-design-animation-tv",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/bbc-entertainment-cbeebies-creative",
//       name: "bbc-entertainment-cbeebies-creative",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/le-cordon-bleu-creative-design-web-development",
//       name: "le-cordon-bleu-creative-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/onboard-informatics-design-web-development",
//       name: "onboard-informatics-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/the-long-way-back-entertainment-design-animation",
//       name: "the-long-way-back-entertainment-design-animation",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/univision-election-design-animation-tv",
//       name: "univision-election-design-animation-tv",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/sambazon-design-animation",
//       name: "sambazon-design-animation",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/steelbridge-labs-incubator-branding-web-design",
//       name: "steelbridge-labs-incubator-branding-web-design",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/simply-ira-iralogix-branding-design-web",
//       name: "simply-ira-iralogix-branding-design-web",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/global-press-design",
//       name: "global-press-design",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/indago-design-animation",
//       name: "indago-design-animation",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/investigation-13-entertainment-design-animation",
//       name: "investigation-13-entertainment-design-animation",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/fusion-beauty-creative-packaging",
//       name: "fusion-beauty-creative-packaging",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/quantgene-is-a-cell-free-platform",
//       name: "quantgene-is-a-cell-free-platform",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/lufthansa-creative-design-web-development",
//       name: "lufthansa-creative-design-web-development",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/repair-the-world",
//       name: "repair-the-world",
//       component: CreativeWork
//     },
//     {
//       path: "/creative-work/clearvuze",
//       name: "clearvuze",
//       component: CreativeWork
//     }
//   ]
// });