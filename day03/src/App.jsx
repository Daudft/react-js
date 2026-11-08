
import React from 'react'
import Card from './components/Card'




const App = () => {

  const jobs = [
  {
    id: 1,
    companyName: "Figma",
    companyLogo: "https://www.google.com/s2/favicons?domain=figma.com&sz=128",
    jobRole: "UI/UX Designer",
    tag1: "Remote",
    tag2: "Full Time",
    payPerHour: "$35/h",
  },
  {
    id: 2,
    companyName: "Google",
    companyLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    jobRole: "Java Developer",
    tag1: "Java",
    tag2: "Full Time",
    payPerHour: "$60/h",
  },
  {
    id: 3,
    companyName: "Spotify",
    companyLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    jobRole: "Python Developer",
    tag1: "Python",
    tag2: "Remote",
    payPerHour: "$50/h",
  },
  {
    id: 4,
    companyName: "Shopify",
    companyLogo: "https://www.google.com/s2/favicons?domain=shopify.com&sz=128",
    jobRole: "React Developer",
    tag1: "React",
    tag2: "Remote",
    payPerHour: "$45/h",
  },
  {
    id: 5,
    companyName: "Stripe",
    companyLogo: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
    jobRole: "Node.js Developer",
    tag1: "Node.js",
    tag2: "Full Time",
    payPerHour: "$55/h",
  },
];

  return (
    <div className='parent'>
      
      {jobs.map(function(elem){
        return <Card name={elem.companyName} logo={elem.companyLogo} role={elem.jobRole} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHour}/>
      })}
    </div>
  )
}

export default App
