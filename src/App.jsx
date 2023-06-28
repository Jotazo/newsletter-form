import { useState } from "react";

import FormPage from "./pages/FormPage";
import SuccessPage from "./pages/SuccessPage";

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function App() {
  const [formData, setFormData] = useState({ email: "" });
  const [validEmail, setValidEmail] = useState(true);
  const [showFormPage, setShowFormPage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setValidEmail(false);
      return;
    }
    setShowFormPage(false);
  };

  const handleChange = (e) => {
    setFormData({ email: e.target.value });
    setValidEmail(true);
  };

  return (
    <>
      {showFormPage ? (
        <FormPage
          email={formData.email}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          validEmail={validEmail}
        />
      ) : (
        <SuccessPage
          handleClick={() => {
            setShowFormPage(true);
            setFormData({ email: "" });
          }}
          email={formData.email}
        />
      )}
    </>
  );
}

export default App;

