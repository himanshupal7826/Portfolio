import profile from "../UI/images/profile.jpg";
import "./photo.css";
 
function Photo(){
    return(
        <div  className="h">
             
            <img  src={profile} alt="Profile photo"  width="400" height="600"/>
            
            <p>Himanshu <br></br> Pal<br></br><h5> Inovative Developer</h5> </p> 
            
             
             
        </div>
    );
    
}
export default Photo;