
function admin(Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status){

    if(Ins_Lname === "" || Ins_Fname === "" || Ins_ID === "" || Occupation === "" || Status === "")
    {
        return false;
    }
    if (Occupation === "Student"){
        console.log("Unsucessful User is a Student:", { Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status});
        return false;
    }
    if (Status === "Admin"){
        console.log("Error User is already an Admin", {Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status});
        return false;
    }
    if (Status === "Revoked"){
        console.log("Privileges Succesfully Removed", {Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status});
        return false;
    }

    
    console.log("Successfully Add Instructor as Admin:", {Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status});
    return true;
}
module.exports = admin;

