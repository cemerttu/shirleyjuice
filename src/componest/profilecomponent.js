import { useState } from 'react';
import NameForm from './name';  // Adjust path if needed

function ProfileComponent() {
  const [username, setUsername] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);  // ✅ Save image preview URL
    }
  };



  return (
    <div className="profile-component">
      {username ? (
        <div className="profile-message">
          <h2>Welcome back, {username}</h2>
          <p>This is your profile page</p>
        </div>
      ) : (
        <NameForm onSubmitName={setUsername} />
      )}

      <div className="profile-image">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imageUrl && <img src={imageUrl} alt="Profile" />}
      </div>
    </div>
  );
}

export default ProfileComponent;




