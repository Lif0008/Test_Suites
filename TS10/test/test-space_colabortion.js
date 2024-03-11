var assert = require('assert');
const space_colaboration = require('../space_colaboration');

describe('TS10 - Collaboration in Space', function () {
    describe('Evaluate space collaboration with successful, unauthorized, empty content, editing, and cancellation actions.', () => {
        it('Successful Collaboration', () => {
            const User_fname = "Jack"
            const User_lname  = "Sparrow"
            const User_id = "123123123"
            const Status = "Authorized"

            // Act
            const result = space_colaboration (User_fname,User_lname,User_id,Status);

            // Assert
            assert.equal(result,true);
        });
        it('Collaborate with Unauthorized User', () => {
            const User_fname = "John"
            const User_lname  = "Doe"
            const User_id = "123123124"
            const Status = "Not-Authorized"

            // Act
            const result = space_colaboration (User_fname,User_lname,User_id,Status);

            // Assert
            assert.equal(result,false);
        });
        it('Collaborate with Empty Content', () => {
            const User_fname = "Meg"
            const User_lname  = "Taylor"
            const User_id = "123123125"
            const Status = "Authorized"

            const Content = "..."

            // Act
            const result = space_colaboration (User_fname,User_lname,User_id,Status, Content);

            // Assert
            assert.equal(result,false);
        });
      


    });
});