import { getTeamCardCSS } from "./team-card-css.js";

class TeamCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set data({ name, role, imageUrl, alt, linkedin }) {
        this.innerHTML = `
            <style>${getTeamCardCSS()}</style>
            <div class="team-card">
                <picture>
                    <img src="${imageUrl}" alt="${alt}">
                </picture>
                <h2>${name}</h2>
                <p>${role}</p>
                <a href="${linkedin}" target="_blank">View LinkedIn</a>
            </div>
        `;
    }

    render() {
        this.innerHTML = `
            <style>${getTeamCardCSS()}</style>
            <div class="team-card">
                <picture>
                    <img src="${this.getAttribute('image-url')}" alt="${this.getAttribute('alt')}">
                </picture>
                <h2>${this.getAttribute('name')}</h2>
                <p>${this.getAttribute('role')}</p>
                <a href="${this.getAttribute('linkedin')}" target="_blank">View LinkedIn</a>
            </div>
        `;
    }
}

customElements.define("team-card", TeamCard);


