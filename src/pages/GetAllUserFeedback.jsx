import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";

/**
 * 
 * User Feedback reporting based on form submissions
 */

export default function GetAllUserFeedback() {
  const [userFeedback, setUserFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUserFeedback() {
      try {
        const res = await fetch("http://localhost:5000/api/userFeedback");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setUserFeedback(data.userFeedback);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user feedback:", error);
        setError(error.message);
        setLoading(false);
      }
    }
    getUserFeedback();
  }, []);

  useEffect(() => {
    console.log("User feedback state updated:", userFeedback);
  }, [userFeedback]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container">
        <h1>User Feedback</h1>
        {userFeedback.length > 0 ? (
          <table className="user-table">
            <thead>
              <tr>
                <td>ID</td>
                <td>Username</td>
                <td>Feedback Type</td>
                <td>Date Submitted</td>
                <td>E-mail</td>
                <td>Comment</td>
              </tr>
            </thead>
            <tbody>
              {userFeedback.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.id}</td>
                  <td>{feedback.userName}</td>
                  <td>{feedback.formType}</td>
                  <td>
                    {new Date(feedback.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>{feedback.eMail}</td>
                  <td>{feedback.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Error Retrieving Feedback 🙈</p>
        )}
      </div>
      <span>
        <BackButton location={"administration"} />
      </span>
    </>
  );
}
