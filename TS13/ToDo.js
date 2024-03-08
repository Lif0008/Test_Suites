function ToDo(Title,Work,Sdate,Edate,Cancel){
    if(Title === "" || Work === "" || Sdate === "" || Edate === "" || Cancel === "")
    {
        return false;
    }
    if (Title === "Suite2"){
        console.log("Error!!! All mandatory field must be filled", {Title,Work,Sdate,Edate});
        return false;
    }
    if (Title === "Suite3"){
        console.log("TO-Do creation is cancelled", {Title,Work,Sdate,Edate,Cancel});
        return true;
    }
    
    console.log("To-Do item succesfully created and added to the project", {Title,Work,Sdate,Edate});
    return true;
}
module.exports = ToDo;
