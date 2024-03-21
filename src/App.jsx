import Objects from "./props/Objects";
import Props from "./props/Props";
import Props2 from "./props/Props2";
import Temp1 from "./components/Temp1";
import FunctionPassing from "./props/FunctionPassing";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Notfound from "./pages/Notfound";

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


  // const [num, updatNum] = useState(1)




  const [mydata, updateMydata] = useState(
    {
      name: "majhrul",
      age: 15,
      city: "dahaka",
    }
  )

  const changingData = ()=>{
    updateMydata(
      prevObject =>({
        ...prevObject,
        name: "Md. Majharul Islam"
      })
    )
  }

  //todo
   const [list,setList] = useState([])
   const [item,setItem] = useState("")


 const AddToList = ()=>{
  list.push(item)
  setList([...list])

 }

 const RemoveItem =(index)=>{
  list.splice(index, 1)
  setList([...list])

 }


 //object form list

 let [FormObj,setFormObj] = useState({
  fName: "",
  lname: "",
  city: "",
  gender:""
 })

 const InputChange =(properties, value)=>{
  setFormObj(preObj=>({
    ...preObj,
    [properties] : value
  }))

 }

 const FormSubmit =(e)=>{
  e.preventDefault();
  console.log(FormObj);

 }

 //useEffect() Method

//  useEffect(()=>{
//   console.log("hello this is useEffect ")
//  },[1])


 //useEffect() with API  

 let [data,setData] = useState();

 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(json=> setData(json))
 },[])
















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
          <h1>Props:  </h1>

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

          <h1>React Hook :  </h1>

          {/* useRef() Method*/}
          <h3>useRef() Method :  </h3>

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


           {/* useState() Method */}

           {/* when data changed component refresh automatically */}

           <h1>useState() Method : </h1>

           {/* 
           const App =()=>{

            const [num, updatNum] = useState(1)

            return(
              <div>
              <h1>Number: {num}</h1>
              <button onClick={()=>updateNumber(num+1)}> click</button>
              </div>
            
             )
            }     
           */}


           <h1>{mydata.name}</h1>
           <button onClick={changingData}>Change the data</button><br /><br />



           {/* TODO List  */}

           <h1>TODO simple</h1>
           
           <table>
            <tbody>
              {

                list.length == 0 ? <td></td> : (
                  list.map((content, index)=>{
                   return(
                    <tr key={index}>
                      <td>{content}</td>
                      <td><button onClick={()=>{
                        RemoveItem(index)
                      }}>Remove</button></td>
                    </tr>
                 
                   
                   )
                    

                  })
                )
               
              }
            </tbody>
           </table>
           <input onChange={ (e)=>setItem(e.target.value)} placeholder="Enter text" />
           <button onClick={AddToList}>Add item</button><br /><br />



           {/* Form */}
           <h1>Todo with form : </h1>

           <form onSubmit={FormSubmit} action="">

            <input onChange={(e)=>{InputChange('fName',e.target.value)}} value={FormObj.fName} type="text" placeholder="Enter first name" /><br />
            <input onChange={(e)=>{InputChange('lname',e.target.value)}} value={FormObj.lName} type="text" placeholder="Enter last name" /><br />
            <select onChange={(e)=>{InputChange('city',e.target.value)}}  value={FormObj.city} >
              <option value="">Choose City</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rangpur">Rangpur City</option>
            </select><br />
            <input onChange={()=>{InputChange('gender',"Male")}}  checked={FormObj.gender=="Male"} type="radio" name="gender" id="" /> Male <br />
            <input onChange={()=>{InputChange('gender',"Female")}}  checked={FormObj.gender == "Female"} type="radio" name="gender" id="" /> Female <br />
            <button>Submit</button>
           </form><br /><br />


            {/* useEffect() */}
            <h1>useEffect() Method:  </h1>

            {/* normal useEffect() */}

            {/* API calling with useEffect() */}
            {JSON.stringify(data)}


            {/* Routing */}

            {/* <BrowserRouter>
            <Routes>
            
              <Route path='/homepage' element={<Homepage />}></Route>
              <Route path='/product' element={<Product />}></Route>
              <Route path='*' element={<Notfound />}></Route>
            </Routes>
            </BrowserRouter>
             */}












          



        










     <br /><br /><br />
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      
    </div>
  );
};

export default App;