
export const LOGIN_START = (userCredentials) => ({
    type:"LOGIN_START"
})

export const LOGIN_SUCCES = (user) => ({
    type:"LOGIN_SUCCES",
    payload:user
})
export const LOGIN_ERROR = () => ({
    type:"LOGIN_FAILURE"
})
export const LOGOUT = () => ({
    type:"LOGOUT"
})