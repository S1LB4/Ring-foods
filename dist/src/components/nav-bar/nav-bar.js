class navBar extends HTMLElement {
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
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../../../../css/estilos.css">
        <nav class="nav container">
        <div class="nav_logo" class="navcolor">
            <li class="nav_items">
             <img href="#" class="nav_title"  src="../img/logout.png">
            </li>
        </div>
        <ul class="nav_link nav_link--menu">
            <li class="nav_items">
            <input type="SEARCH">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/lupa.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/food.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/bell.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/star.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/usuario.png">
            </li>



        </ul>
        </div>
    </nav>`
    }
}
customElements.define("app-navbar", navBar);
export default navBar;