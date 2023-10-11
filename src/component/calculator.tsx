
import { Box, Button, Card } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import Login from './login'
import HistoryPane from './HistoryPane'
import { UserContext } from '../context/userContext'

const numbers = ['AC', '%', '.', '/', 9, 8, 7, '*', 6, 5, 4,'-', 3, 2, 1,'+', 0, '=']
export default function Calculator() {
  const { user, token } = useContext(UserContext);
function ButtonGenerator(val:string | number, type?: 'operator') {
  return <Button
    variant='contained'
    key={val}
    data-testId={val}
    sx={{ 
      gridColumn: val === 0 ? 'span 2' : val === '=' ? 'span 2': undefined, // if val is zero then it will take 2 columns
      fontWeight: 'bold'
    }}
    color={type === 'operator' ? val === 'AC' ? 'error' : 'secondary' : 'primary'}
    onClick={() => type === 'operator' ? inputOperator(val as string) : inputNumTotal(val as number)}
  >
    {val}
  </Button>
}
  //calculator
  const [inputNum, setInputNum] = useState<number>(0)
  const [monitor, setMonitor] = useState<number>(0);
  const [decimal, setDecimal] = useState<boolean>(false);
  const [decimalcount, setDecimalCount] = useState<number>(1);
  const [operator, setOperator] = useState<string>('');
  const [calculatednum, setCalculatednum] = useState<number>(0);
  const [openLogin, setOpenLogin] = useState<boolean>(false)
  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum])
  const updateHistory = (result: number) => {
    const data = {
      expression: `${calculatednum} ${operator} ${inputNum}`,
      result: String(result)
    }

    // store to local storage
    const history = localStorage.getItem('history');
    if (history) {
      const parsedHistory = JSON.parse(history);
      parsedHistory.push(data);
      localStorage.setItem('history', JSON.stringify(parsedHistory));
    } else {
      localStorage.setItem('history', JSON.stringify([data]));
    }

    // store to server
    if (user) {
      fetch('http://localhost:5000/calculator/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    setMonitor(calculatednum);
  }, [calculatednum])

  //recieve number from input button
  const inputNumTotal = (num: number) => {
    if (decimal) {
      num = num / Math.pow(10, decimalcount); // this is to make sure the decimal number is correct
      setDecimalCount(decimalcount + 1);
      setInputNum(parseFloat((inputNum + num).toFixed(decimalcount))) // this is to make sure the decimal number is correct
    } else {
      setInputNum(inputNum * 10 + num)
    }

  }
  
  //receive operator from input button
  const inputOperator = (operator: string) => {
    if (operator === '.') {
      setDecimal(true)
      return
    } else if (operator === 'AC') {
      clearall()
      return
    } else if (operator === '=') {
      equal()
      return
    }
    setOperator(operator);
    calculate();
    setInputNum(0)
  }

  //calculate
  const calculate = () => {
    setDecimal(false);
    setDecimalCount(1)
    if (operator === '/' && inputNum === 0) {
      setCalculatednum(NaN);
      setInputNum(0)
      return
    }
    if (calculatednum === 0 && inputNum === 0) {
      return;
    }
    let result =0;
    switch (operator) {
      case '+':
        result = calculatednum + inputNum
        break;
        case '/':
        result = calculatednum / inputNum
        break;
        case '*':
        result = calculatednum * inputNum
        break;
        case '-':
        result = calculatednum - inputNum
        break;
    }
    setCalculatednum(result)
    updateHistory(result);
    if (operator === '') setCalculatednum(inputNum);
    else setInputNum(0);
    return;
  }

  //get equation
  const equal = () => {
    calculate();
    setOperator('')
  }

  //clear all
  const clearall = () => {
    setInputNum(0);
    setCalculatednum(0);
    setMonitor(0);
    setOperator('')
  }

  return <>
  </>
}