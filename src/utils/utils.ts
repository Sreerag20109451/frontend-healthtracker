export  const getUserFromLocalStorage = () : User | null => {

    const user = localStorage.getItem("user")
    if(user) return JSON.parse(user)
    return  null

}


export  const setUserToLocalStorage = (user : User) =>{

    localStorage.setItem("user", JSON.stringify(user))
}

export const features: Features[] =[{

    imageURL: "https://media.istockphoto.com/id/1961182478/photo/happy-young-woman-using-phone.jpg?s=2048x2048&w=is&k=20&c=NFFSYvt-8v-FPwN0Vyio9BqOL8fSnjMXnEXmYZf55tU=",
    name: "Register your profile",
    description: "Complete your user registration, for a comprehensive tracking of your health"
},
    {
        imageURL: "https://plus.unsplash.com/premium_photo-1706300225472-44df84e573a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Track your activities",
        description:  "Keep track of your activities and excercises"
    },
    {
        imageURL: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Generate Report",
        description: "Get your comprehensive health report based on your profile"
    },
    {
        imageURL: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Do not let health risks catch you",
        description: "Stay ahead in your health with our suggestions"
    },
    {
        imageURL:"https://media.istockphoto.com/id/2081769995/photo/holding-a-bowl-of-chicken-salad.jpg?s=2048x2048&w=is&k=20&c=DXOZF1MjqvdgUDQnb9g99d0lxiHEe6Gxau5YLcWMutA=",
        name: "Eat healthy",
        description: "Stay ahead in your health with our  diets"
    },
]