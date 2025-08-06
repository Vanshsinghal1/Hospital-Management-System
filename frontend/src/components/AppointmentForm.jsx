import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [department, setDepartment] = useState("Pediatrics");

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set up the email template variables
    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      dob,
      department,
    };

    // Send email using Email.js
    emailjs
      .send(
        "service_7eboi0e", // Replace with your Service ID
        "template_30oq2gn", // Replace with your Template ID
        templateParams,
        "90zVDxYfr6u8MCH9f" // Replace with your Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Appointment request sent successfully!");

        // Reset the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDob("");
        setDepartment("Pediatrics");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send appointment request. Please try again.");
      });
  };

  return (
    <div className="container form-component appointment-form">
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Appointment Date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            {departmentsArray.map((dept, index) => (
              <option value={dept} key={index}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Get Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
