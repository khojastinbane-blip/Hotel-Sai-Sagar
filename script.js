// Show a small welcome message on the home page.
if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
    console.log("Welcome to Hotel Sai Sagar!");
}

// Load menu items from the XML file on the menu page.
const menuList = document.getElementById("menu-list");
const menuMessage = document.getElementById("menu-message");

if (menuList && menuMessage) {
    fetch("menu.xml")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not load menu.xml");
            }
            return response.text();
        })
        .then(function (xmlText) {
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlText, "text/xml");
            const items = xml.getElementsByTagName("item");

            menuList.innerHTML = "";

            for (let i = 0; i < items.length; i++) {
                const name = items[i].getElementsByTagName("name")[0].textContent;
                const description = items[i].getElementsByTagName("description")[0].textContent;
                const price = items[i].getElementsByTagName("price")[0].textContent;

                const card = document.createElement("div");
                card.className = "menu-item";
                card.innerHTML = "<h3>" + name + "</h3>" +
                    "<p>" + description + "</p>" +
                    "<p class='price'>₹" + price + "</p>";

                menuList.appendChild(card);
            }

            menuMessage.textContent = "Menu loaded successfully from XML!";
        })
        .catch(function () {
            menuMessage.textContent = "Menu could not load. Please run this website using Live Server or GitHub Pages.";
        });
}
