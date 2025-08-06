import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
      doctor: "Dr. Neha Sharma",
      description:
        "Our Pediatrics department offers comprehensive care for infants, children, and adolescents. We ensure vaccination, nutrition counseling, and developmental assessments.",
      facilities: ["Child vaccination", "NICU", "Developmental screening"],
      fees: "₹500 (Consultation)",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
      doctor: "Dr. Arjun Verma",
      description:
        "Specializing in bones, joints, ligaments, and muscles. We offer fracture treatment, joint replacement, and physiotherapy support.",
      facilities: ["X-ray", "Joint Replacement Surgery", "Physiotherapy"],
      fees: "₹600 (Consultation)",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
      doctor: "Dr. Priya Mehta",
      description:
        "Cardiology department focuses on heart health with diagnostics like ECG, ECHO, and angiography. We offer expert consultation for heart diseases.",
      facilities: ["ECG", "ECHO", "24x7 Emergency Cardiac Care"],
      fees: "₹800 (Consultation)",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
      doctor: "Dr. Rajiv Khanna",
      description:
        "We diagnose and treat disorders of the brain, spinal cord, and nerves. Epilepsy, stroke, migraine and memory disorders are our key areas.",
      facilities: ["EEG", "MRI", "Neuro Rehabilitation"],
      fees: "₹750 (Consultation)",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
      doctor: "Dr. Sneha Patel",
      description:
        "Our Oncology unit provides diagnosis and treatment of various cancers with chemotherapy, radiation, and surgical options.",
      facilities: ["Chemotherapy", "Radiation Therapy", "Cancer Screening"],
      fees: "₹900 (Consultation)",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
      doctor: "Dr. Manish Rao",
      description:
        "High-tech imaging services including CT scan, MRI, Ultrasound, and X-rays to aid diagnosis and treatment.",
      facilities: ["CT Scan", "MRI", "Ultrasound"],
      fees: "₹700 (Scan fees vary)",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
      doctor: "Dr. Kavita Deshmukh",
      description:
        "We help patients regain mobility and strength after surgery, injury or illness. Sessions are personalized to patient needs.",
      facilities: ["Rehabilitation", "Post-surgical Therapy", "Pain Management"],
      fees: "₹400 per session",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
      doctor: "Dr. Amit Srivastava",
      description:
        "Treating all skin, hair, and nail conditions including acne, eczema, psoriasis, and cosmetic dermatology.",
      facilities: ["Laser Treatment", "Skin Biopsy", "Cosmetic Consultation"],
      fees: "₹500 (Consultation)",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
      doctor: "Dr. Swati Nanda",
      description:
        "Specialized care for ear, nose, and throat issues. Endoscopic exams, hearing tests, and minor surgeries available.",
      facilities: ["Audiometry", "Endoscopy", "Tonsillectomy"],
      fees: "₹500 (Consultation)",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {departmentsArray.map((depart, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedDepartment(depart)}
            style={{ cursor: "pointer" }}
          >
            <div className="depart-name">{depart.name}</div>
            <img src={depart.imageUrl} alt={depart.name} />
          </div>
        ))}
      </Carousel>

      {selectedDepartment && (
        <div className="department-details" style={{ marginTop: "2rem" }}>
          <h3>{selectedDepartment.name}</h3>
          <p><strong>Doctor:</strong> {selectedDepartment.doctor}</p>
          <p>{selectedDepartment.description}</p>
          <p><strong>Facilities:</strong></p>
          <ul>
            {selectedDepartment.facilities.map((facility, i) => (
              <li key={i}>{facility}</li>
            ))}
          </ul>
          <p><strong>Fees:</strong> {selectedDepartment.fees}</p>
        </div>
      )}
    </div>
  );
};

export default Departments;
