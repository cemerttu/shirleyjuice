import { useState } from 'react'; // ✅ Correct

const NameForm = ({ onSubmitName }) => {  // ✅ Receive prop
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmitName(name);  // ✅ Works now
      setName('');
    }
  };

  return (
    <div className='name-form'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder='Enter your name'
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NameForm;






