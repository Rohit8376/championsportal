export const Authentication=()=>{
    if(typeof window==="undefined"){
        return false;
    }
    if (localStorage.getItem("accessToken") || localStorage.getItem("role")=="lead" ){
        return true

    }
    else {
        return false
    }
}
export default Authentication
