// import './App.css';
// function App() {

//   return (
//     <>
//     <p className='header' style ={{textAlign:"center"}}>Our MENU</p>
//     <p className='outer'>
//    <p className='inner1'> <p className='p1' >

//     <Pizza name='FarmHouse'  ingredients='veggies,cheese'price={300} /></p>
//     <p className='p2'><Pizza name='FarmHouse' ingredients='veggies,cheese'price={500} /></p></p>
//    <p className='inner2'> <p className='p3'><Pizza name='FarmHouse' ingredients='veggies,cheese'price={700} /></p>
//     <p className='p4'><Pizza name='FarmHouse' ingredients='veggies,cheese'price={700} /></p></p>
//     </p></>
//   )
// }
// function Pizza(props){
//   return(
//     <>
//      <p className='name' ><strong>Name:</strong> {props.name}</p>
//       <p  className='ingre' ><strong>Ingredients:</strong> {props.ingredients}</p>
//       <p  className='price' ><strong>Price:</strong> ₹{props.price}</p>
//     {/* {props.name}<br/>{props.ingredients}<br/>₹{props.price} */}
//     </>
// )
//   }
// export default App








// ******************************
// 



// import './App2.css';





// let t=1;
// function App() {
//   const handle = (e) => {
//     if(t=1){ 
//        e.target.textContent="button is clicked";
//        t=0;
//     }
//     if(t=0){
//       e.target.textContent="click me";
//       t=1;

//     }  
     
//   };

//   return (
//    <div className='outer'> <button className="button"  onClick={handle}>
//       Click Me
//     </button></div>
//   );
// }

// export default App



// ***************************3


// import { useState } from "react";

// import "./App2.css"
// function App(){
//   let[cnt ,setCnt]=useState(0);
//   let count =0;
//   const date=new Date();
//   date.setDate(date.getDate() + cnt);
//   return (
//   <header className="header">
//      <button onClick={(e)=>{
//       setCnt(cnt+1);
//      }}>+</button>
//      <p>Count={cnt}</p>
//      <button onClick={(e)=>{
//       setCnt(cnt-1);
//      }} >-</button>
//      <div>
//      <p>{date.toDateString()}</p>
//           </div>


//   </header>)
// }

// export default App;





// **************************4





 
//   import React, { useState } from 'react';
//   import "./App2.css"
//   function App() {
//     const [active, setActive] = useState(null);
  
//     return (
//       <>
//         {[1, 2, 3, 4, 5].map((num, index) => {
//   let bgColor = 'white';
//   if (active === index) {
//     bgColor = 'red';
//   }

//   return (
//     <button
//       key={index}
//       onClick={() => setActive(index)}
//       style={{ backgroundColor: bgColor }}
//     >
//       {num}
//     </button>
//   );
// })}
//       </>
//     );
//   }
  
//   export default App;







  import React, { useState } from 'react';
  import "./App2.css"


function App() {
  // const [text, setText] = useState('');
  
  // const handleChange = (event) => {
    // setText(event.target.value);
    
    const[name,setName]=useState("");
    const[age,setAge]=useState(0);
    const[comment,setComment]=useState("");
    const[shipping,setShipping]=useState("");
    const[payment,setPayment]=useState("");
    
    
  function NameHandler(event){
    setName(event.target.value);

  }
function AgeHandler(event){
  setAge(event.target.value);
}
function CommentHandler(event){
  setComment(event.target.value);
}

function PaymentHandler(event){
  setPayment(event.target.value);
}
function ShippingHandler(event){
  setShipping(event.target.value);
}



  return (
    <div className='outer'>
   
      <input type="Name:" value={name} onChange={NameHandler} placeholder="name"></input>
      <p>name:{name}</p>
      <input type="age:"  value={age} onChange={AgeHandler} placeholder='age' ></input>
      <p>age:{age}</p>
      <textarea name="comment:"  value={comment} onChange={CommentHandler} placeholder='comment'  id="">Comment:</textarea>
       <div>
        <select value={payment} onChange={PaymentHandler} >
          <option value="">Select the payment method</option>
          <option value="visa">visa </option>
          <option value="master card">mastercard</option>
        </select>
        <p>payment method :{payment}</p>


        <p>Shipping :</p>
        <input type="radio" onChange={ShippingHandler} value="pickup" checked={shipping=="pickup"}  /> Pick up
       <input type="radio" onChange={ShippingHandler} value="delivering" checked={shipping=="delivering"} /> Delivering
        </div>
         
         <p>Shipping Status :{shipping}</p>


      {/* <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p> */}




    </div>
  );
};
export default App;