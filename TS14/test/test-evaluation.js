var assert = require('assert');
const evaluation = require('../evaluation');

describe('TS14 - Send Projects for Evaluation', function () {
    describe('Validate sending projects for evaluation, including successful initiation, incomplete information error, non-existent project error, and cancelation.', () => {
        it('Successfully Send Project for Evaluation', () => {
            const Title = "TS1"
            const Work_Description = "Test_Suite1"
            const Sdate = "02-29-2024"
            const Edate = "03-30-2024"

            // Act
            const result = evaluation (Title,Work_Description,Sdate,Edate);

            // Assert
            assert.equal(result,true);
        });
        it('Successfully Send Project for Evaluation', () => {
            const Title = "TS2"
            const Work_Description = "..."
            const Sdate = "03-01-..."
            const Edate = "03-30-2024"

            // Act
            const result = evaluation (Title,Work_Description,Sdate,Edate);

            // Assert
            assert.equal(result,false);
        });
        it('Send Non-Existent Project for Evaluation', () => {
            const Title = "Hello"
            const Work_Description = "Others"
            const Sdate = "01-29-2024"
            const Edate = "05-30-2025"

            // Act
            const result = evaluation (Title,Work_Description,Sdate,Edate);

            // Assert
            assert.equal(result,false);
        });
        it('Cancel Sending Project for Evaluation', () => {
            const Title = "TS3"
            const Work_Description = "Test_Suite3"
            const Sdate = "03-01-2024"
            const Edate = "03-29-2024"
            const Cancel = "Cancel"

            // Act
            const result = evaluation (Title,Work_Description,Sdate,Edate,Cancel);

            // Assert
            assert.equal(result,true);
        });




    });
});