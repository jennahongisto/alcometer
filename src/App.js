import { useState } from 'react';
import './App.css';



function App() {
  const [weight, setWeight] = useState(90)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [result,setResult]= useState(0)

function handleSubmit(e) {
  e.preventDefault()
  let alcoholLevel = 0
  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let burning = weight / 10
  let gramsLeft = grams - (burning * time)
  if (gender === 'male') {
    alcoholLevel = gramsLeft / (weight * 0.7)
  }  else  {
    alcoholLevel = gramsLeft / (weight * 0.6)
  }
  if (alcoholLevel < 0) {
    alcoholLevel = 0
  }
   setResult(alcoholLevel)
}

  return (
    <div>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label >Weight </label>
        <input name="weight" step="1" value={weight} onChange={e => setWeight(e.target.value)} type="number"/>
      </div>
      <div>
        <label>Bottles </label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div>
        <label>Time </label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
  </form>
  </div>
  );
}

export default App;
