var assert = require('assert');
const admin = require('../admin');

describe('TS17 - Add Instructor as Admin', function () {
    describe('Assess adding instructors as admins, covering successful additions, non-instructor error, insufficient permissions error, removing admin privileges, and cancelation.', () => {
        it('Successfully Add Instructor as Admin', () => {
            const Ins_Lname = "Doe"
            const Ins_Fname = "John"
            const Ins_ID = "101010"
            const Occupation = "Instructor"
            const Status = "NotAdmin"
            // Act
            const result = admin (Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status);

            // Assert
            assert.equal(result,true);
        });
        
        it('Add Non-Instructor as Admin', () => {
            const Ins_Lname = "Sparrow"
            const Ins_Fname = "Jack"
            const Ins_ID = "100001"
            const Occupation = "Student"
            const Status = "NotAdmin"
            // Act
            const result = admin (Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status);

            // Assert
            assert.equal(result,false);
        });
        
        it('Add Instructor Already an Admin', () => {
            const Ins_Lname = "Young"
            const Ins_Fname = "Adam"
            const Ins_ID = "121212"
            const Occupation = "Instructor"
            const Status = "Admin"
            // Act
            const result = admin (Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status);

            // Assert
            assert.equal(result,false);
        });
        it('Remove Admin Privileges', () => {
            const Ins_Lname = "Miller"
            const Ins_Fname = "Christine"
            const Ins_ID = "131313"
            const Occupation = "Instructor"
            const Status = "Revoked"
            // Act
            const result = admin (Ins_Lname,Ins_Fname,Ins_ID,Occupation,Status);

            // Assert
            assert.equal(result,false);
        });


    });
});