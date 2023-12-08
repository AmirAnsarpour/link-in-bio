import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(link, icon) {
    return ` 
  <a href="${link}" target="blank">
    <i class="${icon}"></i>
  </a> 
  `;
}

let allLinks = "";
links.forEach((ele) => {
    let link = ele.link;
    let icon = ele.icon;

    allLinks += addLink(link, icon);
});

linkContainer.innerHTML = allLinks;