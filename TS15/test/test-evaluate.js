var assert = require('assert');
const evaluate = require('../evaluate');

describe('TS15 - Evaluate Works', function () {
    describe('Evaluate work or artifact assessments, covering successful evaluations, incomplete or missing works error, reevaluations, non-existent works error, and cancelation.', () => {
        it('Successfully Evaluate Works', () => {
            const Title = "TS1"
            const Work_Description = "Test_Suite1"
            const Sdate = "02-29-2024"
            const Edate = "03-30-2024"

            // Act
            const result = evaluate (Title,Work_Description,Sdate,Edate);

            // Assert
            assert.equal(result,true);
        });

        it('Cancel Evaluation', () => {
            const Title = "TS2"
            const Work_Description = "Test_Suite2"
            const Sdate = "03-01-2024"
            const Edate = "03-30-2024"
            const Cancel = "Cancel"
            // Act
            const result = evaluate (Title,Work_Description,Sdate,Edate,Cancel);

            // Assert
            assert.equal(result,true);
        });
        it('Successfully Evaluate Works', () => {
            const Title = "TS3"
            const Work_Description = "Test_Suite3"
            const Sdate = "03-01-2024"
            const Edate = "03-29-2024"

            // Act
            const result = evaluate (Title,Work_Description,Sdate,Edate);

            // Assert
            assert.equal(result,true);
        });





    });
});