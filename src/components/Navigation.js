import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation(){
    const { theme, toggle, dark } = useContext(ThemeContext)
        return(
            <div>
                <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color,display:"flex",justifyContent: "space-between", }} >
                    <ul className='navigator'>
                        <li   class="navigator_item" ><a    style={{
                                
                                color: theme.color,
                                outline: "none",
                            }} className='active' href='#home'>Home</a></li>
                        <li class="navigator_item"><a    style={{
                                
                                color: theme.color,
                                outline: "none",
                            }} href='#news'>News</a></li>
                        <li class="navigator_item"><a    style={{
                                
                                color: theme.color,
                                outline: "none",
                            }}  href='#about'>About</a></li>
                        <li class="navigator_item"><a    style={{
                                
                                color: theme.color,
                                outline: "none",
                            }} href='#contact'>Contact</a></li>
                        </ul>
                        <div style={{ position: "relative", padding: 10 }}>
                    <a
                        className="switch-mode"
                        href="#"
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            paddingRight: 40,
                            textDecoration: "none",
                        }}
                        data-testid="toggle-theme-btn"
                    >
                        <span>Switch Nav to {!dark ? "Dark" : "Light"} mode</span>
                    </a>
         </div>

                    
                </nav>
                </div>    
    
            
        )
    }
  