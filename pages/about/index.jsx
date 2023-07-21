import React from 'react'

export default function About({data}) {
  console.log(data)
  return (
    <div>
      <h1>About Section</h1>
      <h3> { data.name} </h3>
      <h5> {data.username} </h5>
      <small> {data.email} </small>
    </div>
  )
}


export async function getServerSideProps(){

  // const URL = "https://jsonplaceholder.typicode.com/users"
  const URL = "https://jsonplaceholder.typicode.com/users/1"
  
  const res = await fetch(URL)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}