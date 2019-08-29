import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemesImages: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(memesData => {
            const {memes} = memesData.data
            console.log(memes)
            this.setState({
                allMemesImages : memes
            })

        })
    }

    handleChange(event) {
        console.log('wdwdw');
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <form className='meme-form'>
                    <input placeholder='Top Text'
                    type='text'
                    name='topText'
                    value={this.state.topText}
                    onChange={this.handleChange}
                    />

                    <input placeholder='Bottom Text'
                    type='text'
                    name='bottomText'
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    />

                    <button type='submit'>Generate</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='memes'/>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
            
        )
    }
}

export default MemeGenerator