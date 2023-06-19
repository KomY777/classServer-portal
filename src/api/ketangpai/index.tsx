import React from "react";
import axios from "axios";


function Home_login_get(User:any){
    return(
        axios.get(
            '/user',
            {
                params:{
                    // User:JSON.stringify(User)
                    User
                }
            }
        )
    )
}



export {
    Home_login_get,
}
