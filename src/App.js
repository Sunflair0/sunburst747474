import './App.css';
import { useCallback, useState } from 'react';

function App() {
    const [user,setUser] =useState(null);

    const signUp =useCallback((email, password) => {
//TODO IMPLEMENT
    });      
  
const loginWithEmail =useCallback((email, password) => {
//TODO IMPLEMENT
    });    

const loginWithGoogle =useCallback((email, password) => {
//TODO IMPLEMENT
    });    
const logout = useCallback((email, password) => {
//TODO IMPLEMENT
    });    
return <div className="App"></div>;
}
export default App;