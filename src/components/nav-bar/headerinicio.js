class headerinicio extends HTMLElement {
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
        <link rel="stylesheet" href="../../../css/estilos.css">
        <header class="header" id="inicio">

        <div class="contenedor head">
            <img ></img>
            <h1 class="titulo">RING FOODS</h1>
            <button class="copy">Restaurants</button>
        </div>
    </header>
    <script src="../js/menu.js"></script>
        `
    }
}
customElements.define("app-header", headerinicio);
export default headerinicio;