import { useEffect, useState } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";
import './savedCandidates.css'

const SavedCandidates = () => {
  const [savedUsers, setSavedUsers] = useState<Candidate[]>([])
  const readLocalStorage = () => {
    const localStorageUsers: any= localStorage.getItem('users') 
    if (localStorageUsers){
      return JSON.parse(localStorageUsers)
    } else {
      return []
    }
  }
  const removeUser= (userLogin: string)=> {
    const localStorageUsers = readLocalStorage()
    const filteredUsers = localStorageUsers.filter((user:Candidate)=>user.login !== userLogin)
    localStorage.setItem('users', JSON.stringify(filteredUsers))
    setSavedUsers(filteredUsers)
  }
  useEffect(() => {
    const localStorageUsers = readLocalStorage()
    setSavedUsers(localStorageUsers)
  }, [])
  
  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        {savedUsers.map((user)=>{
          return <div key={user.login} className="savedUserCard">
            <div>{user.login}</div>
            <img src={user.avatar_url} alt="" />
            <button onClick={()=>removeUser(user.login)}>-</button>
            </div>

        })}
      </div>
    </>
  );
};

export default SavedCandidates;
