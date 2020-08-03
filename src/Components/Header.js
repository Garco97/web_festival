import React, {Component} from 'react';
import './Header.css'
import Box from '@material-ui/core/Box'
class Header extends Component{
    render(){
        return(
            <section id="header">
                <div className="text-center">
                    <h1>FESTIVAL INTERNACIONAL PIÉLAGOS EN CORTO</h1>
                    <h2>Vioño de Piélagos</h2>
                </div>
            </section>
        )
    }
}
export default Header;
