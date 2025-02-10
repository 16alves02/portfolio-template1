// Array of projects with title, link, and description
const projects = [
    { title: "Project 1", link: "#", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
    { title: "Project 2", link: "#", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
    { title: "Project 3", link: "#", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
    { title: "Project 4", link: "#", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
    { title: "Project 5", link: "#", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
    { title: "Project 6", link: "#", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
];

// Get the container for the projects in the DOM
const projectContainer = document.getElementById("projects");

// Create HTML elements for each project
projects.forEach(proj => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"; // Tailwind classes for styling
    div.innerHTML = `
        <h3 class="text-xl font-bold text-gray-100">${proj.title}</h3>
        <p class="mt-2 text-gray-300">${proj.desc}</p>
        <a href="${proj.link}" class="text-blue-400 mt-2 inline-block hover:text-blue-500 transition-colors">See more</a>
    `;
    projectContainer.appendChild(div); // Append the project div to the container
});

// Array of skills with title and description
const skills = [
    { title: "Skill 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
    { title: "Skill 2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." },
];

// Get the container for the skills in the DOM
const skillsContainer = document.getElementById("skills");

// Create HTML elements for each skill
skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"; // Tailwind classes for styling
    div.innerHTML = `
        <h3 class="text-xl font-bold text-gray-100">${skill.title}</h3>
        <p class="mt-2 text-gray-300">${skill.desc}</p>
    `;
    skillsContainer.appendChild(div); // Append the skill div to the container
});

// Function to handle the progress bar and the visibility of the back-to-top button
window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // Get the current scroll position
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
    const progress = (scrollTop / scrollHeight) * 100; // Calculate the scroll progress as a percentage
    document.getElementById("progressBar").style.width = progress + "%"; // Update the width of the progress bar

    // Show or hide the back-to-top button based on the scroll position
    if (scrollTop > 300) {
        document.getElementById("backToTop").style.display = "block"; // Show button when scrolled more than 300px
    } else {
        document.getElementById("backToTop").style.display = "none"; // Hide button when scrolled less than 300px
    }
};

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to the top
}