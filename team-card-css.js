export function getTeamCardCSS() {
    return `
        .team-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 280px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease-in-out;
            text-align: center;
        }

        .team-card:hover {
            transform: scale(1.05);
        }

        picture img {
            width: 100%;
            max-width: 150px;
            height: 150px;
            object-fit: cover;
        }

        h2 {
            font-size: 24px;
            color: var(--about-color1, #333);
            margin-top: 15px;
        }

        p {
            font-size: 18px;
            color: var(--about-color2, #555);
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            font-weight: bold;
            color: blue;
            margin-top: 10px;
        }

        a:hover {
            text-decoration: underline;
        }
    `;
}