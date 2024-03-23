import './App.css';
import python from './images/Python.png';
import html from './images/HTML5.png';
import logo from './logo.svg';
import django from './images/django.png';
import bs from './images/bs.png';
import java from './images/java.png';
import php from './images/php.png';
import css from './images/css,png.png';
import js from './images/js.png';
import sql from './images/sql.png';
import mysql from './images/mysql.png';


export default function Skills() {
    
    return(< div id='skills'>
    <h2>TECHNICAL SKILLS</h2>
        <div className='skills margin'>
            <skill>
                <a href='https://www.geeksforgeeks.org/html5/' target='_blank'><img src={html} ></img></a>
                <label>HTML5</label>
            </skill>
            <skill>
                <a href='https://www.w3schools.com/css/' target='_blank'><img src={css} ></img></a>
                <label>CSS3</label>
            </skill>
            <skill>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'><img src={js} ></img></a>
                <label>JavaScript</label>
            </skill>
            <skill>
                <a href='https://getbootstrap.com/docs/5.0/getting-started/introduction/' target='_blank'><img src={bs} ></img></a>
                <label>BOOTSTRAP</label>
            </skill>
            <skill>
                <a href='https://react.dev/' target='_blank'><img src={logo} ></img></a>
                <label>REACT Js</label>
            </skill>
            <skill>
                <a href='https://www.python.org/doc/' target='_blank'><img src={python} ></img></a>
                <label>PYTHON</label>
            </skill>
            <skill>
                <a href='https://docs.djangoproject.com/en/5.0/' target='_blank'><img src={django} ></img></a>
                <label>Django</label>
            </skill>
            <skill>
                <a href='https://www.php.net/docs.php' target='_blank'><img src={php} ></img></a>
                <label>PHP</label>
            </skill>
            <skill>
                <a href='https://docs.oracle.com/en/java/' target='_blank'><img src={java} ></img></a>
                <label>JAVA</label>
            </skill>
            <skill>
                <a href='https://www.w3schools.com/sql/' target='_blank'><img src={sql} ></img></a>
                <label>SQL</label>
            </skill>
            <skill>
                <a href='https://www.w3schools.com/MySQL/default.asp' target='_blank'><img src={mysql} ></img></a>
                <label>MySQL workbench</label>
            </skill>

        </div>
        </div>
    );
};
