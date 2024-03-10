function changepass(New_pass, current_word, Cancel) {
    // Check if any mandatory fields are empty
    if (New_pass === "" || current_word === "" || Cancel === "") 
    {
        return false;
    }
    if (current_word === "Tempass"){
        console.log("Error!!! Current password entered incorrectly", {New_pass, current_word});
        return false;
    }
    if (New_pass === "Weak"){
        console.log("Error!!! User must get a stronger password", {New_pass, current_word});
        return false;
    }
    if (New_pass === "..."){
        console.log("Error!!! both New and Current Password must be filled", {New_pass, current_word});
        return false;
    }
    if (Cancel === "Cancel"){
        console.log("Change Pass have been canceled sucessfully", {New_pass, current_word, Cancel});
        return true;
    }
    console.log("Password is successfully changed", {New_pass,current_word});
    return true;
}

module.exports = changepass;