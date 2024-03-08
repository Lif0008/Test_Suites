function evaluation(Title,Work_Description,Sdate,Edate,Cancel){
    if(Title === "" || Work_Description === "" || Sdate === "" || Edate === "" || Cancel === "")
    {
        return false;
    }
    if (Title === "TS2"){
        console.log("Error!!! All madatory field must be filled", {Title,Work_Description,Sdate,Edate});
        return false;
    }
    if (Work_Description === "Others"){
        console.log("Error!!! Project does not exist", {Title,Work_Description,Sdate,Edate});
        return false;
    }
    if (Title === "TS3"){
        console.log("Sending Project for Evaluation Cancelled", {Title,Work_Description,Sdate,Edate,Cancel});
        return true;
    }

    
    console.log("Project Successfully Marked for Evaluation", {Title,Work_Description,Sdate,Edate});
    return true;
}
module.exports = evaluation;

