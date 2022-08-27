import './Meme.css'

export default function Meme() {
  return (
    <div className='meme-container'>
      <p className='meme__text meme__text--top'>Top Text goes here</p>
      <img
        src='https://imgflip.com/s/meme/X-X-Everywhere.jpg'
        alt='An image of something'
      />
      <p className='meme__text meme__text--bottom'>Bottom Text goes here</p>
    </div>
  )
}
