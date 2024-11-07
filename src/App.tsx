import { FormEvent, useState } from 'react'
import './App.css'
import { useGetPostsQuery, useNewPostMutation } from './redux/api'

function App() {
  const [formData, setFormdata] = useState<Post>({ title: "", content: "" })
  const { data } = useGetPostsQuery("")
  const [newPost] = useNewPostMutation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newPost(formData)

  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input onChange={(e) => setFormdata({ ...formData, title: e.target.value })} />
        <textarea onChange={(e) => setFormdata({ ...formData, content: e.target.value })} />
        <button>Submit</button>
      </form>
    </>
  )
}


export default App
