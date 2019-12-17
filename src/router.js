import Vue from "vue";
import Router from "vue-router";
import Gallery from "./views/Gallery.vue";
import OldWork from "./views/OldWork.vue";
import Contact from "./views/Contact.vue";
import Home from "./views/Home.vue";
import Team from "./views/Team.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

//Import Projects
import CreativeWork from "./views/Projects.vue";
Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: "*", component: NotFound },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/work2",
      name: "old-work",
      component: OldWork,
      meta: {
        title: "Raxo | Our Projects",
      }
    },
    {
      path: "/work",
      name: "work",
      component: Gallery,
      meta: {
        title: "Raxo | Our Projects",
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/team",
      name: "team",
      component: Team,
    },
    {
      path: "/about",
      name: "about",
      component: About, 
    },
    // ================= Projects Routes =============== //
    {
      path: "/creative-work/allocate",
      name: "allocate",
      component: CreativeWork
    },
    {
      path: "/creative-work/awake",
      name: "awake",
      component: CreativeWork
    },
    {
      path: "/creative-work/smart-cities",
      name: "smart-cities",
      component: CreativeWork
    },
    {
      path: "/creative-work/humanifed-branding-web-design-app-development",
      name: "humanifed-branding-web-design-app-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/ultra-music-animation-design-web-development",
      name: "ultra-music-animation-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/bbc-entertainment-london-calling-design",
      name: "bbc-entertainment-london-calling-design",
      component: CreativeWork
    },
    {
      path: "/creative-work/showtime",
      name: "showtime",
      component: CreativeWork
    },
    {
      path: "/creative-work/base-develops-and-manages",
      name: "base-develops-and-manages",
      component: CreativeWork
    },
    {
      path: "/creative-work/coloredge-is-a-unique-media-company",
      name: "coloredge-is-a-unique-media-company",
      component: CreativeWork
    },
    {
      path: "/creative-work/city-cancer-challenge",
      name: "city-cancer-challenge",
      component: CreativeWork
    },
    {
      path: "/creative-work/rock-summer-is-an-initiative-started",
      name: "rock-summer-is-an-initiative-started",
      component: CreativeWork
    },
    {
      path: "/creative-work/pluto-tv-is-an-Internet-based-television",
      name: "pluto-tv-is-an-Internet-based-television",
      component: CreativeWork
    },
    {
      path: "/creative-work/oracle-cloud-hero-marketing-design-web-development",
      name: "oracle-cloud-hero-marketing-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/hugo-boss-design-animation",
      name: "hugo-boss-design-animation",
      component: CreativeWork
    },
    {
      path: "/creative-work/first-key-homes-strategy-design-web-development",
      name: "first-key-homes-strategy-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/the-department-design-web-development",
      name: "the-department-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/engine-shop-branding-design-web-development",
      name: "engine-shop-branding-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/bbc-entertainment-design-animation-tv",
      name: "bbc-entertainment-design-animation-tv",
      component: CreativeWork
    },
    {
      path: "/creative-work/yankees-creative-design",
      name: "yankees-creative-design",
      component: CreativeWork
    },
    {
      path: "/creative-work/sermo-branding-design-web-development",
      name: "sermo-branding-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/bbc-entertainment-mina-jack-animation-design-tv",
      name: "bbc-entertainment-mina-jack-animation-design-tv",
      component: CreativeWork
    },
    {
      path: "/creative-work/bbc-entertainment-HD-design-animation-tv",
      name: "bbc-entertainment-HD-design-animation-tv",
      component: CreativeWork
    },
    {
      path: "/creative-work/bbc-entertainment-cbeebies-creative",
      name: "bbc-entertainment-cbeebies-creative",
      component: CreativeWork
    },
    {
      path: "/creative-work/le-cordon-bleu-creative-design-web-development",
      name: "le-cordon-bleu-creative-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/onboard-informatics-design-web-development",
      name: "onboard-informatics-design-web-development",
      component: CreativeWork
    },
    {
      path: "/creative-work/the-long-way-back-entertainment-design-animation",
      name: "the-long-way-back-entertainment-design-animation",
      component: CreativeWork
    },
    {
      path: "/creative-work/univision-election-design-animation-tv",
      name: "univision-election-design-animation-tv",
      component: CreativeWork
    },
    {
      path: "/creative-work/sambazon-design-animation",
      name: "sambazon-design-animation",
      component: CreativeWork
    },
    {
      path: "/creative-work/steelbridge-labs-incubator-branding-web-design",
      name: "steelbridge-labs-incubator-branding-web-design",
      component: CreativeWork
    },
    {
      path: "/creative-work/simply-ira-iralogix-branding-design-web",
      name: "simply-ira-iralogix-branding-design-web",
      component: CreativeWork
    },
    {
      path: "/creative-work/global-press-design",
      name: "global-press-design",
      component: CreativeWork
    },
    {
      path: "/creative-work/indago-design-animation",
      name: "indago-design-animation",
      component: CreativeWork
    },
    {
      path: "/creative-work/investigation-13-entertainment-design-animation",
      name: "investigation-13-entertainment-design-animation",
      component: CreativeWork
    },
    {
      path: "/creative-work/fusion-beauty-creative-packaging",
      name: "fusion-beauty-creative-packaging",
      component: CreativeWork
    },
    {
      path: "/creative-work/quantgene-is-a-cell-free-platform",
      name: "quantgene-is-a-cell-free-platform",
      component: CreativeWork
    },
    {
      path: "/creative-work/lufthansa-creative-design-web-development",
      name: "lufthansa-creative-design-web-development",
      component: CreativeWork
    }
    // ================= End of Projects Routes =============== //
  ]
});
