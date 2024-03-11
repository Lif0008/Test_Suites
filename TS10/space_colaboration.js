function space_colaboration(User_fname,User_lname,User_id,Status,Content){
    if(User_fname === "" || User_lname === "" || User_id === "" || Status === "" )
    {
        return false;
    }
    if (Status === "Not-Authorized"){
        console.log("Error!!! Authorized Users Only", {User_fname,User_lname,User_id, Status});
        return false;
    }
    if (Content === "..."){
        console.log("Error!!! Content must be provided", { User_fname,User_lname,User_id, Status, Content});
        return false;
    }
    

    
    
    console.log("Work Collaboration is shared to the user Successfully", {User_fname,User_lname,User_id, Status});
    return true;
}
module.exports = space_colaboration;
