import './Meme.css'

export default function Meme({ memeContent }) {
  const {
    topText,
    bottomText,
    image,
  }: { topText: string; bottomText: string; image: string } = memeContent
  return (
    <div className='meme-container'>
      <p className='meme__text meme__text--top'>{topText}</p>
      <img src={image} alt='An image of something' />
      <p className='meme__text meme__text--bottom'>{bottomText}</p>
    </div>
  )
}
