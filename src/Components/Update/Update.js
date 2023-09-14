import React, { useState } from "react";
import "./Testimonial.css";
import Axios from "axios"; // You need to import Axios for making the PUT request

const Testimonial = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [members, setMembers] = useState("");
  const [foodtype, setFoodtype] = useState("");
  const [updateMessage, setUpdateMessage] = useState(""); // State for update message
  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding popup

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.put(`http://localhost:8080/newput/${id}`, {
        name: name,
        email: email,
        mobilenumber: mobilenumber,
        members: members,
        foodtype: foodtype,
      });

      if (response.status === 200) {
        setUpdateMessage("Update Successful"); // Set success message
        setShowPopup(true); // Show the popup
        setTimeout(() => {
          setShowPopup(false); // Hide the popup after 2 seconds
          // Reset the form fields to their original state
          setId("");
          setName("");
          setEmail("");
          setMobilenumber("");
          setMembers("");
          setFoodtype("");
        }, 2000);
      } else {
        setUpdateMessage("Update Failed"); // Set error message
      }
    } catch (error) {
      console.error("Error updating data:", error);
      setUpdateMessage("Update Failed"); // Set error message
    }
  };

  return (
    <section className="Testimonial" id="update">
      <div className="container top">
        <div className="heading text-center">
          <h4>Any Changes in your Reservation...</h4>
          <h1>Please Update Here</h1>
        </div>
      </div>
      <div className="container">
        <div className="right box_shodow">
          {/* Display update message */}
          {showPopup && (
            <div className={`update-popup ${updateMessage.includes("Successful") ? "show" : ""}`}>
              {updateMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label>id</label>
              <input
                type="number"
                id="id"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="input-row">
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-row">
              <label>Date</label>
              <input
                type="date"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-row">
              <label>Mobile Number</label>
              <input
                type="text"
                id="mobilenumber"
                name="mobilenumber"
                value={mobilenumber}
                onChange={(e) => setMobilenumber(e.target.value)}
              />
            </div>

            <div className="input-row">
              <label>Members</label>
              <input
                type="number"
                id="members"
                name="members"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
              />
            </div>

            <div className="input-row">
              <label>Time</label>
              <input
                type="time"
                id="foodtype"
                name="foodtype"
                value={foodtype}
                onChange={(e) => setFoodtype(e.target.value)}
              />
            </div>

            <div className="input-row">
              <button className="btn_shadow" type="submit">
                Update My Booking <i className="fa fa-plus-circle"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
