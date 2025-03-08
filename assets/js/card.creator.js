// const projectDatas = [
//     {
//         title: "WebAPI Stock-Manager1",
//         image: "./assets/images/API1.webp",
//         altText: "Projet",
//         technologies: "JavaScript, Node.js, MongoDB, Express.js",
//         description: "It enables efficient product stock management.",
//         link: "https://github.com/YuzKeys/gestion-stock"
//     },
//     {
//         title: "WebAPI Stock-Manager2",
//         image: "./assets/images/API1.webp",
//         altText: "Projet",
//         technologies: "JavaScript, Node.js, MongoDB, Express.js",
//         description: "It enables efficient product stock management.",
//         link: "https://github.com/YuzKeys/gestion-stock"
//     },
//     {
//         title: "WebAPI Stock-Manager3",
//         image: "./assets/images/API1.webp",
//         altText: "Projet",
//         technologies: "JavaScript, Node.js, MongoDB, Express.js",
//         description: "It enables efficient product stock management.",
//         link: "https://github.com/YuzKeys/gestion-stock"
//     },
//     {
//         title: "WebAPI Stock-Manager4",
//         image: "./assets/images/API1.webp",
//         altText: "Projet",
//         technologies: "JavaScript, Node.js, MongoDB, Express.js",
//         description: "It enables efficient product stock management.",
//         link: "https://github.com/YuzKeys/gestion-stock"
//     },
//     {
//         title: "WebAPI Stock-Manager5",
//         image: "./assets/images/API1.webp",
//         altText: "Projet",
//         technologies: "JavaScript, Node.js, MongoDB, Express.js",
//         description: "It enables efficient product stock management.",
//         link: "https://github.com/YuzKeys/gestion-stock"
//     },
//     {
//         title: "WebAPI Stock-Manager6",
//         image: "./assets/images/API1.webp",
//         altText: "Projet",
//         technologies: "JavaScript, Node.js, MongoDB, Express.js",
//         description: "It enables efficient product stock management.",
//         link: "https://github.com/YuzKeys/gestion-stock"
//     }
// ];
const projectDatas = [
    {
        title: "WebAPI Stock-Manager",
        image: "./assets/images/API1.webp",
        altText: "Projet",
        technologies: "JavaScript, Node.js, MongoDB, Express.js",
        description: "It enables efficient product stock management.",
        link: "https://github.com/YuzKeys/gestion-stock"
    },
    {
        title: "Authentication System",
        image: "./assets/images/Authentication-System.png",
        altText: "Projet",
        technologies: "React.js, Node.js, MongoDB, JWT",
        description: "Signup/login forms, JWT sessions, MongoDB",
        link: "https://github.com/YuzKeys/authentication-system"
    },
    {
        title: "To-Do List App",
        image: "./assets/images/todolist.png",
        altText: "Projet",
        technologies: "React.js, Node.js, MongoDB",
        description: "Task interface, REST API, MongoDB.",
        link: "https://github.com/YuzKeys/todo-list"
    },
    {
        title: "E-commerce Website",
        image: "./assets/images/ecommerce.png",
        altText: "Projet",
        technologies: "React.js, Node.js, MongoDB, Stripe",
        description: "Product pages, cart, checkout, API, product storage.",
        link: "https://github.com/YuzKeys/e-commerce-site"
    },
    {
        title: "Real-Time Chat App",
        image: "./assets/images/realtimechat.png",
        altText: "Projet",
        technologies: "React.js, Node.js, MongoDB, WebSockets",
        description: "Dynamic UI, WebSocket server, Node.js, MongoDB.",
        link: "https://github.com/YuzKeys/chat-app"
    },
    {
        title: "Analytics Dashboard",
        image: "./assets/images/analyticdashboard.png",
        altText: "Projet",
        technologies: "React.js, Node.js, MongoDB, Chart.js",
        description: "Interactive graphs, REST API, PostgreSQL/MongoDB aggregation.",
        link: "https://github.com/YuzKeys/analytics-dashboard"
    }
];
document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.querySelector('.projects-container');

    function generateProjects(data) {
        data.forEach(element => {
            // Création du conteneur projet
            const newProject = document.createElement('div');
            newProject.classList.add('project');

            // Image du projet
            const newImage = document.createElement('img');
            newImage.src = element.image;
            newImage.alt = element.altText;
            newImage.classList.add('project-img');

            // Infos du projet
            const newProjectInfo = document.createElement('div');
            newProjectInfo.classList.add('project-info');

            // Titre du projet
            const newTitle = document.createElement('h3');
            newTitle.textContent = element.title;

            // Technologies utilisées
            const newTech = document.createElement('p');
            newTech.textContent = "Technologies used in this project:";

            const newTechList = document.createElement('p');
            newTechList.textContent = element.technologies;
            newTechList.classList.add('boldText')

            // Description du projet
            const newDescription = document.createElement('p');
            newDescription.textContent = element.description;

            // Lien du projet
            const newLink = document.createElement('a');
            newLink.classList.add('btn');
            newLink.target = "_blank";
            newLink.href = element.link;
            newLink.textContent = "See More";

            // Ajout des éléments au conteneur
            newProjectInfo.append(newTitle, newTech, newTechList, newDescription);
            newProject.append(newImage, newProjectInfo, newLink);
            projectContainer.append(newProject);
        });
    }

    // Appel de la fonction après le chargement du DOM
    generateProjects(projectDatas);
});
