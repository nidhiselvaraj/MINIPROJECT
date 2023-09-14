import React, { useState } from 'react';
import Axios from 'axios';
import './PopupMessage.css'


const Cancel = () => {
  
  const [id, setId] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.delete(`http://localhost:8080/delete1/${id}`)
      .then(response => {
        // Handle success
        console.log('Deleted Successfully!', response);

        // Set the update message and show the popup
        setUpdateMessage('Deleted Successfully!');
        setShowPopup(true);

        // Hide the popup after a few seconds (adjust the time as needed)
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);

        // Reset the input field
        setId("");
      })
      .catch(error => {
        // Handle errors
        console.error('Error deleting review:', error);
      });
  }

  return (
    <section className='Resume' id='cancel'>
      <div className='container top'>
        <div className='heading text-center'>
          <h4>Think About Exciting Offer...!</h4>
          <h1>Are You Sure You Want to Cancel?</h1>
          <h4>Kindly enter your booking ID and click cancel.</h4>
        </div>

        
          <section className='Contact' id='contact'>
            <div className='container top'>
              <div className='heading text-center'>
                
              </div>
            </div>

            <div className='container'>
              <div className='right box_shadow'>
                <form onSubmit={handleSubmit}>
                  <div className='input-row'>
                    <label>ID</label>
                    <input
                      type='text'
                      id='id'
                      name='id'
                      value={id}
                      onChange={(e) => setId(e.target.value)} 
                      required
                    />
                  </div>
                  <div className='input-row'>
                    <button className='btn_shadow' type='submit'>
                      Cancel Booking <i className='fa fa-plus-circle'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      {/* </div> */}

      {showPopup && (
        <div className={`update-popup ${updateMessage.includes("Successful") ? "show" : ""}`}>
          {updateMessage}
        </div>
      )}

      <div className='container top'>
        <div className='heading text-center'>
          <h4>Eagerly Waiting...</h4>
          <h1>Visit Soon!!!</h1>
        </div>
      </div>
    </section>
  );
};

export default Cancel;
