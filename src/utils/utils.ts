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
    },
    {
        imageURL: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Stay Ahead of Health Risks with Preventative Tips and Suggestions",
        description: "Our platform doesn't just track your health, it actively suggests ways to stay ahead of potential risks. By monitoring changes in your activity and health data, we provide timely advice on how to improve your overall well-being. Whether it’s adjusting your exercise routine or fine-tuning your diet, we offer customized recommendations. Stay informed about health warnings that could impact your wellness, allowing you to make proactive decisions. Our goal is to help you live a longer, healthier life by minimizing risks before they become an issue."
    },
    {
        imageURL: "https://media.istockphoto.com/id/2081769995/photo/holding-a-bowl-of-chicken-salad.jpg?s=2048x2048&w=is&k=20&c=DXOZF1MjqvdgUDQnb9g99d0lxiHEe6Gxau5YLcWMutA=",
        name: "Adopt a Healthier Lifestyle with Tailored Nutrition Advice",
        description: "Eating healthy is one of the cornerstones of maintaining good health. Our platform provides personalized diet recommendations based on your preferences, goals, and health profile. Whether you're looking to lose weight, build muscle, or simply improve your eating habits, we offer meal plans that suit your lifestyle. Learn about nutritious food options and how they can benefit you in the long run. By incorporating healthy eating habits into your daily routine, you can significantly improve your energy levels, boost your immune system, and reduce the risk of chronic diseases."
    }
];
