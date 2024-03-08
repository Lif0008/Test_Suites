var assert = require('assert');
const ToDo = require('../ToDo');

describe('TS13 - Create TO-DO', function () {
    describe('Assess creating to-do items in projects, covering successful  creation, empty fields error, non-existent project error, and cancelation.', () => {
        it('Successfully Send Project for Evaluation', () => {
            const Title = "Suite1"
            const Work  = "Coding"
            const Sdate = "02-29-2024"
            const Edate = "03-30-2024"

            // Act
            const result = ToDo (Title,Work,Sdate,Edate);

            // Assert
            assert.equal(result,true);
        });
        
        it('Create To-Do with Empty Fields', () => {
            const Title = "Suite2"
            const Work  = "..."
            const Sdate = "01-29-2024"
            const Edate = "03-29-2024"

            // Act
            const result = ToDo (Title,Work,Sdate,Edate);

            // Assert
            assert.equal(result,false);
        });

        it('Create To-Do with Empty Fields', () => {
            const Title = "Suite3"
            const Work  = "Coding"
            const Sdate = "02-21-2024"
            const Edate = "03-27-2024"
            const Cancel = "Cancel"

            // Act
            const result = ToDo (Title,Work,Sdate,Edate,Cancel);

            // Assert
            assert.equal(result,true);
        });



    });
});