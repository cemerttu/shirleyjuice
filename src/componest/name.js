import {userState} from 'react';

const NameForm = () => {
  const [name, setName] = userState('');
  const  habndleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmitName(name);
      setName('');
    }
  };

  return (
    <div className='name-form'>
      <form onSubmit={handleSubmit}>
        <input
        type = "text"
        id = "name"
        value = {name}
        onChange={(e) => setName(e.target.value)} 
        placeholder='Enter your name'
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default NameForm;


