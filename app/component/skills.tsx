"use client"
import React, {useState} from 'react'
const Skills = ({data}) => {
  const [activeTab, setActivetab] = useState("soft");
  const setBg = (active:any) => (activeTab === active ?
    "bg-yellow" : "bg-grey");
    const setTabsAlignment = (tab:any) =>
    tab === "soft" ? "text-left" : "text-right";

    const tabs=  <div className='flex'>
    {["soft","hard"].map((el) =>(
       <button key={el} type='button' className={`btn ${setBg(el)}
       ${setTabsAlignment(el)} `}
       onClick={() => setActivetab(el)}
       >{el} Skills</button>
      ))}
      </div>
      const content=  <ul className={`flex flex-row flex-wrap
      content-start list-none py-4 gap-2 ${activeTab === 'soft' ? 'justify-start' : 'justify-end'}`}>
        {data[activeTab].map(({icon, text}) => (
<li key={text} className='skill'>
          <span> {icon} </span>{text}</li>
        )
        )}
      </ul>
  return (
    <div>
   {tabs}
      {content}
    </div>
  )
}

export default Skills
