import Objects from "./props/Objects";
import Props from "./props/Props";
import Props2 from "./props/Props2";
import Temp1 from "./components/Temp1";
import FunctionPassing from "./props/FunctionPassing";

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

  const objectData = {
    "name" : "Majharul Islam",
    "age" : 15,
    "city" : "Dhaka"

  }


  const funPassingBtn = () =>{
    alert('Say hello to you!')
  }

  const PostFromData =()=>{
    event.preventDefault()
    alert('Successfully Submitted')
  }


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


          {/* PROPS : Properites

          1.  Props diye parent theke child e data pass korte pari.
          2. Data basically UNI-DIRECTIONAL flow te kaj kore. that means only PARENTS --> CHILD e data pass hobe. 
          3. For example:  PARENT will be APP.jsx is parent then inside this APP.jsx all components will be child
          4. Props data is read-only/emutable. which means  that data coming form the parent 
          should not be changed by child components.
        
          */}

          <Props title="PROPPS" des="this is first time  props learing"/>
          <Props2 time= { new Date().getTime()}/>



          {/* PROPS - Passing with Object data  */}

          <h3>Passing with Object data: </h3>

          <Objects items={objectData}/>


          {/* PROPS - Passing function */}

          <h3>Passing Function - Props : </h3>

          <FunctionPassing btnPassing= {funPassingBtn} />

          {/* onClick function handling inside Button*/}

          {/* 

          1. <btn onClick={alert("you clicked me")}>clicked</btn>
          2. <btn onClick={()=>{"you clicked me"}}>clicked</btn>
          3. <button onClick={
            function handleClick(){
              alert("you clicked me")
            }
          }>clicked</button>

          4. const App = ()=>{
            function handleClick(){
              alert("you clicked me")
            }

            return (
              <button onClick={handleClick}> clicked me </button>
            )
          }
          */}


          {/* Form-Submit Event & Loading Prevent korbo kivbe */}

          <form  onSubmit={PostFromData} >
            <input placeholder="name" type="text" />
            <button type="submit">Submit</button>
          </form>

          



        










     
      
    </div>
  );
};

export default App;