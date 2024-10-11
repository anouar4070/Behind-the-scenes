import { useState } from "react";
import { log } from "../../log";

export default function ConfigureCounter({onSet}) {

  log('<ConfigureCounter />', 1)

  const [enteredNumber, setEnteredNumber] = useState(0);


  function handleChange(event) {
    setEnteredNumber(event.target.value);
  }

  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }
  return(
    <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section>
  )
}

/**instead of using const Counter = memo(function Counter(){})
 * we can create ConfigureCounter.jsx component and avoid rerender of that all component 
  */