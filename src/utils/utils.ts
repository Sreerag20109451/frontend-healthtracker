
export  const getUserFromLocalStorage = () : User | null => {

    const user = localStorage.getItem("user")
    if(user) return JSON.parse(user)
    return  null

}


export  const setUserToLocalStorage = (user : User) =>{

    localStorage.setItem("user", JSON.stringify(user))
}

export const features: Features[] = [
    {
        imageURL: "https://media.istockphoto.com/id/1961182478/photo/happy-young-woman-using-phone.jpg?s=2048x2048&w=is&k=20&c=NFFSYvt-8v-FPwN0Vyio9BqOL8fSnjMXnEXmYZf55tU=",
        name: "Create Your Personalized Health Profile and Begin Your Journey",
        description: "Start by registering your profile with detailed health information to personalize your experience. This profile will be used to tailor your health tracking and make suggestions based on your personal goals. Once completed, you’ll have a comprehensive understanding of your health status and wellness objectives. Our system is designed to help you make more informed decisions regarding your fitness and well-being. By setting clear goals and tracking your progress, you’re setting the foundation for a healthier lifestyle."
    },
    {
        imageURL: "https://plus.unsplash.com/premium_photo-1706300225472-44df84e573a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Track Every Activity and Stay on Top of Your Health Goals",
        description: "Track every aspect of your daily physical activities, including exercises, walks, and sports. Keep a detailed log of your progress over time, helping you identify patterns and improvements. Our system allows you to categorize your activities and measure various parameters like time, intensity, and calories burned. This data-driven approach will help you optimize your workout routine. Whether your goal is to lose weight, build strength, or improve endurance, we’ve got you covered."
    },
    {
        imageURL: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Generate Detailed Health Reports and Insights",
        description: "Once you’ve entered your health data and activity logs, our system generates comprehensive reports based on your profile. These reports help you understand trends and track progress in key areas of your health. Get valuable insights into your physical and mental well-being, identifying strengths and areas for improvement. With visual charts and statistics, you can monitor your development over time. Our reports are an essential tool for anyone serious about improving their health and achieving long-term wellness."
    }
];
