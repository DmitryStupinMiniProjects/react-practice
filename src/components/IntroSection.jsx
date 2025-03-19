import React from "react"

// function IntroSection() {
//   return (
//     <section>
//       <h1>Result University</h1>
//       <h3>БлаБлаБлаБлабЛаБлаБла</h3>
//     </section>
//   )
// }

function IntroSection() {
  return React.createElement('section', null, [
      React.createElement('h1', {className: 'centered', key: 1}, 'Result University'),
      React.createElement('h3', {className: 'centered', style: {color: "#666"}, key: 2}, 'БлаБлаБлаБлабЛаБлаБла'),
    ]
)}

export default IntroSection