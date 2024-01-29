import './CreateUser.css';
export const user = {
    name: '',
  };
  
  function CreateUser() {clicked
    function handleCreateUser(name) {
      user.name = name;
    }
  
    return (
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Name</label>
          <input type="text" />
        </p>
  
        <p id="actions">
          <button onClick={() => handleCreateUser('Name')}>Create User</button>
        </p>
      </div>
    );
  }
  
  export default CreateUser;
  