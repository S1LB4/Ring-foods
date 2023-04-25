import styles from "../screens/styles.css";

class Restaurants extends HTMLElement {
    logoUrl: string = "../../img/Cheers.png";
    RestCorral: string = "../../img/corral.png";
    logoStartUrl: string = "../../img/cuuc.jpg";

    //TODO: El arreglo restaurants va a estar en el STORE, no en la clase
    restaurants = [
        {
            logo_url: "../../img/Cheers.png"
        },
        {
            logo_url: "../../img/corral.png"
        },
        {
            logo_url: "../../img/cuuc.jpg"
        },
        {
            logo_url: "../../img/martins.jpg"
        },
        {
            logo_url: "../../img/MW.jpg"
        },
        {
            logo_url: "../../img/santos.png"
        },
    ]

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    // static get observedAttributes(){
    //     return[]
    // }
    connectedCallback(){
        this.render();
    }

    // attributeChangeCallback(propName, oldValue, newValue){
    //     this[propName] = newValue;
    //     this.render();
    // }

    render(){
        const section_logo = this.ownerDocument.createElement('section');
        section_logo.classList.add("gallery");

        const section_logo_list = this.ownerDocument.createElement('h2');
        section_logo_list.classList.add("subtitulo");
        section_logo_list.innerHTML = "Near you";
        section_logo?.appendChild(section_logo_list);

        const section_logo_list_div = this.ownerDocument.createElement('div');
        section_logo_list_div.classList.add("contenedor-galeria");

        this.restaurants.forEach((restaurant) => {
            const section_logo_list_img = this.ownerDocument.createElement('img');
            section_logo_list_img.classList.add("img-galeria");
            section_logo_list_img.src = restaurant.logo_url;

            section_logo_list_div?.appendChild(section_logo_list_img);
        });

        section_logo?.appendChild(section_logo_list_div);


        // const section_logo_list_img = this.ownerDocument.createElement('img');
        // section_logo_list_img.classList.add("img-galeria");


        // const menu = this.ownerDocument.createElement('img');
        // menu.setAttribute('src', this.RestCorral);
        // div_logo_list_item?.appendChild(menu);

        this.shadowRoot?.appendChild(section_logo);

        const css = this.ownerDocument.createElement('style');
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);

        // /*  <section class="gallery" id="portafolio">
        //   <h2 class="subtitulo">RESTAURANTS NEAR YOU</h2>
        //   <div class="contenedor-galeria">
        //   <img src="../img/santos.png" alt="" class="img-galeria">
        //   <img src="../img/corral.png" alt="" class="img-galeria">
        //   <img src="../img/Cheers.png" alt="" class="img-galeria">
        //   <img src="../img/MW.jpg" alt="" class="img-galeria">
        //   <img src="../img/cuuc.jpg" alt="" class="img-galeria">
        //   <img src="../img/martins.jpg" alt="" class="img-galeria">
        //       </div>
        //       </section>*/

    }
}
customElements.define("app-restaurants", Restaurants);
export default Restaurants;