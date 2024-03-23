import './App.css';
import proPic from './images/pro-pic.jpg';


export default function ProfPage() {
    const owner="DAPPU RUPESH KUMAR";
    const prof="WEB DEVELOPER";
    return(
    <>
    <div className='home ' id='home'>
        <div className='home-div'>
            <img src={proPic} />
            <data>
                <h2>{owner}</h2>
                <p></p>
                <h3>{prof}</h3>
                <p className='green'><strong> Python || Java || pHp || HTML5 || CSS || JavaScript || Bootstrap || Django || React JS || c#.NET || SQL || sqlLite3 ||</strong></p>
                <p>I'm a recent <strong>M.Sc - Computer Science</strong> graduate from <strong>University college of Science,OSmania University, Hyderabad</strong> with an aggregate of 6.67 cgpa.
                </p>
            </data>
        </div>
    </div>
    
    
    </>);

    
};
