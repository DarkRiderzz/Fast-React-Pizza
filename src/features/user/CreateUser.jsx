import {  useState } from 'react';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate()

  //to use dispath

  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return 
    dispatch(updateName(username))
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input mb-8 w-72'
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
