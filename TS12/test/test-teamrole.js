var assert = require('assert');
const teamrole = require('../teamrole');

describe('TS12 - Assigned Team Role', function () {
    describe('Validate team role assignments for success, non-existent user error,  insufficient permissions error, reassignments, and assignments.', () => {
        it('Successfully Assign Team Role', () => {
            const Fname = "Mark"
            const Lname = "Stuart"
            const ID = "121212"
            const Role = "Analyst"

            // Act
            const result = teamrole (Fname,Lname,ID,Role);

            // Assert
            assert.equal(result,true);
        });
        it('Reassign Team Role', () => {
            const Fname = "Jack"
            const Lname = "Sparrow"
            const ID = "151515"
            const Role = "Manager"
            // Act
            const result = teamrole (Fname,Lname,ID,Role);

            // Assert
            assert.equal(result,false);
       
        });

        it('Reassign Team Role', () => {
            const Fname = "John"
            const Lname = "Snow"
            const ID = "131313"
            const Role = "Manager"
            const Reassign = "Reassign"
            // Act
            const result = teamrole (Fname,Lname,ID,Role,Reassign);

            // Assert
            assert.equal(result,true);
       
        });



    });
});