document.addEventListener("DOMContentLoaded", function () {
    // Fetch and load projects dynamically
    fetch("project.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");

            projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");

                projectCard.innerHTML = `
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;

                container.appendChild(projectCard);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
    
    // Add scroll event listener for header transparency effect
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
