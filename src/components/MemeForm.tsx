import './MemeForm.css'

export default function MemeForm({
  handleTextChange,
  handleGetMemeImage,
  memeContent,
}) {
  const { topText, bottomText } = memeContent

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='input-container'>
          <label className='sr-only' htmlFor='topText'>
            Top Line Text
          </label>
          <input
            type='text'
            name='topText'
            id='topText'
            placeholder='Top Text'
            onChange={handleTextChange}
            value={topText}
          />
        </div>
        <div className='input-container'>
          <label className='sr-only' htmlFor='bottomText'>
            Bottom Line Text
          </label>
          <input
            type='text'
            name='bottomText'
            id='bottomText'
            placeholder='Bottom Text'
            onChange={handleTextChange}
            value={bottomText}
          />
        </div>
        <button onClick={handleGetMemeImage}>Get a new meme image 🖼</button>
      </form>
    </div>
  )
}
