import React from 'react'

function MemeForm(props) {
    return (
        <form className='meme-form' onSubmit={props.handleSubmit}>
                    <input placeholder='Top Text'
                    type='text'
                    name='topText'
                    value={props.topText}
                    onChange={props.handleChange}
                    />

                    <input placeholder='Bottom Text'
                    type='text'
                    name='bottomText'
                    value={props.bottomText}
                    onChange={props.handleChange}
                    />

                    <button>Generate</button>
                </form>
    )
}

export default MemeForm