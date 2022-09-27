import { useContext } from 'react'
import { FunctionsContext } from '../functions/index'

function Screen() {

  const { Clear, Del, Percent, TakeOperator, TakeInputNum, setIsDecimal, GetEqual, monitor } = useContext(FunctionsContext);


  return (
    <div>
      <h1 className='header'>Calculator App</h1>
      <div className='calculator'>
        <section className='monitor'>
          <p className='out-put'> {monitor} </p>
        </section>
        <section className='keyboard'>
          <div className='keyboard-row'>
            <button onClick={() => {Clear()}} className="one-block blue"> AC </button>
            <button onClick={() => {Del()}} className="one-block blue"> C </button>
            <button onClick={() => {Percent()}} className="one-block blue"> % </button>
            <button onClick={() => {TakeOperator('/')}} className="one-block red"> / </button>
          </div>
          <div className='keyboard-row'>
            <button onClick={() => {TakeInputNum(7)}} className="one-block"> 7 </button>
            <button onClick={() => {TakeInputNum(8)}} className="one-block"> 8 </button>
            <button onClick={() => {TakeInputNum(9)}} className="one-block"> 9 </button>
            <button onClick={() => {TakeOperator('*')}} className="one-block red"> * </button>
          </div>
          <div className='keyboard-row'>
            <button onClick={() => {TakeInputNum(4)}} className="one-block"> 4 </button>
            <button onClick={() => {TakeInputNum(5)}} className="one-block"> 5 </button>
            <button onClick={() => {TakeInputNum(6)}} className="one-block"> 6 </button>
            <button onClick={() => {TakeOperator('-')}} className="one-block red"> - </button>
          </div>
          <div className='keyboard-row'>
            <button onClick={() => {TakeInputNum(1)}} className="one-block"> 1 </button>
            <button onClick={() => {TakeInputNum(2)}} className="one-block"> 2 </button>
            <button onClick={() => {TakeInputNum(3)}} className="one-block"> 3 </button>
            <button onClick={() => {TakeOperator('+')}} className="one-block red"> + </button>
          </div>
          <div className='keyboard-row'>
            <button onClick={() => {TakeInputNum(0)}} className="two-block"> 0 </button>
            <button onClick={() => {setIsDecimal(true)}} className="one-block"> . </button>
            <button onClick={() => {GetEqual()}} className="one-block red"> = </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Screen;
