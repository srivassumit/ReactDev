import React from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

const getPercent = decimal => {
  return decimal * 100 + '%';
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

// can pass props object to the function and then use it as props.*
// const SkiDayCounter = (props) => {
// can do destructuring too and use like this:
const SkiDayCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

render(
  // the number value should be within {} as a JSX expression
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById('root')
);
