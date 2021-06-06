import React from 'react'
// import Cat from 'src/cat.jpg'

class HornedBeasts extends React.Component{
render(){
    return(
        <div>
                <h2>{this.props.animalName}</h2>
                {/* <img src='https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg' alt='NN' title="NN"/> */}
                <img src={this.props.picture} alt="" title=""/>
                <p>{this.props.desciption}</p>




        </div>


    )
}
}
export default HornedBeasts;
