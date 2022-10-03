import './App.css';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AsyncStorage } from 'AsyncStorage';
import CustomerLogin from '../src/Components/auth/CustomersLogin/Login.jsx';
import CustomerReg from '../src/Components/auth/CustomersLogin/RegLogin.jsx';
import SideBar from './Components/SideBar.jsx';
import Header from './Components/Header.jsx';
import UserProfile from './Components/UserProfile.jsx';
import ControlContent from './Components/ControlContent.jsx';
import WriterScreen from './Components/WriterScreen.jsx';
import CreateOrder from './Components/Order/CreateOrderForm.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  const [login,setLogin] = useState(true);

  const SetLocalLogin= async ()=>{
    try{
      let userLogin = await AsyncStorage.getItem('logIN');
      let parsed = JSON.parse(userLogin);
      if(parsed !== null){
        setLogin(parsed);
      }
    }catch{
        return null;
    }
  }
  useEffect(() => {
    SetLocalLogin()
  }, [])
  


  return (
    <div>
     {
        login === false?  
        <Router>
            <Routes>
            <Route path="/" element={<CustomerLogin/>}/>

            <Route path="/CustomerRegisteration" element={<CustomerReg/>}/>
          </Routes>
      </Router>
      : 
     
      <Router> 

      <Header/>
      <SideBar/>

      <Routes >
      <Route path="/" element={<UserProfile/>}/>
      <Route path="/ControlContent" element={<ControlContent/>}/>
   

      <Route path="/WriterScreen" element={<WriterScreen/>}/>
    

      <Route path="/CreateOrder" element={<CreateOrder/>}/>
      
      </Routes>

      <Footer/>
      
    </Router>
    } 

    </div>
  );
}

export default App;
