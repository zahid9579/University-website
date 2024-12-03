import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.png';
import program_2 from '../../assets/program_2.jpeg';
import program_3 from '../../assets/program_3.png';
import program_icon_1 from '../../assets/program_icon_1.png';
import program_icon_2 from '../../assets/program_icon_2.png';
import program_icon_3 from '../../assets/program_icon_3.png';

const Programs = () => {
  return (
    <div className='programs'>

        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>MBBS Degree</p>
            </div>

        </div>
      
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Electrical Degree</p>
            </div>

        </div>

        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
               <img src={program_icon_3} alt="" />
               <p>Computer Degree</p>
            </div>

        </div>

    </div>
  )
}

export default Programs;