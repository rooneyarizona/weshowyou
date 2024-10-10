import { useState } from "react";

/**
 * Compenent provides drop down menu for Contact Form
 * @returns formType state for input
 */
function FormContact ({ onFormChange }) {
  const [form, setForm] = useState("General");

  function handleFormSelection(e) {
    const selectedForm = e.target.value;
    setForm(selectedForm);
    onFormChange(selectedForm);
  }

  return (
    <select className="dropDownMenu" value={form} onChange={handleFormSelection}>
      <option value="General">General Feedback</option>
      <option value="Inappropriate">Inappropriate Content</option>
      <option value="Error">Page Error</option>
      
    </select>
  );
}

export default FormContact;
