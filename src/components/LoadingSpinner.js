import Loader from "react-loader-spinner";
import React from 'react';
export default class App extends React.Component {
  //other logic
  render() {
    return (
        <Loader type="TailSpin" color="#fff" height={15} width={15} 
        />
    );
  }
}