
function evaluate(Title,Work_Description,Sdate,Edate,Cancel){
    if(Title === "" || Work_Description === "" || Sdate === "" || Edate === "" || Cancel === "")
    {
        return false;
    }
    if (Title === "TS2"){
        console.log("Work Evaluate Cancelled", {Title,Work_Description,Sdate,Edate,Cancel});
        return true;
    }
    if (Title === "TS3"){
        console.log("Warning Reevaluation will overite previous result", {Title,Work_Description,Sdate,Edate});
        return true;
    }

    
    console.log("Successfully Evaluate Works", {Title,Work_Description,Sdate,Edate});
    return true;
}
module.exports = evaluate;

