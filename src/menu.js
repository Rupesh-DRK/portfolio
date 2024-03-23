import './App.css';
import './menu.css';


function Menu(){
    return(
        <>
        <div className='menu'>
            <a href='#home'><i className='icon-user'></i></a>
            <a href='#education'><i className='icon-graduation'></i></a>
            <a href='#skills'><i className='icon-check'></i></a>
            <a href='#projects'><i className='icon-folder-alt'></i></a>
            <a href='#certificates'><i className='icon-badge'></i></a>               
        </div>
            </>
    );
}



export default Menu;