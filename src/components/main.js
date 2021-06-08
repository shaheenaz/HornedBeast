import React from 'react'
import HornedBeasts from './HornedBeasts'
import json from './data.json'
import CardColumns from 'react-bootstrap/CardColumns'
// import Modal from 'react-bootstrap/Modal'
import SelectedBeast from './SelectedBeast'
class Main extends  React.Component{
    constructor(props){
        super(props)
        this.state ={
            data :json
        }

passedFunction  = () => {

    this.props.passFunction

}

    }
    render(){
        return(
            <div>
               
{this.state.data.map(item =>(
     <CardColumns>
   <HornedBeasts 
   picture= {item.image_url}
   animalName = {item.title}
   desciption ={item.description}

   >
<SelectedBeast/>
   </HornedBeasts>
   </CardColumns>
) )}




{/* <HornedBeasts animalName={'UniWhal'} picture ={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}  desciption={'A unicorn and a narwhal nuzzling their horns'}/>
<HornedBeasts animalName={'Rhino Family'} picture={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}desciption ={'Mother (or father) rhino with two babies'}/>
<HornedBeasts animalName={'Unicorn Head'} picture={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'}desciption ={'Someone wearing a creepy unicorn head mask'}/>
<HornedBeasts animalName={'UniLego'} picture={'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80'}desciption ={'Lego figurine dressed in a unicorn outfit'}/>
<HornedBeasts animalName={'Basically a unicor'} picture={'https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg'}desciption ={'A narwhal is basically a unicorn after all, right?'}/>
<HornedBeasts animalName={'#truth'} picture={'https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg'}desciption ={'The truth behind narwhals'}/>
<HornedBeasts animalName={'Baby Rhino'} picture={'https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg'}desciption ={'This is actually a figurine but it looks kinda real'}/>
<HornedBeasts animalName={'Cera'} picture={'https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003'}desciption ={'Three horns but still, horns. And who doesnt like The Land Before Time?'}/>
<HornedBeasts animalName={'Narwhal costume'} picture={'https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg'}desciption ={'A woman wearing a blue narwhal costume'}/>
<HornedBeasts animalName={'Rhino costume'} picture={'https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg'}desciption ={'Mascots have to get their costumes somewhere'}/>
<HornedBeasts animalName={'Believe'} picture={'https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg'}desciption ={'I believe in unicorns, do you?'}/>
<HornedBeasts animalName={'Markhor'} picture={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg'}desciption ={'These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?'}/>
<HornedBeasts animalName={'Baby markhor'} picture={'http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi'}desciption ={'Even the babies are adorable'}/>
<HornedBeasts animalName={'Mouflon'} picture={'https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}desciption ={'Those horns though'}/>
<HornedBeasts animalName={'Addax'} picture={'https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'}desciption ={'This guy is basically extinct but survives well in captivity, so theyre frequently found in zoos'}/>
<HornedBeasts animalName={'Baby mouflon'} picture={'https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg'}desciption ={'The cuteness that is a baby mouflon asleep'}/>
<HornedBeasts animalName={'Happy Jacksons Chameleon'} picture={'https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}desciption ={'These are really common in Hawaii'}/>
<HornedBeasts animalName={'Serious Jacksons Chameleon'} picture={'https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg'}desciption ={'This one is very serious.'}/>
v<HornedBeasts animalName={'Horned Lizard'} picture={'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false'}desciption ={'Fave food: ants'}/>
<HornedBeasts animalName={'Smaug'} picture={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg'}desciption ={'Fan illustration of Smaug from The Hobbit'}/> */}


            </div>



        )
    }
}
export default Main;