const today = new Date();
const minDate = new Date(today.setFullYear(today.getFullYear() - 18));

const validateForm = (formData, setErrors) => {
  let newErrors = {};

  // First Name validation
  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
    newErrors.firstName = "First name can only contain letters and spaces";
  } else if (formData.firstName.length > 50) {
    newErrors.firstName = "First name cannot be more than 50 characters";
  }

  // Last Name validation
  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
    newErrors.firstName = "First name can only contain letters and spaces";
  } else if (formData.lastName.length > 50) {
    newErrors.lastName = "Last name cannot be more than 50 characters";
  }

  // Email validation
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
  ) {
    newErrors.email = "Invalid email format";
  }

  // Password validation
  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters";
  }

  // Confirm Password validation
  if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword = "Confirm password is required";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  // Date of Birth validation
  if (!formData.dateOfBirth) {
    newErrors.dateOfBirth = "Date of birth is required";
  } else if (new Date(formData.dateOfBirth) > minDate) {
    newErrors.dateOfBirth = "You must be at least 18 years old";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

export default validateForm;
