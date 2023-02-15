import css from './Modal.module.css';
import {Component} from 'react';

 class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscapeDown);
      }
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscapeDown);
      }
    
      handleEscapeDown =  e =>{
        if(e.code === 'Escape'){
          this.props.onClose();
        }
        
      }
      handleBackdropClick = e =>{
        if(e.currentTarget === e.target){
            this.props.onClose();
        }
      }

    render(){
        return(  <div onClick={this.handleBackdropClick}  className={css.Overlay}>
            <div className={css.Modal}>
              <img src={this.props.photos} alt="qwe" />
            </div>
          </div>)
      
    }
 
};

export default Modal;
