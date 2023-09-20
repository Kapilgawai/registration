import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PreviewPage from './PreviewPage';
import { useHistory, useNavigate } from 'react-router-dom';
const Register = () => {
    // const useNavigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male', 
    password: '',
    email: '',
    contactNumber: '',
    location: '',
    interests: [],
    about: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);

      setFormData({
        ...formData,
        interests: updatedInterests,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [id, idchange]=useState("");
  const [name, namechange]=useState("");
  const [password, passwordchange]=useState("");
  const [email, emailchange]=useState("");
  const [contact, contactchange]=useState("");
  const [location, locationchange]=useState("");
  const [about, aboutchange]=useState("");
  const [gender, genderchange]=useState("");


//   const handlePreviewClick = () => {
//     // Navigate to the preview page and pass the form data as state
//     history.push('/preview', { formData });
//   };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    let regobj={id,name,password,email,contact,location,about,gender}


    fetch("http://localhost:3000/register",{
        method : "POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regobj)
    }).then((res)=>{
 toast.success('Registered successfully')
    }).catch((err)=>{
        toast.error('Failed :' +err.message);


    });
    
    
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              
              <div className="row">
        

<div className="col-lg-6">
                         <div className="form-group">
                           <label>first Name <span className="errmsg">*</span></label>

                               <input value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>

                           </div>
                                </div>

                                <div className="col-lg-6">
                         <div className="form-group">
                           <label>last Name <span className="errmsg">*</span></label>
                               <input value={password} onChange={e=>passwordchange(e.target.value)} className="form-control"></input>

                           </div>
                                </div>




                
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <div>
                        <div>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleInputChange}
                        />{' '}
                        Male
                      </label>
                      </div>
                      <div>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleInputChange}
                        />{'      '}
                        Female
                      </label>
                      </div>
                    </div>
                  </div>
                </div>





                <div className="col-lg-6">
                         <div className="form-group">
                       <label>Email <span className="errmsg">*</span></label>
                               <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>

                           </div>
                           <div className="form-group">
                           <label>Password <span className="errmsg">*</span></label>

                               <input value={password} onChange={e=>password(e.target.value)} className="form-control" type='password'></input>

                           </div>
                                </div>

                                <div className="col-lg-6">
                         <div className="form-group">
                           <label>Contact Number <span className="errmsg">*</span></label>
                               <input value={contact} onChange={e=>contactchange(e.target.value)} className="form-control"></input>

                           </div>
                                </div>         







                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Interests</label>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="interests"
                          value="Reading books"
                          checked={formData.interests.includes('Reading books')}
                          onChange={handleInputChange}
                        />{' '}
                        Reading Books
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="interests"
                          value="Watching Movies"
                          checked={formData.interests.includes('Watching Movies')}
                          onChange={handleInputChange}
                        />{' '}
                        Watching Movies
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="interests"
                          value="Other"
                          checked={formData.interests.includes('Other')}
                          onChange={handleInputChange}
                        />{' '}
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Location</label>
                    <select
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    >
                      <option value=""></option>
                      <option value="delhi">Delhi</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="pune">Pune</option>
                      <option value="ahmedabad">Ahmedabad</option>
                      <option value="gurgaon">Gurgaon</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>About</label>
                    <textarea
                      className="form-control"
                      name="about"
                      value={formData.about}
                      onChange={handleTextareaChange}
                      maxLength={100}
                    />
                    <span className="errmsg">
                      {100 - formData.about.length} characters left
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary btn-padded-1px">
                Submit
              </button>


              <span className="button-spacing">  </span>

              {/* <button type="preview" className="btn btn-primary btn-padded btn-border-black" >
                Preview
              </button> */}


<button
                type="button"
                className="btn btn-primary btn-padded btn-border-black"
                // onClick={handlePreviewClick}
              >
                Preview
              </button>


            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
