import { useEffect, useState } from 'react';

import "./home.css"

import SignUp from '../auth/signup'

function HomeTooMany(){
    return (
        <div>

            <SignUp></SignUp>
             {/* <form>
                <h1>Add Fact</h1>
                <input type="text" placeholder="what is your fact"></input>
            </form> */}
        </div>
    );
}

export default HomeTooMany