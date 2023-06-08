import { useState } from "react";
import coursesData from "./CoursesData";


const Courses = () => {
    const [more, setMore]= useState(false);
    
    return ( 
        <section>
            <div className="courses-grid">
                <div className="colum-con">
                {coursesData.map((course)=>{
                    return(
                        <div className="course-con" key={course.id}>
                            <img src={course.image} alt={course.name} />
                            <h2>{course.name}</h2>
                            <p>{more?course.why:`${course.why.substring(0,200)}` }</p>
                            <button className="more-btn" onClick={()=>setMore(!more)}>{more?"See less":"See more"}</button>
                            <button className="learn-btn"> <a href={course.link} target="_blank" rel="noreferrer">Learn</a></button>
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
     );
}
 
export default Courses;