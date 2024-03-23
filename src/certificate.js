import './App.css';
import jsd from './images/nimsme.png';
import besant from './images/besant.png'

export default function Certificate() {
    return(
        <div id='certificates'>
            <h2>CERTIFICATES</h2>
            <div className='certificates'>
            <section className='flex'>
                <caption><p><i>EMPLOYABILITY SKILLS CERTIFICATION</i> from <i>TATA MAHENDRA of TASK, </i>recognized by <strong>TELANGANA GOVERNMENT.</strong></p></caption>
                <aside></aside>
            </section>
            <section className='flex'>
                <caption><p><i>JUNIOR SOFTWARE DEVELOPER </i>CERTIFICATION from <strong>NIMS-ME, YUSUFGUDA, HYDERABAD</strong> recognized by Telangana Government.</p>
                <p>FROM  03/11/2022 </p><p>To 17/01/2023 </p>
                <strong>Date of Issue : 19/01/2023 </strong>
                </caption>
                <aside><img src={jsd}/></aside>
            </section>
            <section className='flex'>
                <caption><p><strong>JAVA TRAINING  </strong>CERTIFICATION from <strong>BESANT TECHNOLOGIES</strong></p>
                <strong>Date of Issue : 12/07/2023 </strong>
                </caption>
                <aside><img src={besant}/></aside>
            </section>
            </div>
        </div>
    );

};
