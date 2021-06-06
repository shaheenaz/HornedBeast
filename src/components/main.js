import React from 'react'
import HornedBeasts from './HornedBeasts'

class Main extends  React.Component{
    render(){
        return(
            <div>
<HornedBeasts animalName={'dogs'}/>
<HornedBeasts picture={'https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg'}/>
<HornedBeasts desciption ={'cute dog '}/>
<HornedBeasts animalName={'kitten'}/>
<HornedBeasts picture={'https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg'}/>
<HornedBeasts desciption ={'cute cat '}/>
<HornedBeasts animalName={'horse'}/>
<HornedBeasts picture={'https://equusmagazine.com/.image/t_share/MTc4NjI5NjMwMDkyMTI1OTg0/horse-galloping-on-sand.jpg'}/>
<HornedBeasts desciption ={'cute horse '}/>


            </div>



        )
    }
}
export default Main;