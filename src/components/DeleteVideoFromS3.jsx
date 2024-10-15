import { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { useNavigate } from "react-router-dom";

/**
 * Component to perform object delete from AWS S3
 */

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACESSS,
  secretAccessKey: process.env.REACT_APP_SECRET,
  region: process.env.REACT_APP_REGION,
});

const s3 = new AWS.S3();

function DeleteVideoFromS3({ s3Filename, onDeleteCleanup, videoId }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!s3Filename) return;

    const params = {
      Bucket: "we-show-you",
      Key: s3Filename,
    };

    s3.deleteObject(params, (err, data) => {
      if (err) {
        console.error("Unable to delete from S3:", err);
      } else {
        console.log(s3Filename, "Successfully deleted from S3", data);

        if (onDeleteCleanup) {
          onDeleteCleanup();
          navigate('/deleteConfirmation', {state: {videoId} });
        }
      }
    });
  }, [s3Filename, onDeleteCleanup]);

  
  return (
    <div>
      <h3>{s3Filename} has been deleted</h3>
      
    </div>
  );
}

export default DeleteVideoFromS3;
