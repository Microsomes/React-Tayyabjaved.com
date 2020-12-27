import { useEffect, useState} from 'react'
import {} from './home.css'

 
import BasicNav from "../components/basic_nav/basic_nav_Hook.js";
import IntroComp from '../components/intro/intro.js';

import ColorModeContext from '../../context/ColorModeContext';




function Home(){
    return (
        <ColorModeContext.Provider value="{mode:'light'}"> 
        <div>

            <button>Dark Mode</button>

            <BasicNav></BasicNav>

                <pre>NULL, UNDEFINED=>TAYYAB</pre>

 
                <IntroComp></IntroComp>
                

         </div>
         </ColorModeContext.Provider>
    );
}


export default Home;