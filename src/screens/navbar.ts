import styles from './styles.css';

class NavBar extends HTMLElement {
    logoUrl: string = "../../img/logout.png";
    logoUserUrl: string = "../../img/usuario.png";
    logoStartUrl: string = "../../img/star.png";


    static get observedAttributes(){
        return[]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render();
    }
    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        const mainContent = this.ownerDocument.createElement('nav');
        mainContent.classList.add("nav-container");


        const div_logo = this.ownerDocument.createElement('div');
        div_logo.classList.add("nav-logo");

        const div_logo_list_item = this.ownerDocument.createElement('li');
        div_logo_list_item.classList.add("nav_items");
        const div_logo_list_item_img = this.ownerDocument.createElement('img');
        div_logo_list_item_img.classList.add("nav_title");
        div_logo_list_item_img.setAttribute('src', this.logoUrl);
        div_logo_list_item?.appendChild(div_logo_list_item_img);
        div_logo?.appendChild(div_logo_list_item);

        mainContent?.appendChild(div_logo);
        const userprofile = this.ownerDocument.createElement('img');
        userprofile.setAttribute('src', this.logoUserUrl);
        div_logo_list_item?.appendChild(userprofile);

        const starurl = this.ownerDocument.createElement('img');
        starurl.setAttribute('src', this.logoStartUrl);
        div_logo_list_item?.appendChild(starurl);





        this.shadowRoot?.appendChild(mainContent);
        const css = this.ownerDocument.createElement('style');
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
        // this.shadowRoot.innerHTML =`
        // <link rel="stylesheet" href="../../../css/estilos.css">
        // <nav class="nav container">
        //     <div class="nav_logo" class="navcolor">
        //         <li class="nav_items">
        //          <img href="#" class="nav_title"  src="../img/logout.png">
        //         </li>
        //     </div>
        //     <ul class="nav_link nav_link--menu">
        //         <li class="nav_items">
        //         <input type="SEARCH">
        //         </li>
        //         <li class="nav_items">
        //             <img href="#" src="../img/lupa.png">
        //         </li>
        //         <li class="nav_items">
        //             <img href="#" src="../img/food.png">
        //         </li>
        //         <li class="nav_items">
        //             <img href="#" src="../img/bell.png">
        //         </li>
        //         <li class="nav_items">
        //             <img href="#" src="../img/star.png">
        //         </li>
        //         <li class="nav_items">
        //             <img href="#" src="../img/usuario.png">
        //         </li>
        //     </ul>
        // </nav>`
    }
}
customElements.define("app-navbar", NavBar);
export default NavBar;
