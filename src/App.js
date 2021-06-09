import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main';
import SelectedBeast from './components/SelectedBeast'


class App extends React.Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modleName :'',
  //     modleUrl:'',
  //     modelDescription:'',
  //     show: false,
  //   }
  //   }

    // SelectedBeastPassFun =() => {
    //   this.setState({
    //     modleName : this.state.modleName,
    //     modleUrl : this.state.modleUrl,
    //     modelDescription: this.state.modelDescription,




      

// handleOpen =() => {
//   this.setState({
//     show: true
//   })
// }


//       handleClose =() =>{
//         this.setState({
//           show: false
//         })
//       }



    





render(){
  return(
<div>
<Header/>
<Main/>
{/* <Main passFunction = {this.state.SelectedBeastPassFun} open={this.state.handleOpen}/> */}
{/* <SelectedBeast SelectBastname = {this.state.modleName} selectBeastURL = {this.state.modleUrl} selectBeastDes={this.state.modelDescription} close ={this.state.handleClose} open={this.state.handleOpen}/> */}
<Footer/>
</div>



  )
}
}
 
export default App;