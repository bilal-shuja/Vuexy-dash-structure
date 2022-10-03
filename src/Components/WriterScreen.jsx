import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import Avatar from '../../Images/Avatar.png';
// import Line from '../../Images/LineOne.svg';
import { DynamicStar } from 'react-dynamic-star';
import WindowDimension from './WindowDimension';
import{Container, Row, Col} from 'react-grid-system';
import { AsyncStorage } from 'AsyncStorage';
import BaseUrl from './GettingURL.js';

import axios from 'axios';

const WritersTable = () => {
    const { height, width } = WindowDimension();
    const[getWriters, setWriters] = useState([])
    // const dataLength = getWriters.length;
    const SetLocalLogin= async ()=>{
        try{
          let userTOKEN = await AsyncStorage.getItem('token');
          let parsed = JSON.parse(userTOKEN);
    
          if(parsed !== null){
          
            gettingWriters(parsed)
          }
        }catch{
            return null;
        }
      }

      const gettingWriters = (token)=>{
        axios.get(`${BaseUrl}writer/getwriters`,{
          headers:{
            Authorization:token
          }
        })
        .then((res)=>{
            setWriters(res.data.data)
    
        })
        .catch((error)=>{
          console.log(error);
        })
      }

      useEffect(() => {
        SetLocalLogin()
      }, [])

  return (
    <>
 <div className="app-content content ">
<div className="content-body">

<Container>
<Row>

     
 
  <div className="row"   id="basic-table">
      <div className="col-12">
      <div className="card">
                <div className="card-header">
                <h4 className="card-title">Writers</h4>
                <Link className="btn btn-primary" to="/WritersTable">Writers Table</Link>
                </div>
            </div>
      </div>
            

      {
          getWriters.map((items)=>{
              return(
            
           <Col lg={12}>
           <div className="card p-1">
               <div className="card-content d-flex align-items-center" style={{marginBottom:"-4.5em"}}>
                   <div className="img-container">
                     <img className="img-fluid" src={height<=900 && width<=500?null:items.avatar} alt=""  style={{marginTop:height<=900 && width<=500?"-8em":"-5em",width:"7em", borderRadius:"10em"}} />
                   </div>
                   <div className="row" style={{marginLeft:"0.2em"}}>
                     <h4 style={{fontSize:"16px",color:"#7367F0",lineHeight:"17px",letterSpacing:"-0.01em"}}>{items.writer_name}</h4>
                     <p style={{fontWeight:"500",color: "#777777"}}>Lorem ipsum dolor sit amet</p>
                     <div className={height<=900 && width<=500?"d-flex justify-content-evenly":"d-flex"}>
                     <p className={height<=900 && width<=500?"d-flex":null}> <b>{items.total_orders}</b> &nbsp; <span>ORDERS</span></p>&nbsp;
                     <p>({items.rating})</p> <div style={{marginTop:height<=900 && width<=500?"0.2em":"0.2em"}}><DynamicStar rating={items.rating} width={height<=900 && width<=500?15:15}/></div>&nbsp;&nbsp;
                     <p className={height<=900 && width<=500?"d-flex":null} style={{color:"#7367F0"}}>(<span> <b>{items.num_of_reviews}</b> </span><span> <b>REVIEWS</b> </span>)</p>
                     </div>
                     
                   </div>
     
               </div>
     
           </div>
         </Col>                  
              )
          })

      }
   
  </div>
  {/* Basic Tables end */}
  </Row>

  </Container>
</div>
</div>
    </>
  )
}

export default WritersTable