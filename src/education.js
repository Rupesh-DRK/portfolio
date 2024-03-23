import './App.css';

export default function Education(){
    const study=['Post Graduation','Graduation','10+2','SSC'];
    const course=['M.Sc - Computer Science','B.Sc - M.St.Cs','M.P.C','SSC'];
    const university=['UCS,Osmania Unversity','NSV degree college','Sri vani junior college','Sri chaitanya high school'];
    const score=[6.67,9.07,811,9.0];
    const yos=['Nov/2021-Aug/2023','May/2017-Oct/2021','2015-2017','2014-2015'];

    return (
      
        <div className='education margin' id='education'>
          <h2>EDUCATION</h2>
          {study.map((studyItem, index) => (
            
            <div key={index} className="academic">
             <span> <span><h2>{course[index]}</h2>
              <p>{yos[index]}</p></span>
              <span> <p>{university[index]}</p>
              <p>Score: {score[index]}</p></span>
              </span>
            </div> 
          ))}
        </div>
        
      );
};