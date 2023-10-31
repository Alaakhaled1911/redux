import React from 'react'
import { useCallback, useEffect } from 'react';
import style from '../App.module.css'
import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch();
//   const state = useSelector ((state) =>   {
// if(state.counter <1 ) {
//   return "No Number"
// }

//     return state.counter;
//   } );
//   const stateToggle = useSelector ((state) => {
//    return state.showCounter
//   })
const globalState = useSelector ((state) => state)

const handlerValue = (counter) => {
if(counter < 1) {
  return "No Number";
}
  return counter;
};

const counteroperation =useCallback ((type , payload  )  =>
{
dispatch ({ type, payload})
},[dispatch]);

useEffect(() => {
  const timer = setTimeout(() => {
    counteroperation('increase', 10);
  },);

  return () => {
    clearTimeout(timer); 
  };
}, [counteroperation]);
//________________________________________
  // const increase = () => {
  //   const action = { type :'increase' , payload : 1  }
  //   dispatch(action) 
  // }
  // const decrease = () => {
  //   const action = { type :'decrease' , payload : 1 }
  //   dispatch(action)
  // }
  const toggleCounter = () => {
    const action = { type :'toggleCounter'}
    dispatch(action)
  }
  return (
    <div className={style.App} >
<h1>Hello Redux Basic</h1>
 {globalState.showCounter &&

<>
<div className='counter'>Counter: {handlerValue(globalState.counter)}
</div>
<div>
<button className= {style.btn} onClick={()=> counteroperation('increase' ,  2) }>increase</button>
<button className={style.btn} onClick={()=> counteroperation('decrease' ,  1) }>decrease</button>
</div>
<div></div>
</>
}

  <button className={style.btn} onClick={toggleCounter}>Hide/show Counter Number</button>
</div>
  
    
  );
}

export default Counter