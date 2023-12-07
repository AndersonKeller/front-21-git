import {baseUrl} from "./api.js"
async function login(){

    const res = await fetch(`${baseUrl}/login`,{method:"POST"})
    const resJson = await res.json()
    console.log(resJson)
}
login()