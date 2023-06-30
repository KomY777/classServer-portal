import React from "react";
import axios from "axios";



/**
 * 用户登录
 * @param User
 * @constructor
 */
function Ketangpai_USER_LOGIN(User:any){
    return(
        axios.get(
            "/api/user/login",
            {
                params:{
                    username:User.userName,
                    password:User.password,
                }
            }
        )
    )
}


/**
 * 注销用户
 * @constructor
 */
function Ketangpai_USER_LOGOUT(){
    return(
        axios.get(
            "/api/user/login",
        )
    )
}

/**
 * 注册新用户
 * @param User
 * @constructor
 */
function Ketangpai_USER_REGISTER(User:any){
    return(
        axios.post(
            "/api/user/register",
            {
                identity:User.identity,
                name:User.username,
                password:User.password,
                username:User.username,
                number:User.number
            }
        )
    )
}


/**
 * 发送邮件
 * User
 * @constructor
 */
function Ketangpai_USER_SENDMAIL(email:any){
    return(
        axios.post(
            "/api/user/sendMail",
            {
                email:email,
            }
        )
    )
}


/**
 * 更改密码
 * @param newUser
 * @constructor
 */
function Ketangpai_USER_UPDATE(newUser:any){
    return(
        axios.get(
            "/api/user/update",
            {
                params:{
                    username:newUser.username,
                    newPassword:newUser.newPassword,
                    password:newUser.password,
                }
            }
        )
    )
}

export {
    Ketangpai_USER_LOGIN,
    Ketangpai_USER_LOGOUT,
    Ketangpai_USER_REGISTER,
    Ketangpai_USER_SENDMAIL,
    Ketangpai_USER_UPDATE,
}