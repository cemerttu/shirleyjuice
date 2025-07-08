import {userState} from 'react';
import NameForm from '/name';
function profileComponent() {
  const [username, setUsername] = userState('');
  
  return (
      <div className="profile-component">
        {username ? (
          <div className="profile-message">
            <h2>Welcome back, {username}</h2>
            <p>This is your </p>
          </div>
        ) : (
          <NameForm onSubmitName={setUsername} />
        )}
        <div className='Profile-image'>
          <img src='https://via.placeholder.com/150' alt='Profile' />
        </div>
      </div>


  );
}

export default profileComponent;






