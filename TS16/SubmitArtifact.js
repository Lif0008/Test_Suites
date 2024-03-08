
function Artifact(Title,Artifact_Description,Sdate,Edate,Cancel ){

    if(Title === "" || Artifact_Description === "" || Sdate === "" || Edate === "" || Cancel === "")
    {
        return false;
    }
    if (Title === "Lesson2"){
        console.log("Try Again Missing Information:", { Title,Artifact_Description,Sdate,Edate});
        return false;
    }
    if (Title === "Lesson1"){
        console.log("Warning Files is already Submitted", {Title,Artifact_Description,Sdate,Edate});
        return false;
    }
    if (Title === "Lesson4"){
        console.log("Artifact Submission Cancelled", {Title,Artifact_Description,Sdate,Edate,Cancel});
        return false;
    }

    
    console.log("Successfully Submit Artifacts", {Title,Artifact_Description,Sdate,Edate});
    return true;
}
module.exports = Artifact;

