import { useState } from 'react';

import axios from 'axios'


function signUp(){

    function createAccount(e){
        e.preventDefault();
        
        console.log(e.target.value)
     }

    return (
        <form onSubmit={createAccount}>
            <h1>Create an account</h1>
            <input name="username" type="text" placeholder="username"></input>
            <input name="email" type="text" placeholder="email"></input>
            <input name="password" type="password" placeholder="password"></input>
            <input type="submit"></input>
        </form>
    );
}   


export default signUp;