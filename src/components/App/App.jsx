import React from 'react';
import Header from '../Header/Header';
import ResultsContainers from '../ResultsContainers/ResultsContainers';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component{ 
  // state ={
  //   headerText: 'Name it!',  --new way of declaring state 
     
  // };
  // new way is below--
  constructor(){
    super();
    this.state ={
      headerText: 'Name suggify!',
      headerExpanded: true,
      suggestedNames: [],
    };
  }

  handleInputChange =(inputText) => {
   
   this.setState({
    headerExpanded: !inputText,
    suggestedNames: inputText ? name(inputText) :[],
  });
  };
  render(){
    
   return(
      <div>
        <Header 
         headerExpanded={this.state.headerExpanded} 
         headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainers suggestedNames={this.state.suggestedNames}/>
      </div>
    );
  }
}  
// here above its used a prop to transfer parent component to child component.
// i.e header this state sis used to give the state of name it title.


export default App;
