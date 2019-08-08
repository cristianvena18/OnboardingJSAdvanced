import React from 'react';
import UnsplashClient from './UnsplashClient';

class Vista extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            photos: {uri_image: ''},
            input: '',
        }
    }

    renderPhotos = async () => {
        try {
            var client = new UnsplashClient();
            if(this.state.input != ''){
                var object_input = {
                    input: this.state.input
                }
                var object_image = await client.getImage(object_input);
                this.setState({photos: object_image, input: ''});
            }
            else{
                var object_image = await client.getRandomImage();
                this.setState({photos: object_image});
            }

            
        } catch (error) {
            console.log(error);
        }
        
    }
    
    onChangeInput = (e) => {
        this.setState({input: e.target.value});
    }

    render(){
        return(<div>
            <button onClick={this.renderPhotos}>Generar</button>
            <input type="text" placeholder="Ingrese una palabra" onChange={this.onChangeInput} />
            <img alt={100} src={this.state.photos.uri_image}></img>
        </div>
        );
    }
}

export default Vista;