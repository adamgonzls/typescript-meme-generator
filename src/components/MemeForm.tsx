import './MemeForm.css'

export default function MemeForm() {
  return (
    <div className='form-container'>
      <form className='form'>
        <div className='input-container'>
          <label className='sr-only' htmlFor='topLine'>
            Top Line
          </label>
          <input
            type='text'
            name='topLine'
            id='topLine'
            placeholder='Top Text'
          />
        </div>
        <div className='input-container'>
          <label className='sr-only' htmlFor='bottomLine'>
            Bottom Line
          </label>
          <input
            type='text'
            name='bottomLine'
            id='bottomLine'
            placeholder='Bottom Text'
          />
        </div>
        <button>Get a new meme image 🖼</button>
      </form>
    </div>
  )
}
