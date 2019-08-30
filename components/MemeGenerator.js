import React from 'react'
import MemeForm from './MemeForm'

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
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(memesData => {
            const {memes} = memesData.data
            this.setState({
                allMemesImages : memes
            })

        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        //To avoid refresh
        event.preventDefault()
        var rand =  Math.floor(Math.random()*(this.state.allMemesImages.length))
        this.setState({
            randomImg : this.state.allMemesImages[rand].url
        })
    }

    render() {
        return (
            <div>
                <MemeForm handleChange={this.handleChange} 
                topTexts={this.state.topText}
                bottomText={this.bottomText}
                handleSubmit={this.handleSubmit}
                />

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