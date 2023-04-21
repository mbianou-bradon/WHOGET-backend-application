import { AskType, UserType, categoryType } from "../dataTypes"

export const asksData : AskType[] = [
    {
        message: "Na who fit helped with Plumber ei number for Muea",
        category: "Plumber",
        image: "https://mbianoubradon.vercel.app",
        duration: 7,
        visibility: true
    },
    {
        message: "Please I am a need of a website for my hair-dressing saloon, any developer?",
        category: "Web Development",
        duration: 4,
        visibility: true
    },
    {
        message: "I need a hair dresser to plait my kids.",
        category: "Hair dressing",
        duration: 2,
        visibility: true
    },
    {
        message: "Who get second hand iPhone 7+ for salam.",
        category: "Mobile Phone",
        duration: 7,
        visibility: true
    },
    {
        message: "I am in need of a Designer for a flyer, any person?",
        category: "Designing",
        duration: 5,
        visibility: true
    },
    {
        message: "Any idea where I can get a mechanic to fix my car?",
        category: "Mechanics",
        duration: 4,
        visibility: true
    }

]


export const categoryData : categoryType[] = [
    {
        name: "Plumber"
    },
    {
        name: "Mechanic"
    },
    {
        name: "Designing"
    },
    {
        name: "Education"
    },
    {
        name: "Hair Dressing"
    },
    {
        name: "Web Development"
    },
    {
        name: "Mobile Phone"
    },
    {
        name: "Electricity"
    },
    {
        name: "Construction"
    }
]


export const userData: UserType[] = [
    {
        username: "Mbianou Bradon",
        profileImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1677841863722/ui0fi1r4b.png",
        category: ["Web Development", "Education","Designing"],
        ban: false
    },
    {
        username: "Kimboh Lovette",
        profileImage: "https://avatars.githubusercontent.com/kimbohlovette",
        category: ["Web Development","Mobile Phone", "Designing", "Education"],
        ban: false
    },
    {
        username: "Samba Carlson",
        profileImage: "https://media.licdn.com/dms/image/D4D22AQHMHZAR-8tP2Q/feedshare-shrink_800/0/1680083304394?e=2147483647&v=beta&t=AzIxQlzmE5OJA3xd0m_DGKQFvhB-wd9ZOz1noCgxjKw",
        category: ["Web Development", "Education", "Designing", "Mechanic", "Construction"],
        ban: false
    },
    {
        username: "Estella Shembom",
        profileImage: "https://media.licdn.com/dms/image/C4D22AQFXhvjAWQ2kPg/feedshare-shrink_800/0/1628672051107?e=2147483647&v=beta&t=xi0Qn7Z4PMUnbG-zb3GDw9878ycnoARF0Vt11cg_1bg",
        category: ["Designing", "Education"],
        ban: false
    },
    {
        username: "Mbeute Olive",
        profileImage: "https://media.licdn.com/dms/image/C4D22AQFXhvjAWQ2kPg/feedshare-shrink_800/0/1628672051107?e=2147483647&v=beta&t=xi0Qn7Z4PMUnbG-zb3GDw9878ycnoARF0Vt11cg_1bg",
        category: ["Designing"],
        ban: false
    }
]
