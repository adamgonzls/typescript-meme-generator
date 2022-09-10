import { FormEvent, useState } from 'react'
import Header from './components/Header'
import MemeForm from './components/MemeForm'
import Meme from './components/Meme'
import './App.css'
import memesData from './memesData'

function App() {
  const [memeContent, setMemeContent] = useState({
    topText: '',
    bottomText: '',
    image: 'https://i.imgflip.com/2d3al6.jpg',
  })

  console.log(memeContent)

  function handleTextChange(event: FormEvent) {
    const { name, value }: { name: string; value: string } =
      event.target as HTMLInputElement
    setMemeContent((prevContent) => {
      return {
        ...prevContent,
        [name]: value,
      }
    })
  }

  function getMemeImage(event: FormEvent) {
    event.preventDefault()
    const allMemeData = memesData.data.memes
    const randomMeme =
      allMemeData[Math.floor(Math.random() * allMemeData.length)]
    // console.log(randomMeme)
    setMemeContent((prevContent) => {
      return {
        ...prevContent,
        image: randomMeme.url,
      }
    })
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <MemeForm
          handleTextChange={handleTextChange}
          handleGetMemeImage={getMemeImage}
          memeContent={memeContent}
        />
        <Meme memeContent={memeContent} />
      </main>
    </div>
  )
}

export default App
