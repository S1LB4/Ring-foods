import "./screens/navbar"

class AppContainer extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const navbar = this.ownerDocument.createElement('app-navbar');
        const Restaurants = this.ownerDocument.createElement('app-restaurants');
        this.shadowRoot?.appendChild(navbar);

       /* this.shadowRoot.innerHTML = `
        <app-navbar>
        </app-navbar>
        <app-header>
        </app-header>
        <app-galle>
        </app-galle>
        <app-galle1>
        </app-galle1>
        `*/
    }
}
customElements.define('app-container', AppContainer)
