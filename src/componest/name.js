import {userState} from 'react';


const  NameForm = ({onSubmitN}) =>{
    const [name, setName] = userState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitN(name);
        setName('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
}

export default NameForm;




