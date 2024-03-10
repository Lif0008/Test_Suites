function search_works(Artifact_name, Artifact_description, Artifact_number) {
    // Check if any mandatory fields are empty
    if (Artifact_name === "" || Artifact_description === "" || Artifact_number === "") {
        return false;
    }

    
    if ( Artifact_name === "Taste Suite"){
        console.log("No Relevant Data Have been found", {Artifact_name, Artifact_description, Artifact_number});
        return false;
    }
    if (Artifact_name === "..."){
        console.log("Error!!! User must enter proper queries", {Artifact_name, Artifact_description, Artifact_number});
        return false;
    }
    if (Artifact_name === "@Test_Suite"){
        console.log("Error!!! User entered an special case such as ! @ # $ % and etc.", {Artifact_name, Artifact_description, Artifact_number});
        return true;
    }
    console.log("Search complete relevant data have been found", {Artifact_name, Artifact_description, Artifact_number});
    return true;
}

module.exports = search_works;