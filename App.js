
import React, {Component} from 'react';
import Button from './src/componentes/Button';
import ButtonOperacao from './src/componentes/ButtonOperacao';
import Display from './src/componentes/Display';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  displaySelect: '0'

}

export default class App extends Component{

  state = { ...initialState }
  

  addDigit = n => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return
    }

    const currenteValue = clearDisplay ? '' : this.state.displayValue;

    const displayValue = currenteValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.'){
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }

  }

  clearMemory = () =>{
    this.setState({...initialState});
  }

  setOperation = operation => {
    
    
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true});
    }else{
      this.setState({displaySelect: this.selectorOperation()});
      const equals = operation === '=';
      const values = [...this.state.values];
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })   

    }
    

  }

  selectorOperation = () => {
    
    if(this.state.operation === '/'){
      return '1';
    }
    if(this.state.operation === '*'){
      return '2';
    }
    if(this.state.operation === '-'){
      return '3';  
    }
    if(this.state.operation === '+'){
      return '4';   
    }
    if(this.state.operation === '='){
      return '5';
    }
  }


  render(){
    return(
      <View style={styles.container}>
          <View style={styles.buttons2}>
            <ButtonOperacao label='/' operation={(this.state.displaySelect === '1' ? true : false)}/>
            <ButtonOperacao label='*' operation={(this.state.displaySelect === '2' ? true : false)}/>
            <ButtonOperacao label='-' operation={(this.state.displaySelect === '3' ? true : false)}/>
            <ButtonOperacao label='+' operation={(this.state.displaySelect === '4' ? true : false)}/>
            <ButtonOperacao label='=' operation={(this.state.displaySelect === '5' ? true : false)}/>
            <Display value={this.state.displayValue} />
          </View>
          
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={this.setOperation}/>
          <Button label='7' onClick={this.addDigit}/>
          <Button label='8' onClick={this.addDigit}/>
          <Button label='9' onClick={this.addDigit}/>
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' operation onClick={this.setOperation}/>
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' operation onClick={this.setOperation}/>
          <Button label='0' double onClick={this.addDigit}/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='=' operation onClick={this.setOperation}/>
        </View>
      </View>


    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttons2: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexGrow: 1
  }

});


