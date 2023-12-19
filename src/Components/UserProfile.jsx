import React from 'react';

const Card1 = ({ FirstName,LastName,Skillset,DateOfBirth,Gender,Address,AvatarUrl }) => {
 

  return (
    // <div style={{height:100,width:300}} className='container'>
    <div  style={{height:400,width:300,margin:10}} className="card">
      <img style={{marginTop:10,marginLeft:60,height:200,width:150}}src={AvatarUrl} alt={`${FirstName} ${LastName}`} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{`${FirstName} ${LastName}`}</h2>
        <div style={{textAlign:'left'}}>
        <p style={{marginLeft:'10px'}} className="card-skillset"><strong>Skillset:</strong> {Skillset}</p>
        <p style={{marginLeft:'10px'}} className="card-dob"><strong>Gender:</strong> {Gender}</p>
        <p style={{marginLeft:'10px'}} className="card-dob"><strong>Date of Birth:</strong> {DateOfBirth}</p>
        <p style={{marginLeft:'10px'}} className="card-address"><strong>Address:</strong> {Address}</p>
        </div>
      </div>

    </div>
    // </div>
  );
}

export default Card1;
