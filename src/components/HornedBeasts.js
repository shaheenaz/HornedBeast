import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'

// import Cat from 'src/cat.jpg'

class HornedBeasts extends React.Component{
constructor(props){
    super(props)
    this.state = {
        favorite : 0
    }
}

numOffav=()=>(
    this.setState({
        favorite : this.state.favorite+1}
    )

)




render(){
    return(
        <div>
                {/* <h2>{this.props.animalName}</h2> */}
                {/* <img src='https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg' alt='NN' title="NN"/> */}
                {/* <img  onClick={this.numOffav}src={this.props.picture} alt="" title=""/>
                <p> favorite 💟:{this.state.favorite}</p>
                <p>{this.props.desciption}</p> */}





                <Card onClick={this.props.open}style={{ width: '18rem' }}>
  <Card.Img variant="top" onClick={this.numOffav}src={this.props.picture} />
  <Card.Body>
    <Card.Title>{this.props.animalName}</Card.Title>
    <Card.Text>
    {this.props.desciption}
    favorite 💟:{this.state.favorite}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>




        </div>


    )
}
}
export default HornedBeasts;
