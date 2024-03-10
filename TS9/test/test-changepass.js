var assert = require('assert');
const changepass = require('../changepass');

describe('TS9 - Change Password', function () {
    describe('Validate password change, including successful changes, incorrect current password, weak password strength, cancellation, and handling empty fields.', () => {
        it('Successful Password Change', () => {
    
            const current_word = "Temporary";
            const New_pass = "123123UIC123";
          
            // Act
            const result = changepass(current_word,New_pass);
            // Assert
            assert.equal(result,true);
        });
        it('Incorrect Current Password', () => {
           
            const current_word = "Tempass";
            const New_pass = "123123UIC123";
            // Act
            const result = changepass(current_word, New_pass );
            // Assert
            assert.equal(result,true);
        });
        it('Weak Password Strength', () => {
           
            const current_word = "Temppass";
            const New_pass = "Weak";
            // Act
            const result = changepass(current_word, New_pass );
            // Assert
            assert.equal(result,true);
        });it('Password Change with Empty Fields', () => {
           
            const current_word = "...";
            const New_pass = "...";
            // Act
            const result = changepass(current_word, New_pass );
            // Assert
            assert.equal(result,false);
        });it('Cancel Password Change', () => {
           
            const current_word = "123123123IUC";
            const New_pass = "UIC123123123";
            const Cancel = "Cancel"
            // Act
            const result = changepass(current_word, New_pass, Cancel );
            // Assert
            assert.equal(result,true);
        });
    



      });
});