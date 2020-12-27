import  {useEffect,useState} from 'react'


import image from '../../../assets/home1.jpg'

function IntroComp(){
    return (
        <div>
           <div id="introImageContainer">
                <h2>Welcome to the not so normal world of Tayyab.</h2>

                    <img src={image}></img>
                </div>
        </div>
    )
}


export default IntroComp;