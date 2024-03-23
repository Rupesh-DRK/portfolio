import './App.css';
import profPic from "./images/pro-pic.jpg";
import insta from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";

function Profile(prop){
    const name="Dappu Rupesh Kumar";
    
    const email = "rupesh.drk21@gmail.com";
    const address = "Tarnaka, Hyderabad, 500007";


    return (
        <>
        <div className="prof-div">
            <div className="prof-pic">
               <img src={profPic}  alt='profile-pic' />
            </div>
            
            <div className='prof-bio'>
                <span>&#128587;{name}</span>
                <span>&#x1F4E7;{email}</span>
    
                <span>🏠{address}</span>

            </div>
            
            <h2>SOCIAL ACCOUNTS</h2>
            <div className="social">
                <a href="https://in.linkedin.com/in/dappu-rupesh-kumar-07b8b3255"><img src={linkedin} /></a>
                <a href=""><img src={twitter} /></a>
                <a href="https://www.instagram.com/drk_rupesh_kumar/?hl=en#"><img src={insta} /></a>
                <a href="https://wa.link/hnc9wu"><img src={whatsapp} /></a>

            </div>

        </div>
        </>
    )
};

export default Profile;