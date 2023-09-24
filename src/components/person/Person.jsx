import React from 'react'

const Person = ({name,job,language}) => {
  return (
    <div>
        <h1>My name is {name}, i am a {job}, my favorite language is {language}</h1>
    </div>
  )
}

export default Person