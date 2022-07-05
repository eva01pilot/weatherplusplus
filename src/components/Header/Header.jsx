import React from 'react';
import './Header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';


const Header = (props)=>{
    return(
        <header className   = 'header'>
            <form className="d-flex" onSubmit={props.onClick}>
            <input type="text" 
            placeholder="Введите почтовый индекс" 
            className="input"
            onChange={props.onChange}
            value={props.value}
            />
            <button><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>

        </header>
    )
}
export default  Header;
