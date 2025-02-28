import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/RegisterForm/action";
import DatePicker from "react-datepicker";
import { Alert } from "antd";
import validateForm from "../../Components/Layout/Validation";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "antd/dist/reset.css";

export default function Register() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: null,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  //Handle input Values Changes
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: prevErrors[fieldName] ? "" : prevErrors[fieldName],
    }));
  };

  const handleDateChange = (eOrDate, fieldName) => {
    if (typeof eOrDate === "object" && eOrDate instanceof Date) {
      // Handle date picker change
      setFormData((prevData) => ({
        ...prevData,
        dateOfBirth: eOrDate,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        dateOfBirth: prevErrors.dateOfBirth ? "" : prevErrors.dateOfBirth,
      }));
    } else {
      handleChange(eOrDate);
    }
  };

  //Form Submition
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm(formData, setErrors)) {
      return;
    }
    dispatch(registerUser(formData));
    setShowAlert(true); // Show alert

  setTimeout(() => {
    setShowAlert(false); // Hide alert after 3 seconds
  }, 500);
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: null,
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#392caf",
        minHeight: "100vh",
        paddingTop: "5px",
        position: "relative",
      }}
    >
      {showAlert && (
        <Alert
          message="Registered has been Done successfully"
          type="success"
          closable
          onClose={() => setShowAlert(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "300px",
            zIndex: 1000,
          }}
        />
      )}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow p-3 mb-5 bg-body rounded ">
              <div className="card-title text-center pt-3 ">
                <h4>Registration Form</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-md-3 col-form-label text-sm-end fw-500 required-label">
                      Full Name
                    </label>
                    <div className="col-sm-8 col-md-9">
                      <input
                        type="text"
                        name="firstName"
                        className={`form-control ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                  </div>
                  {/*Last Name */}
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-md-3 col-form-label text-sm-end fw-500 required-label">
                      Last Name
                    </label>
                    <div className="col-sm-8 col-md-9">
                      <input
                        type="text"
                        name="lastName"
                        className={`form-control ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-md-3 col-form-label text-sm-end fw-500 required-label">
                      Email
                    </label>
                    <div className="col-sm-8 col-md-9">
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-md-3 col-form-label text-sm-end fw-500 required-label">
                      Password
                    </label>
                    <div className="col-sm-8 col-md-9">
                      <input
                        type="password"
                        name="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-md-3 col-form-label text-sm-end fw-500 required-label">
                      Confirm Password
                    </label>
                    <div className="col-sm-8 col-md-9">
                      <input
                        type="password"
                        name="confirmPassword"
                        className={`form-control ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && (
                        <div className="invalid-feedback">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* dateOfBirth */}
                  <div className="mb-3 row">
                    <label className="col-sm-4 col-md-3 col-form-label text-sm-end fw-500 required-label">
                      Date of Birth
                    </label>
                    <div className="col-sm-8 col-md-9">
                      <DatePicker
                        selected={formData.dateOfBirth}
                        onChange={(date) =>
                          handleDateChange(date, "dateOfBirth")
                        }
                        className={`form-control ${
                          errors.dateOfBirth ? "is-invalid" : ""
                        }`}
                        dateFormat="dd-MM-yyyy"
                        // maxDate={minDate}
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                        placeholderText="Select Date of Birth"
                        required
                      />
                      {errors.dateOfBirth && (
                        <div className="invalid-feedback d-block">
                          {errors.dateOfBirth}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mb-3 row">
                    <div className="col-sm-4 col-md-3"></div>
                    <div className="col-sm-8 col-md-9">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 fw-500"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
