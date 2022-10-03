import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseUrl from './GettingURL.js'
import axios from 'axios';
toast.configure();


const RegLogin = () => {
  const [profileImage, setProfileImage] = useState();
  const [reg, setReg] = useState({

    username:'',
    email:'',
    password:'',
 
   })
   const inputHandler = (e) => {
    setReg({ ...reg, [e.target.name]: e.target.value });
  };

  const uploadImage = async (e)=>{
    const file =e.target.files[0]; 
    const base64 = await convertBase64(file);
    setProfileImage(base64);
  }


  const convertBase64 = (file)=>{
      return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload= ()=>{
          resolve(fileReader.result)
        };
        
        fileReader.onerror=(error)=>{
          reject(error)
        };

        
})
  }
const submitReg = (e)=>{
  e.preventDefault();
  const regObj = {
    username:reg.username,
    email:reg.email,
    password:reg.password,
    password_confirmation:reg.password,
    role_id:"admin"
  }
  axios.post(`${BaseUrl}register`,regObj)
  .then(res =>{
    toast.info("Successfully Registered!")
  }
  )
  .catch(
    error =>{
      toast.warning("Error Occurred !")
      console.log(error)
    }
  )


  setReg({
    username:'',
    email:'',
    password:'',
  });

  setProfileImage({
    profileImage:''
  })
}
  return (
    <>
      {/* BEGIN: Content*/}
 
  {/* <div className="content-wrapper"> */}
    {/* <div className="content-body"> */}
      <div className="auth-cover">
        <div className="auth-inner row m-0">
          {/* Brand logo*/}
          <a className="brand-logo d-flex justify-content-center" href="index.html">
            <svg viewBox="0 0 139 95"   version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={28}>
              <defs>
                <linearGradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                  <stop stopColor="#000000" offset="0%" />
                  <stop stopColor="#FFFFFF" offset="100%" />
                </linearGradient>
                <linearGradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                  <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                  <stop stopColor="#FFFFFF" offset="100%" />
                </linearGradient>
              </defs>
              <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                  <g id="Group" transform="translate(400.000000, 178.000000)">
                    <path className="text-primary" id="Path" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z" style={{fill: 'currentColor'}} />
                    <path id="Path1" d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2" />
                    <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325" />
                    <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338" />
                    <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288" />
                  </g>
                </g>
              </g>
            </svg>
            <h2 className="brand-text text-primary ms-1">Essayondemand</h2>
          </a>
          {/* /Brand logo*/}
          {/* Left Text*/}
          <div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5"><img className="img-fluid" src="../../../app-assets/images/pages/register-v2.svg" alt="Register V2" /></div>
          </div>
          {/* /Left Text*/}
          {/* Register*/}
          <div className="d-flex col-lg-4 align-items-center auth-bg ">
            <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
              <h2 className="card-title fw-bold mb-1">Start Register yourself Here !</h2>
              {/* <p className="card-text mb-2">Make your app management easy and fun!</p> */}
              <form className="auth-register-form mt-3" onSubmit={submitReg}>
                <div className="mb-1">
                  <label className="form-label" htmlFor="register-username">Username</label>
                  <input className="form-control" id="register-username" type="text" name="username" value={reg.username} onChange={inputHandler} placeholder="johndoe" aria-describedby="register-username" autoFocus tabIndex={1} required/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="register-email">Email</label>
                  <input className="form-control" id="register-email" type="email" name="email" value={reg.email}  onChange={inputHandler} placeholder="john@example.com" aria-describedby="register-email" tabIndex={2} required/>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="register-password">Password</label>
                  <div className="input-group input-group-merge form-password-toggle">
                    <input className="form-control form-control-merge" id="register-password" type="password" value={reg.password}  name="password" onChange={inputHandler}  placeholder="············" aria-describedby="register-password" tabIndex={3} required/>
                    {/* <span className="input-group-text cursor-pointer"><i data-feather="eye" /></span> */}
                  </div>
                </div>
                
                {/* <div className="mb-1">
                  <label className="form-label" htmlFor="register-Image">Upload Profile</label>
                  <div className="input-group input-group-merge form-password-toggle">
                    <input className="form-control form-control-merge" id="register-Image" type="file" onChange={(e)=>{
                      uploadImage(e)
                    }} name="image" aria-describedby="register-image" tabIndex={3} required/>
                  </div>
                </div> */}

                <div className="mb-1">
                  <div className="form-check">
                    <input className="form-check-input" id="register-privacy-policy" type="checkbox" tabIndex={4} />
                    <label className="form-check-label" htmlFor="register-privacy-policy">I agree to<a href="#">&nbsp;privacy policy &amp; terms</a></label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100" tabIndex={5}>Sign up</button>
              </form>
              <p className="text-center mt-2"><span>Already have an account?</span><Link to="/"><span>&nbsp;Sign in instead</span></Link></p>
              {/* <div className="divider my-2">
                <div className="divider-text">or</div>
              </div>
              <div className="auth-footer-btn d-flex justify-content-center"><a className="btn btn-facebook" href="#"><i data-feather="facebook" /></a><a className="btn btn-twitter white" href="#"><i data-feather="twitter" /></a><a className="btn btn-google" href="#"><i data-feather="mail" /></a><a className="btn btn-github" href="#"><i data-feather="github" /></a></div> */}
            </div>
          </div>
          {/* /Register*/}
        </div>
      </div>
    {/* </div> */}
  {/* </div> */}
{/* END: Content*/}


    </>
  )
}

export default RegLogin