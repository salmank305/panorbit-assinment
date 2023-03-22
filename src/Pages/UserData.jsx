export const UserData = ({ userDataCollection }) => {
    const { name, profilepicture } = userDataCollection;
  
    return (
      <>
        <div className="d-flex m-2 p-2">
          <img className="profile_pic" src={profilepicture} alt="profilePic" />
          <div className="userName">{name}</div>
        </div>
        <hr className="bg-dark" />
      </>
    );
  };
  