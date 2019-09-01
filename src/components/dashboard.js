import React from 'react';
import Header from './header-component';;
import EmployeeDetails from './EmployeeDetails';
import SampleModal from "./modals/SampleModal";
import OptionModal from './modals/OptionModal';
import '../styles/style.scss'
import Footer from './footer.component';


export  class  Welcome extends React.Component {
  render() {
    return (
    <div>
      <h3>Hello {this.props.name}</h3>
    </div>
    );
  }
};

export default class DashboardApp extends React.Component {
  state = {
    time : new Date().toLocaleTimeString()
  }
  tick = ()  => {
   this.setState(()=> ({time: new Date().toLocaleTimeString()}));
  }



  render() {
    setInterval(this.tick,1000);
    const subtitle = 'Check your expanses...';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
        <h2>Dashboard</h2>
        <Welcome name={'jitu'}/>

        <h3> Time is : {this.state.time}</h3>
          {/* <EmployeeDetails />
          <SampleModal /> */}
        </div>
        <Footer />
        <OptionModal />                
      </div>
    );
  }
}
