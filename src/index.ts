import "./screens/navbar"
import "./RestaurantsNear/NearYou"

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
        this.shadowRoot?.appendChild(navbar);

        const restaurants = this.ownerDocument.createElement('app-restaurants');
        this.shadowRoot?.appendChild(restaurants);
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
