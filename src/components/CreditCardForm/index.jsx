import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { CCBox, CCInputBox,PaymentFormBox,CardBox,ValueBox } from './styles';
import { Button, TextField,MuiThemeProvider } from '@material-ui/core';
import InputMask from "react-input-mask";
import MaterialInput from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, '/', /\d/, /\d/]}
      showMask
    />
  );
}



export default class PaymentForm extends React.Component {



  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.id });
    this.props.FatherFunction(this.state);
  }
  
  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    this.props.FatherFunction(this.state);
  }

  teste = (e)=>{
    console.log(e)
  }


  
  render() {
    return (

      <PaymentFormBox>

        <CCBox>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
        </CCBox>
        <CCInputBox>
          <form>
              <p><TextField id="number" 
              label="CC Number" 
              variant="outlined" 
              fullWidth
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              /></p>
              <p><TextField id="name" 
              label="Nome" 
              variant="outlined" 
              fullWidth
              type="name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              /></p>
              <p><TextField id="cvc" 
              label="CVC" 
              variant="outlined" 
              
              type="number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              />
                <TextField
                id="expiry" 
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                variant="outlined" 
                label="Vencimento"
                InputProps={{
                  inputComponent: TextMaskCustom,
                }}
              />
              </p>

          </form>
        </CCInputBox>
      </PaymentFormBox>
    );
  }
}