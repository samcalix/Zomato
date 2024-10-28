import React, { useState } from "react";
import "./Signup.css";
import { register } from "./Auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("password does not match");
      return;
    }
    try {
      await register(email, password);
      setSuccess("Registration succesful you can now login");
      setError("");
      setEmail("");
      setPassword("");
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration error", error);
      setError("Registration Failed");
      setSuccess("");
    }
  };

  return (
    <div>
      <div className="body">
        <div className="card login">
          <h2>Sign in</h2>
          <form onSubmit={handleRegister}>
            <label>E-mail-ID</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
              value={email}
            ></input>
            <br />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              required
              value={password}
            ></input>
            <br />
            <label>Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              value={confirmpassword}
              required
            ></input>
            <br />
            <button type="submit">SUBMIT</button>
            {error && <p style={{ color: "red" }}>{}error</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
  //   const [formData, setFormData] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirmpassword: "",
  //   });
  //   const [error, setError] = useState({});
  //   const validate = () => {
  //     const newErrors = {};
  //     if (!formData.username) newErrors.username = "Enter your username";
  //     if (!formData.email) newErrors.email = "Enter your mailID";
  //     else if (!/\S+@\S+\.\S/.test(formData.email))
  //       newErrors.email = "Enter valid Email ID";
  //     if (!formData.password) newErrors.password = "Enter Password";
  //     else {
  //       if (formData.password.length < 8)
  //         newErrors.password = "Password must contain atleast 8 characters";
  //       if (!/[A-Z]/.test(formData.password))
  //         newErrors.password = "Password must contain atleast one uppercase";
  //       if (!/[a-z]/.test(formData.password))
  //         newErrors.password = "password must contain atleast one lowercase";
  //       if (!/[~!@#$%^&*()_+]/.test(formData.password))
  //         newErrors.password =
  //           "password must contain atleast one special character";
  //     }
  //     if (!formData.confirmpassword)
  //       newErrors.confirmpassword = "this field is compalsory";
  //     else if (formData.password !== formData.confirmpassword)
  //       newErrors.confirmpassword = "Password does not match";
  //     return newErrors;
  //   };
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const validationError = validate();
  //     if (Object.keys(validationError).length === 0) {
  //       console.log("Form data validation", formData);
  //       setFormData({
  //         username: "",
  //         email: "",
  //         password: "",
  //         confirmpassword: "",
  //       });
  //       setError({});
  //     } else {
  //       setError(validate());
  //     }
  //   };
  //   return (
  //     <div>
  //       <div className="body">
  //         <div className="card login">
  //           <form onSubmit={handleSubmit}>
  //             <h2>Signup</h2>
  //             <label>username</label>
  //             <input
  //               type="text"
  //               name="username"
  //               value={formData.username}
  //               onChange={handleChange}
  //             />
  //             <br />
  //             {error.username && <p>{error.username}</p>}
  //             <label>emailID</label>
  //             <input
  //               type="text"
  //               name="email"
  //               value={formData.email}
  //               onChange={handleChange}
  //             />
  //             <br />
  //             {error.email && <p>{error.email}</p>}
  //             <label>Password</label>
  //             <input
  //               type="password"
  //               name="password"
  //               value={formData.password}
  //               onChange={handleChange}
  //             />
  //             <br />
  //             {error.password && <p>{error.password}</p>}
  //             <label>ConfirmPassword</label>
  //             <input
  //               type="password"
  //               name="confirmpassword"
  //               value={formData.confirmpassword}
  //               onChange={handleChange}
  //             ></input>
  //             <button type="submit">Signup</button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Signup;
