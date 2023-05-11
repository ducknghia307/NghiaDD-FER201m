import React, { Component } from 'react'
export default class Navigation extends Component{
    render(){
        return(
            <div>
                <nav >
                    <ul class="navigator" >
                        <li  class="navigator_item" ><a className='active' href='#home'>Home</a></li>
                        <li class="navigator_item"><a href='#news'>News</a></li>
                        <li class="navigator_item"><a href='#about'>About</a></li>
                        <li class="navigator_item"><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
                
            </div>
            
        )
    }
}