import { useState } from "react"
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'my new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'my other website', body: 'lorem ipsum...', author: 'luigi', id: 2},
    {title: 'my third website', body: 'lorem ipsum...', author: 'wahoo', id: 3},
  ])

  const handleDelete = (id ) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className="home">
      <BlogList blogs = { blogs } title = 'All Blog' handleDelete = { handleDelete }/>
    </div>
  )
}
export default Home