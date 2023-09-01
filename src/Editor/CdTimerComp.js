import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';


const CdTimerComp = (props) => {
    const THREE_DAYS_IN_MS = 0 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterTwentyMinutes = NOW_IN_MS + THREE_DAYS_IN_MS;
    const [targetDate, setTargetDate] = useState(new Date(dateTimeAfterTwentyMinutes));

    const [inputTime, setInputTime] = useState(new Date(dateTimeAfterTwentyMinutes));

  
    const handleChange = (event) => {

      setInputTime(event.target.value);
      // event.preventDefault();
      // if (event.target.value) {
      //   setTargetDate(new Date( NOW_IN_MS + event.target.value * 60 * 1000));
      // } else {
      //   setTargetDate(new Date(dateTimeAfterTwentyMinutes));
      // }
    };

    const setTime = () => {
 
      console.log('inputTime is '+inputTime);
        setTargetDate(new Date( NOW_IN_MS + inputTime * 60 * 1000));
    };
  
    return (
        <div className="countdown-container">
        <div class="row">
        <div class="column">
        <form>
          <input
            id="countdown-date-time"
            name="countdown-date-time"
            type="number"
            onChange={handleChange}
            value={inputTime}
          /> 
           &nbsp; &nbsp; minutes &nbsp; &nbsp;
        </form>
        </div>
        <div class="column">
        <button onClick={setTime}>set timer</button>
        </div>
        
        </div>
        <CountdownTimer targetDate={targetDate} />
      </div>
    );
  };
  
  export default CdTimerComp;