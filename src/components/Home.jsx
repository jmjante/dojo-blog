import { useState } from "react"

const Home = ({ title }) => {
  const [name, setName] = useState('mario')

  const handleClick = () => {
    setName('luigi')
  }

  return (
    <div className="home">
      <h2>{ title }</h2>
      <p>{ name }</p>
      <button onClick={ handleClick }>Click Me</button>
    </div>

  )
}
export default Home