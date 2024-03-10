var assert = require('assert');
const search_works = require('../search_works');

describe('TS8 - Search Works', function () {
    describe('Evaluate system search for works/artifacts, ensuring effective retrieval based on user queries.', () => {
        it('Successful Search', () => {
            const Artifact_name = "Test Suite";
            const Artifact_description = "TS8";
            const Artifact_number = "8";
            // Act
            const result = search_works(Artifact_name, Artifact_description, Artifact_number );
            // Assert
            assert.equal(result,true);
        });

        it('Search for Non-Existent Work', () => {
            const Artifact_name = "Taste Suite";
            const Artifact_description = "TSNull";
            const Artifact_number = "100";
            // Act
            const result = search_works(Artifact_name, Artifact_description, Artifact_number );
            // Assert
            assert.equal(result,false);
        });
        it('Search with Empty Query', () => {
            const Artifact_name = "...";
            const Artifact_description = "TSNull";
            const Artifact_number = "100";
            // Act
            const result = search_works(Artifact_name, Artifact_description, Artifact_number );
            // Assert
            assert.equal(result,false);

        });
        it('Search with Special ', () => {
            const Artifact_name = "@Test_Suite";
            const Artifact_description = "#TS8";
            const Artifact_number = "#8";
            // Act
            const result = search_works(Artifact_name, Artifact_description, Artifact_number );
            // Assert
            assert.equal(result,true);

        });





      });
});