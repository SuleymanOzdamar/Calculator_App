import React from 'react'
import { useEffect, useState, createContext } from 'react';

export const FunctionsContext = createContext();

export const FunctionProvider = ({ children }) => {

  const [inputNum, setInputNum] = useState(0);
  const [calculatedNum, setCalculatedNum] = useState(0);
  const [operator, setOperator] = useState('');
  const [isDecimal, setIsDecimal] = useState(false);
  const [decimalCount, setDecimalCount] = useState(1);
  const [monitor, setMonitor] = useState('');

  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum])

  useEffect(() => {
    setMonitor(calculatedNum) 
  }, [calculatedNum])

  const TakeInputNum = (num) => {
    if(isDecimal){
      num = num/Math.pow(10, decimalCount);
      setDecimalCount(decimalCount + 1);
      setInputNum(parseFloat((inputNum + num).toFixed(decimalCount)));
    }
    else  setInputNum(inputNum*10 + num);
  }

  const TakeOperator = (operator) => {
    setOperator(operator);
    Calculate();
    setInputNum(0);
  }

  const Calculate = () => {
    setIsDecimal(false);
    setDecimalCount(1);
    if(operator === '/' && inputNum === 0){
      setCalculatedNum(NaN);
      setInputNum(0);
      return;
    }
    if(calculatedNum === 0 && inputNum === 0 ){
      return;
    } 
    switch(operator){
      case '+':
        setCalculatedNum(calculatedNum + inputNum);
        break ;
      case '-':
        setCalculatedNum(calculatedNum - inputNum);
        break ;
      case '*':
        setCalculatedNum(calculatedNum * inputNum);
        break ;
      case '/':
        setCalculatedNum(calculatedNum / inputNum);
        break ;
    }
    if(operator === ''){
      setCalculatedNum(inputNum)
    }else {
      setInputNum(0);
    }
    return;
  }

  const GetEqual = () => {
    Calculate();
    setOperator('');
  }

  const Clear = () => {
    setInputNum(0)
    setCalculatedNum(0)
    setMonitor('')
    setOperator('')
  }

  const Del = () => {
    setMonitor('')
    setInputNum(0)
  }

  const Percent = () => {
    const current = parseFloat(inputNum);
    setInputNum((current / 100).toString());
  };

  const values = {
    Percent,
    Del,
    Clear,
    GetEqual,
    TakeInputNum,
    TakeOperator,
    monitor,
  }

  return (
    <div>
      <FunctionsContext.Provider value={values} > {children} </FunctionsContext.Provider>
    </div>
  )
}


