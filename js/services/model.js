const gProjects = [
    {
        id: makeId(),
        name: "MineSweeper 2",
        title: "Electric Boogaloo",
        desc: "The nostalgic Game, along with a whole bunch of extra features and gamemodes",
        url: "https://cedrus81.github.io/mineSweeper/",
        publishedAt: 'Oct. 22',
        labels: ["CRUD", "CRUDL", "filter", "storage"],
        img: 'img/projects/mineSweeper.png'
    },
    {
        id: makeId(),
        name: "Denisse's Library",
        title: "Full CRUD project",
        desc: "A demo for a shop display, with filtering and sorting functions added as well",
        url: "https://cedrus81.github.io/Libreria/",
        publishedAt: 'Oct. 22',
        labels: ["CRUD", "CRUDL", "filter", "storage"],
        img: 'img/projects/libreria.jpg'
    },
    {
        id: makeId(),
        name: "YelpCamp",
        title: "Full outdoor camp review site",
        desc: "Full scale project, including a plethora of features, styles and details. Between 20-30 different libraries and APIs were used",
        url: "https://aqueous-headland-11003.herokuapp.com/",
        publishedAt: 'Aug. 22',
        labels: ["Nodejs", "MongoDB", "Express", "CRUD", "BootStrap", "Validation", "promises", "Databases", "EJS", "APIs"],
        img: 'img/projects/YelpCamp.jpg'
    },
]

const gSpecialities = [
    {
        name: 'HTML5',
        logo: '/img/logos/logo-HTML.png',
        description: 'htmllllllll'
    },
    {
        name: "JavaScript",
        logo: '/img/logos/logo-JS.png',
        description: 'gTranslate[this.name]'
    },
    {
        name: "CSS-3",
        logo: '/img/logos/logo-CSS.png',
        description: 'this is css'
    },
    {
        name: "NodeJS",
        logo: '/img/logos/logo-NodeJS.png',
        description: 'this is nodejs'
    },
    {
        name: "MongoDB",
        logo: '/img/logos/logo-mongoDB.png',
        description: 'this is css'
    },
    {
        name: "jQuery",
        logo: '/img/logos/jQuery.png',
        description: 'this is css'
    },
]





function getProject(value) {
    return gProjects[value]
}