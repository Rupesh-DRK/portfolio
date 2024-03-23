import './App.css';

import Education from './education.js';
import Projects from './project.js';
import Skills from './skills.js';
import Certificates from './certificate.js';
import ProfPage from './profPage.js';


function Container(){
    
    return(
    
    <div className="Container">
     <div><ProfPage/></div>
     <div><Education /></div> 
     <div><Skills/></div>
     <div><Projects /></div>
     <div><Certificates/></div>
     
    </div>
    );
};
export default Container;