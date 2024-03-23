import './App.css';
import pp from './images/ceremo.jpeg';
import ttt from './images/ttt.png';

export default function Projects(){
    return(
        <div id='projects'>
            <h2>PROJECTS</h2>
        
        <div className='Projects margin'>
            <section className='flex'>
                <aside>
                    <img src={pp}/>
                    <a href='https://drkrupesh.pythonanywhere.com/home/' target='_blank'>Click to visit website</a>
                </aside>
                <info>
                    <p>
                    <b>CEREMO SMART an online event management system</b>
                    is an interactive web application with USER and ADMIN modules.
                    User can register, login , book for an event by choosing themes,decor, and entertainment from the options provided in it.
                    User can also view his booking histories, edit his profile info and can cancel the events.
                    and Admin can manage all the web info.
                    </p>                    
                </info> 
            </section>
            <section className='flex'>
                <aside>
                    <img src={ttt} className='simg'/>
                    <a href='https://rupesh-drk.github.io/tic-tac-toe' target='_blank'>click here to play TIC-TAC-TOE</a>
                </aside>
                <info>
                    <p>
                    <b>CEREMO SMART an online event management system</b>
                    is an interactive web application with USER and ADMIN modules.
                    User can register, login , book for an event by choosing themes,decor, and entertainment from the options provided in it.
                    User can also view his booking histories, edit his profile info and can cancel the events.
                    and Admin can manage all the web info.
                    </p>                    
                </info> 
            </section>
            

        </div>
        </div>
    );
};