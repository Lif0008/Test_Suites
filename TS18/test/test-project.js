var assert = require('assert');
const create = require('../project');

describe('TS18 - Create Project', function () {
    describe('Evaluate project creation within teams, including successful creation, incomplete information error, non-existent team error, and cancelation.', () => {
        it('Successfully Create Project', () => {
            const Project_Name ="E&T";
            const Project_ID ="c2fLJigZUXHO8OEeEMlUa";
            const Project_Description ="Hi";
            // Act
            const result = create(Project_Name,Project_ID,Project_Description);

            // Assert
            assert.equal(result,true);
        });
        it('Create Project with Incomplete Information', () => {
            // Incomplete Files
            const Project_Name ="USAMS";
            const Project_ID ="";
            const Project_Description ="";
            // Act
            const result = create(Project_Name,Project_ID,Project_Description);
            // Assert
            assert.equal(result,false);
        });
          it('Cancel Project Creation', () => {
            // Cancellation
            const Project_Name ="E&T";
            const Project_ID ="c2fLJigZUXHO8OEeEMlUa";
            const Project_Description ="Hi";
            const Cancel_Project ="Cancel";
            // Act
            const result = create(Project_Name,Project_ID,Project_Description,Cancel_Project);
            // Assert
            assert.equal(result,false);
          
        });


    });
});