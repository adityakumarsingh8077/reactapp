import './App.css';
function App() {

  return (
    <>
    <p className='header' style ={{textAlign:"center"}}>Our MENU</p>
    <p className='outer'>
   <p className='inner1'> <p className='p1' >

    <Pizza name='FarmHouuse'  ingredients='veggies,cheese'price={300} /></p>
    <p className='p2'><Pizza name='FarmHouuse' ingredients='veggies,cheese'price={500} /></p></p>
   <p className='inner2'> <p className='p3'><Pizza name='FarmHouuse' ingredients='veggies,cheese'price={700} /></p>
    <p className='p4'><Pizza name='FarmHouuse' ingredients='veggies,cheese'price={700} /></p></p>
    </p></>
  )
}
function Pizza(props){
  return(
    <>
    {props.name}{props.ingredients}{props.price}
    </>
)
  }
export default App