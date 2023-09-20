import React from 'react';

const PreviewPage = ({ formData }) => {
  return (
    <div>
      <h1>Preview Page</h1>
      <div>
        <p>ID: {formData.id}</p>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Gender: {formData.gender}</p>
        <p>Email: {formData.email}</p>
        <p>Contact Number: {formData.contact}</p>
        <p>Location: {formData.location}</p>
        <p>About: {formData.about}</p>
      </div>
    </div>
  );
};

export default PreviewPage;
