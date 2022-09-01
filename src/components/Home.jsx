const Home = ({title}) => {

  const handleClick = (name, e) => {
    console.log(`hello ${name}`, e.target)
    // console.log(e)
  }

  return (
    <div className="home">
      <h2>
          {title}
      </h2>
      <button onClick={(e) => handleClick('JM', e)}>Click Me</button>
    </div>

  )
}
export default Home