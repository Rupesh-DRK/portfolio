import './footer.css'
import insta from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";


export default function Footer() {
    
    return(
        <>
        <div className="footer">
        <p>All rights are reserved to owner.</p>
        <p>© Copyright, D.RupeshKumar</p>
        <div className='flex'>
           <a href='#home'>About</a>
           <a href='#projects'>My Projects</a>
        </div>
        <p><strong>For any help or queries please contact :</strong></p>
        <p>email : <a href='mailto:rupesh.drk21@gmail.com'>rupesh.drk21@gmail.com</a></p>
        <div className="social flex">
                <a href="https://in.linkedin.com/in/dappu-rupesh-kumar-07b8b3255"><img src={linkedin} /></a>
                <a href=""><img src={twitter} /></a>
                <a href="https://www.instagram.com/drk_rupesh_kumar/?hl=en#"><img src={insta} /></a>
                <a href="https://wa.link/hnc9wu"><img src={whatsapp} /></a>
            </div>
        </div>
        </>
    );
};
