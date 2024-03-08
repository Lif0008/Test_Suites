function teamrole(Fname,Lname,ID,Role,Reassign){
    if(Fname === "" || Lname === "" || ID === "" || Role === "" || Reassign === "")
    {
        return false;
    }
    if (Fname === "Jack"){
        console.log("Error!!! User does not exist", {Fname,Lname,ID,Role});
        return false;
    }
    if (Fname === "John"){
        console.log("The team member's role is successfully updated to the new assigned role.", {Fname,Lname,ID,Role,Reassign});
        return true;
    }
    console.log("Team member's role is successfully updated.", {Fname,Lname,ID,Role});
    return true;
}
module.exports = teamrole;
