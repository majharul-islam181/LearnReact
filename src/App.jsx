import Temp1 from "./components/Temp1";

const LoginStatusBtn =(status)=>{
  if(status){
    return <button>Login btn</button>

  } else{
     return <button>Logout btn</button>

  }
}


const App = () => {

  let marks = 9 ;
  const city = ["Dhaka", "Bogura", "khulna"];
  let ternaryOperator = true;
  let conditonalRendaring = true;
  return (
    <div>

      <Temp1/>



{/* Immediatley Invoked function  == Automatic run hobe, app start howyar sathe sathe*/}
      {(
        ()=>{
          if(marks >= 90 && marks<=100){
            return <h1>A+</h1>
          }
          else if(marks <=60){
            return <h1>Fail</h1>
          }
        }
      )()}


     
{/* JCX Loop Inside */}
          <ol>
            {
              city.map((items, i)=>{
                return <li key={i.toString}>
                  {items}
                </li>

              })
            } 
          </ol>

          <p>Login Status : </p>

          {LoginStatusBtn(true)}



          {/* Ternary operator */}

          {
            ternaryOperator ? <h1> TernaryOperator is false</h1> : <h1>TernaryOperator is true</h1>
          }

          {/* Conditional Rendaring */}


          <h3>Conditonal Rendaring : </h3>

          {
        
        conditonalRendaring && <button> conditional Rendaring button</button>

          }






     
      
    </div>
  );
};

export default App;