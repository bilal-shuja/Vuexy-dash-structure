import React from 'react';
import {Link } from 'react-router-dom';
import manageBlog from '../Images/manageBlogs.svg';
import manageFaq from '../Images/manageFaq.svg';
import avtG from '../Images/avtG.svg';
import avtY from '../Images/avtY.svg';

const ControlContent = () => {
  return (
    <>
<div className="app-content content">
  <div className="content-wrapper container-xxl p-0">
   
    <div className="content-body">

      {/* Basic Vertical Navs start */}
      <section id="basic-nav-components">
        <div className="row match-height">
          {/* Vertical Nav starts */}
          <div className="col-lg-6 col-md-12">
            <div className="card p-3">
              
              <div className="card-body">
                <div className="d-flex justify-content-center">
                <Link  to="/BlogManageTable" className="avatar bg-light-primary p-2">
                    <span className="avatar-content">
                    <img src={manageBlog} alt="" />
                    </span>
                </Link>
                </div>
                <h3 className="text-center mt-2"style={{fontWeight:"700"}}>Manage Blogs</h3>
                <p className="text-center mt-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                
              </div>
            </div>
          </div>
          {/* Vertical Nav ends */}
          {/* Vertical Nav with Border starts */}
          <div className="col-lg-6 col-md-12">
          <div className="card p-3">
              
              <div className="card-body">
                <div className="d-flex justify-content-center">
                <Link to="/FaqManageTable" className="avatar bg-light-primary p-2">
                    <span className="avatar-content">
                    <img src={manageFaq} alt="" />
                    </span>
                </Link>
                </div>
                <h3 className="text-center mt-2"style={{fontWeight:"700"}}>Manage Faqs</h3>
                <p className="text-center mt-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                
              </div>
            </div>
          </div>
          {/* Vertical Nav with Border ends */}

          {/* Vertical Nav with Square Border starts */}
          <div className="col-lg-6 col-md-12">
          <div className="card p-3">
              
              <div className="card-body">
                <div className="d-flex justify-content-center">
                <Link to="/FaqWebTable" className="avatar bg-light-primary p-2">
                    <span className="avatar-content">
                    <img src={avtG} alt="" />
                    </span>
                </Link>
                </div>
                <h3 className="text-center mt-2"style={{fontWeight:"700"}}>Faq Web</h3>
                <p className="text-center mt-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                
              </div>
            </div>
          </div>
          {/* Vertical Nav with Square Border ends */}

          {/* Vertical Nav with Divider starts */}
          <div className="col-lg-6 col-md-12">
          <div className="card p-3">
              
              <div className="card-body">
                <div className="d-flex justify-content-center">
                <Link to="/PageFaqManageTable" className="avatar bg-light-primary p-2">
                    <span className="avatar-content">
                    <img src={avtY} alt="" />
                    </span>
                </Link>
                </div>
                <h3 className="text-center mt-2"style={{fontWeight:"700"}}>Faq Pages</h3>
                <p className="text-center mt-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                
              </div>
            </div>
          </div>
          {/* Vertical Nav with Divider ends */}


          
          {/* Vertical Nav with Divider starts */}
          <div className="col-lg-6 col-md-12">
          <div className="card p-3">
              
              <div className="card-body">
                <div className="d-flex justify-content-center">
                <Link to="/ServicesAndOffers" className="avatar bg-light-primary p-2">
                    <span className="avatar-content">
                    <img src={avtY} alt="" className="bg-dark" />
                    </span>
                </Link>
                </div>
                <h3 className="text-center mt-2"style={{fontWeight:"700"}}>Add Services</h3>
                <p className="text-center mt-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                
              </div>
            </div>
          </div>
          {/* Vertical Nav with Divider ends */}

           {/* Vertical Nav with Divider starts */}
           <div className="col-lg-6 col-md-12">
          <div className="card p-3">
              
              <div className="card-body">
                <div className="d-flex justify-content-center">
                <Link to="/PagesContent" className="avatar bg-light-primary p-2">
                    <span className="avatar-content">
                    <i className="fa-solid fa-file" style={{fontSize:"3em"}}></i>
                    {/* <img src={avtY} alt="" className="bg-dark" /> */}
                    </span>
                </Link>
                </div>
                <h3 className="text-center mt-2"style={{fontWeight:"700"}}>Page's Content</h3>
                <p className="text-center mt-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                
              </div>
            </div>
          </div>
          {/* Vertical Nav with Divider ends */}


          
           {/* Vertical Nav with Divider starts */}
           <div className="col-lg-6 col-md-12">
          <div className="card p-3">
              
              <div className="card-body">
                <div className="d-flex justify-content-center">
                <Link to="/WritesAndContent" className="avatar bg-light-primary p-2">
                    <span className="avatar-content">
                    <i className="fa-solid fa-pen-fancy" style={{fontSize:"3em"}}></i>
                    {/* <img src={avtY} alt="" className="bg-dark" /> */}
                    </span>
                </Link>
                </div>
                <h3 className="text-center mt-2"style={{fontWeight:"700"}}>Manage Writers</h3>
                <p className="text-center mt-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                </p>

                
              </div>
            </div>
          </div>
          {/* Vertical Nav with Divider ends */}
        </div>
      </section>
      {/* Basic Vertical Navs end */}
    </div>
  </div>
</div>

    </>
  )
}

export default ControlContent