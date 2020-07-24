import React from 'react'

import TimelineComponent from 'simple-verticle-timeline'
import 'simple-verticle-timeline/dist/index.css'

const App = () => {
  return <TimelineComponent values={
    [
      {
        from: "Oct 2010",
        to: "Oct 2011",
        title: "Company A",
        description: "Worked as a X in Company A. Bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
      },
      {
        from: "Nov 2011",
        to: "Nov 2012",
        title: "Company B",
        description: "Worked as a Yin Company B. Bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
      },
      {
        from: "Nov 2014",
        to: "Nov 2016",
        title: "Company C",
        image: "https://via.placeholder.com/150",
        description: "Worked as a Yin Company B. Bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
      }
    ]} />
}

export default App
