import "@fontsource-variable/inter";
import "@fontsource-variable/eb-garamond";

import 'aos/dist/aos.css';
import "../styles/global.css";

import "./app-jquery";
import "./app-alpine";

import AOS from 'aos';

AOS.init({
  once: true
});
AOS.refresh();

console.log("main.ts loaded");
