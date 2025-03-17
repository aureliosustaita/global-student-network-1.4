import { getTeamCardCSS } from "./team-card-css.js";

class TeamCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Apply global CSS once
        if (!document.querySelector("#team-card-styles")) {
            const style = document.createElement("style");
            style.id = "team-card-styles";
            style.textContent = getTeamCardCSS();
            document.head.appendChild(style);
        }

        // Read attributes from HTML
        const name = this.getAttribute("name") || "Unknown Name";
        const role = this.getAttribute("role") || "Role Not Specified";
        const imageUrl = this.getAttribute("image-url") || "media/default.jpg";
        const linkedin = this.getAttribute("linkedin") || "#";
        const altText = this.getAttribute("alt") || `${name}'s profile picture`;

        // Set the inner HTML
        this.innerHTML = `
            <div class="team-card">
                <picture>
                    <img src="${imageUrl}" alt="${altText}">
                </picture>
                <h2>${name}</h2>
                <p>${role}</p>
                <a href="${linkedin}" target="_blank">View LinkedIn</a>
            </div>
        `;
    }
}

// Define the custom element
customElements.define("team-card", TeamCard);
