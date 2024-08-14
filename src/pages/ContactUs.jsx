import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

/**
 * Form to post data to userFeedback API
 * 
 */

function ContactUs() {
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [formType, setFormType] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      userName,
      eMail,
      comment,
      formType,
      createdAt,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/userFeedback/submitForm",
        formData
      );
      console.log(response.data);
      alert("Form Submitted!");
/**
 * useNavigate to direct to user to success page after submission
 */

      navigate("/formSubmitted");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error submitting form.");
    }
  };

  return (
    <>
      <div>
        <h1 align="center">Contact Us 📨</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="E-Mail Address"
              value={eMail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input className="textArea"
              type="textarea"
              rows="20"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Form Type"
              value={formType}
              onChange={(e) => setFormType(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;