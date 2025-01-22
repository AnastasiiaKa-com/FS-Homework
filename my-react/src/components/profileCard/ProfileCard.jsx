import "./ProfileCard.css";

function ProfileCard(obj) {
  return (
    <div>
      
      <div className="profileCard">
       
        <div className="profileCard_img">
          
          <img src={obj.avatar} height={300} alt={obj.name} />
        </div>
      </div>
      
        
        <p>
          <span>Name: </span>
          {obj.name}
        </p>
        
        <p>
          <span>Occupation:</span>
           {obj.occupation}
        </p>
        <p>
          <span>Hobbies: </span>
          {obj.hobby}
        </p>
      </div>
  
  );
}
export default ProfileCard;