
export  const getUserFromLocalStorage = () : User | null => {

    const user = localStorage.getItem("user")
    if(user) return JSON.parse(user)
    return  null

}


export  const setUserToLocalStorage = (user : User) =>{

    localStorage.setItem("user", JSON.stringify(user))
}

