class UnsplashClient {
    constructor(props) {
        this.options = this.getDefaultOptions;
    }

    async get(endpoint) {
        const response = await fetch(endpoint);
        console.log(response);
        const data = await response.json();
        
        console.log(data);
        return data;
    };

    async getRandomImage() {
        try {
            var endpoint = 'https://api.unsplash.com/photos/?client_id=c078015b6535c945c392ea7e76f181cd2966cc81db24a36870ce0ce0f967e2ab';
            const data = await this.get(endpoint);
            
            var user = {
                user_id: data[0].user.id,
                user_nick: data[0].user.username,
                user_name: data[0].user.name
            };

            var image = {
                uri_image: data[0].urls.raw,
                heigth: data[0].height,
                width: data[0].width,
                date: data[0].created_at,
                author: user
            };

            return image;
        } catch(e) {
            console.log('fallo en async/await', e);
        }
    };

    async getImage(object){
        try {
            var endpoint = 'https://api.unsplash.com/search/photos?query=' + object.input + '&client_id=c078015b6535c945c392ea7e76f181cd2966cc81db24a36870ce0ce0f967e2ab';
            console.log(endpoint);
            const results = await this.get(endpoint);
            
            const data = results.results;

            var user = {
                user_id: data[0].user.id,
                user_nick: data[0].user.username,
                user_name: data[0].user.name
            };

            var image = {
                uri_image: data[0].urls.raw,
                heigth: data[0].height,
                width: data[0].width,
                date: data[0].created_at,
                author: user
            };

            return image;
        } catch(e) {
            console.log('fallo en async/await', e);
        }
    }

    getDefaultOptions = () => {
        return {
            baseUrl: 'https://api.unsplash.com/photos/?client_id=',
            accessKey: 'c078015b6535c945c392ea7e76f181cd2966cc81db24a36870ce0ce0f967e2ab',
        };
    };
}
export default UnsplashClient;