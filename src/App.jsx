import Objects from "./props/Objects";
import Props from "./props/Props";
import Props2 from "./props/Props2";
import Temp1 from "./components/Temp1";
import FunctionPassing from "./props/FunctionPassing";
import { useRef } from "react";

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

  let RefMethodTesting = useRef();

  const change = ()=>{
    RefMethodTesting.current.innerText= "useRef() method testing"
  }

  let myImg = useRef();

  const imgChange =()=>{
    myImg.current.src= "https://placehold.co/600x400?text=Hello+World"
    myImg.current.setAttribute('height', '200' )
    myImg.current.setAttribute('width', '200' )
  }

  let firstName, lastName = useRef();

  const gettingValue =()=>{
    let fName = firstName.value;
    let lName = lastName.value;

    alert('first name : '+ fName+ "\nLast Name : "+ lName)

  }

  let headline = useRef()

  const changes =()=>{

    headline.current.classList.remove('text-danger')
    headline.current.classList.add('text-success')

  }

  let number = useRef(0)

  const numIncrease =()=>{
   let value=  number.current++;
   console.log(value)
    
  }


  let ApiData =useRef(null);
  let sData = useRef()


  const getData = async() =>{
  const response =  await fetch('https://dummyjson.com/products')
  ApiData.current = await response.json()

  }

  const showData = ()=>{
    sData.current.innerText = JSON.stringify(ApiData.current)

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
          <br />

          {/* React Hook */}
          {/* Hooks is used for -manage state - handle side effects
          - access liftcycle methods 
          #build-in hooks in react: useState, useEffect, useRef
          
          */}

          {/* useRef() Method*/}

          {/* using useRef() can change innerText & innerHTML */}
          <h1 ref={RefMethodTesting}></h1>
          <button onClick={change}>click</button>
          <br />


          {/* using useRef() can change   IMAGE  Attribute  */}
          <img ref={myImg} src="https://placehold.co/600x400" alt="" />
          <button onClick={imgChange}>click this image</button>
          <br /> <br />

          {/* using useRef() can Input Elements + Multiple useRef() */}
          <input ref={(a)=>firstName=a} placeholder="first name" />
          <input  ref={(b)=>lastName=b} placeholder="last name" />
          <button onClick={gettingValue}>Submit</button>

          {/* using useRef() add css class remove css class*/}
          <h1 className="text-danger" ref={headline} >This is css class will changed by useRef()</h1>
          <button onClick={changes}>Do change</button>

          {/* using useRef() create Persisted Mutable Values */}
          
          <button  onClick={numIncrease}>click</button><br />

           {/* using useRef() Cashing expensive computations Like API Calling */}

            <p ref={sData}></p>
           <button onClick={getData}>Call Api</button>
           <button onClick={showData}>Fetech Data</button>









          



        










     
      
    </div>
  );
};

export default App;