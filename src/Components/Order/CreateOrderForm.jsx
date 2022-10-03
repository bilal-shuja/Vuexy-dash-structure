import React,{useState,useEffect} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { AsyncStorage } from 'AsyncStorage';
import BaseUrl from './GettingURL.js';
import OrderFormSub from './OrderFormSubRequirements';

const CreateOrderForm = () => {

    const [getAssignType , setAssignType] = useState([]);
    const[getContentType , setContentType] = useState([])
    const[getAssignData, setAssignData] = useState("");
    const[getContentData , setContentData] = useState("");
    const[getLang , setLang] = useState("0");
    const[getEdu , setEdu] = useState("0");
    const[promoCode , setPromoCode] = useState("");
    const[pages , setPages] = useState(1);
    const[words, setWords] = useState(275);
    const[lineSpace , setLineSpace] = useState("Double");
    const[getTime, setTime] = useState("");

    const[getDate, setDate] = useState("");
    const[t , setToken] = useState("");

    const[hide, setHide] = useState(false)
    

    const GetToken= async ()=>{
        try{
          let token = await AsyncStorage.getItem('token');
          let parsed = JSON.parse(token);
          if(parsed !== null){
            gettingAssignType(parsed);
            gettingContentType(parsed);
            setToken(parsed)
          }
        }catch{
            return null;
        }
      }
      

      const setAssignmentCat = (e)=>{
        setAssignData(e.target.value)
      }

      const setContentCat = (e)=>{
        setContentData(e.target.value);
      }

      const setEducationLevel = (e)=>{
        setEdu(e.target.value)
      }
      const setLanguageCat = (e)=>{
        setLang(e.target.value)
      }



      const setLineSpacingCat = (e)=>{
        setLineSpace(e.target.value);
        if(e.target.value === "Single"){
          setWords(words*2)
        }
        else {

          setWords(words/2)
        }
    

      }

      const setWordsQuantity = (e)=>{
      

        if( lineSpace === "Single"){

          setPages(e.target.value);
        setWords((e.target.value*275)*2);
        
      }
  
          else{
            setPages(e.target.value);
            setWords(e.target.value*275);
          }

    
 
      }
      const gettingAssignType =(token)=>{
        axios.get(`${BaseUrl}assignmenttype/getassignmenttypes`,{
            headers:{
              Authorization:token
            }
          })
          .then((res)=>{
            setAssignType(res.data.data)      
          })
          .catch((error)=>{
            console.log(error)
          })
      }

      const gettingContentType = (token)=>{
        axios.get(`${BaseUrl}contenttype/getcontenttypes`,{
          headers:{
            Authorization:token
          }
        })
        .then((res)=>{
          setContentType(res.data.data)      
        })
        .catch((error)=>{
          console.log(error)
        })

      }

      const showData = ()=>{
        
        console.log(getAssignData);
        console.log(getContentData);
        console.log(getLang);
        console.log(getEdu);
        console.log(promoCode);
        console.log(pages);
        console.log(words);
        console.log(lineSpace);
        console.log(getTime);
        console.log(getDate);
      }
   


      useEffect(() => {
        GetToken();
      }, [])



      const setHideState = ()=>{
        setHide(false)
      }

     
        return (
          <>
          {hide===false? 
      <div className="app-content content ">
       <div className="content-body">
        <section className="basic-select2" >
        <div className="row" >
          <div className="col-12">
            <div className="card" style={{background: "#10163a"}}>
              <div className="card-header">
                <h2 className="mb-2">Place Order</h2>
              </div>
              <div className="card-body">
                <div className="row">
      
                <div className="row">
      
      
                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="select2-basic"><h6>Assignment Type:</h6></label>
                    <select className="form-select" id="selectBox" onChange={setAssignmentCat}>
                        <option value="0">Select Assignment</option>
                      {
                          getAssignType.map((items)=>{
                              return(
                                  <option value={items.name}>{items.name}</option>
      
                              )
                          })
                      }
                      
                    </select>
                  </div>
      
                  <div className="col-md-6 ">
                    <label className="form-label" htmlFor="select2-nested"><h6>Assignment Language:</h6></label>
                    <select className="form-select" id="selectBox"
                    onChange={setLanguageCat}
                    >
                      <option value="0">Select language</option>
                        <option value="EngUS">English(US)</option>
                        <option value="EngUK">English(UK)</option>
                        <option value="Spain">Spanish</option>
                        <option value="French">French</option>
      
      
                    </select>
                  </div>
                  </div>
      
              <div className="row mb-3">
                  
      
                  <div className="col-md-6 mb-2">
                      <label className="form-label" htmlFor="select2-disabled-result"><h6>Assignment Details:</h6></label>
                      <select className="form-select" id="select2-disabled-result"
                      onChange={setContentCat}
                      >
                          <option value="0">Services</option>
                          {
                            getContentType.map((items)=>{
                              return(
                                
                                <option value={items.name}>{items.name}</option>
                              )
                            })
      
                          }
                      </select>
      
                      <div className="mt-1">
                      <select className="select2-data-array form-select" id="select2-array"
                      onChange={setEducationLevel}
                      >
                      <option value="0">Education Level</option>
                      <option value="1">Competent</option>
                      <option value="2">Proficient</option>
                      <option value="3">Expert</option>
                      <option value="4"> Pro(Doctorate)</option>
                      </select>
                      </div>
                     
                      </div>
      
                      <div className="col-md-6">
                              <label className="form-label" htmlFor="delimiters"><h6>Promo Code:</h6></label>
                              <input type="text" className="form-control delimiter-mask" placeholder="Enter Promo Code" id="delimiters" onChange={(e)=>{setPromoCode(e.target.value)}}/>
                      </div>
                  </div>
      
      
                      <div className="col-md-6">
                              <label className="form-label" htmlFor="delimiters"><h6>Assignment size:</h6></label>
                              <div className="row">
                              <div className="col-md-3">
                                  <label htmlFor=""> <b>Pages:</b> </label>
                              <input type="number" className="form-control delimiter-mask" id="delimiters" value={pages} onChange={(e)=>{setWordsQuantity(e)}} />
                              </div> 
      
                              <div className="col-md-3">
                                  <label htmlFor=""> <b>Words:</b> </label>
                              <input type="number" className="form-control delimiter-mask" id="delimiters" value={words}/>
                              </div> 
      
                              <div className="col-md-3">
                                  <label htmlFor=""> <b>Line Spacing:</b> </label>
                                  <select className="form-select" id="select2-array" 
                                  onChange={setLineSpacingCat}
                                  >
                                      <option value="Double">Double</option>
                                      <option value="Single">Single</option>
      
                                   </select>
                              </div> 
                          </div>
                             
                      </div>
      
                      
                      <div className="col-md-6 mb-3">
                              <label className="form-label mb-1" htmlFor="delimiters"><h6>Deadline:</h6></label><br/>
                              <label htmlFor=""> <b>Time:</b> </label>
                              <input type="time" id="fp-time" className="form-control flatpickr-time text-start" placeholder="HH:MM" onChange={(e)=>{setTime(e.target.value)}}/>
      
                              <label className="form-label"> <b>Date:</b></label>
                              <input type="date" id="fp-default" className="form-control flatpickr-basic" placeholder="YYYY-MM-DD"  onChange={(e)=>{setDate(e.target.value)}} />
                      </div>
                 
                 
                  
                 
                    <div className="text-end">
                      <button  className="btn btn-outline-primary" onClick={()=>setHide(true)}>
                          Next Step
                      </button>             
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
      </div>
      </div>
:
<OrderFormSub hide={setHideState}/>
}
          </>
        )
      

}

export default CreateOrderForm