var assert = require('assert');
const Artifact = require('../SubmitArtifact');

describe('TS16 - Submit Artifacts', function () {
    describe('Validate artifact submission, covering successful submissions, incomplete or missing artifacts error, non-existent artifacts error, resubmissions, and cancelation', () => {
        it('Successfully Submit Artifacts', () => {
            const Title = "Lesson3"
            const Artifact_Description = "Test"
            const Sdate = "03-01-2024"
            const Edate = "03-29-2024"

            // Act
            const result = Artifact (Title,Artifact_Description,Sdate,Edate);

            // Assert
            assert.equal(result,true);
        });
        
        it('Submit Incomplete or Missing Artifacts', () => {
            const Title = "Lesson2"
            const Artifact_Description = "..."
            const Sdate = "03-01-2024"
            const Edate = "03-30-2024"
            // Act
            const result = Artifact (Title,Artifact_Description,Sdate,Edate);

            // Assert
            assert.equal(result,false);
        });
        
        it('Resubmit Previously Submitted Artifacts', () => {
            const Title = "Lesson1"
            const Artifact_Description = "Front"
            const Sdate = "02-29-2024"
            const Edate = "03-30-2024"
            // Act
            const result = Artifact (Title,Artifact_Description,Sdate,Edate);

            // Assert
            assert.equal(result,false);
        });
        it('Cancel Artifact Submission', () => {
            const Title = "Lesson4"
            const Artifact_Description = "Scrap"
            const Sdate = "03-15-2024"
            const Edate = "04-15-2024"
            const Cancel = "Cancel"
            // Act
            const result = Artifact (Title,Artifact_Description,Sdate,Edate,Cancel);

            // Assert
            assert.equal(result,false);
        });


    });
});