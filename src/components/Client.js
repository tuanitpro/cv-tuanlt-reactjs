import React, {
    Component
} from 'react';

const logos = [
    {path: '/img/logos/c-liogo1.png', link:'#'},
    {path: '/img/logos/c-liogo2.png', link:'#'},
    {path: '/img/logos/c-liogo3.png', link:'#'},
    {path: '/img/logos/c-liogo4.png', link:'#'}
]

class Client extends Component {
    constructor(props){
        super(props);

        this.mappingLogo = this.mappingLogo.bind(this);
    }

    mappingLogo(item){
        return <div key={item.path} className="col-md-3 col-sm-6 wow flipInY animated"><img src={item.path}   className="img-responsive img-centered" alt=""/></div>
    }

    render(){
        let listLogos = logos.map(this.mappingLogo);
        return(
            <aside className="clients bg-clients">
            <div className="container">
                <div className="row">
                    {listLogos}
                </div>
            </div>
            </aside>
        )
    }
}
export default Client;