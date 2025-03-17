const JSONBIN_URL = "https://api.jsonbin.io/v3/b/67d79eea8960c979a5730715";
const LOCAL_STORAGE_KEY = "teamData";

const defaultTeamData = [
    {
        "name": "Milo Gazivoda",
        "role": "President, dedicated to managing the team",
        "imageUrl": "media/profile1.jpg",
        "alt": "Milo Gazivoda smiling",
        "linkedin": "https://www.linkedin.com/in/milo-gazivoda"
    },
    {
        "name": "Edgar Sustaita",
        "role": "Treasurer, dedicated to financing the team",
        "imageUrl": "media/profile2.jpg",
        "alt": "Edgar Sustaita smiling",
        "linkedin": "https://www.linkedin.com/in/edgar-sustaita"
    }
];

function initializeLocalData() {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultTeamData));
        console.log("Local data initialized in localStorage.");
    }
}

function updateTeamCards(data) {
    const cards = document.querySelectorAll("team-card");

    data.forEach((member, index) => {
        if (cards[index]) {
            cards[index].data = member;
        }
    });
}

// load local
document.getElementById("load-local").addEventListener("click", () => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
        const teamData = JSON.parse(storedData);
        updateTeamCards(teamData);
    } else {
        alert("No local data found.");
    }
});

// load remote
document.getElementById("load-remote").addEventListener("click", async () => {
    try {
        const response = await fetch(JSONBIN_URL, {
            headers: { "X-Master-Key": "$2a$10$Fd1By5ncZQFbg4HZMnVC9eN8f8QXGyuThGvfKSS/.BQirsKMBfNga" }
        });
        const json = await response.json();
        const teamData = json.record.team;

        updateTeamCards(teamData);
    } catch (error) {
        console.error("Error fetching remote data:", error);
        alert("Failed to load remote data.");
    }
});

initializeLocalData();
