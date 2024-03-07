
function create(Project_Name,Project_ID,Project_Description,Cancel_Project){

    if(Project_Name === "" || Project_ID === "" || Project_Description === "" || Cancel_Project === "")
    {
        return false;
    }
    if (Project_Name === "USAMS"){
        console.log("Incomplete Information", {Project_Name,Project_ID,Project_Description });
        return false;
    }
    if (Cancel_Project === "Cancel"){
        console.log("Is succesfully cancelled", {Project_Name,Project_ID,Project_Description,Cancel_Project });
        return false;
    }

    
    console.log("Successfully Create Project:", { Project_Name,Project_ID,Project_Description});
    return true;
}
module.exports = create;

