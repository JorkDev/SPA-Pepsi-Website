import { pages } from "../controllers/index";
let content = document.getElementById('root');

const router = (route) =>{

    content.innerHTML = "";

    console.log(route);

    switch (route) {
        case "#/": {
          return content.appendChild(pages.home());
        }
        case "#/products": {
            return content.appendChild(pages.products());
        }
        case "#/news": {
            return content.appendChild(pages.news());
        }
        case "#/newsletter": {
            return content.appendChild(pages.newsletter());
        }
        case "#/contact": {
            return content.appendChild(pages.contact());
        }
        default:
            return console.log("404!!")
    }
}
export { router }