import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import type { Candidate } from "../interfaces/Candidate.interface";
import Card from "../components/Card";

interface Users {
  login: string;
}

const CandidateSearch = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    name: null,
    login: "",
    location: null,
    avatar_url: "",
    email: null,
    html_url: "",
    company: null,
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getAllUsers = async () => {
    const userData = await searchGithub();
    setUsers(userData);
  };

  const getUser = async () => {
    if (!users[currentIndex]?.login) return;
    const userData = await searchGithubUser(users[currentIndex].login);
    console.log(userData);
    setCurrentUser(userData);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    // console.log("users:", users);
    if (users.length === 0) return;
    getUser();
  }, [users, currentIndex]);

  useEffect(() => {
    console.log("currentUser:", currentUser);
  }, [currentUser]);

  const handleAddUser = () => {
    setCurrentIndex(currentIndex + 1);
    let localStorageUsers: any= localStorage.getItem('users') 
    if (localStorageUsers){
      localStorageUsers= JSON.parse(localStorageUsers)
    } else {
      localStorageUsers= []
    }

    localStorageUsers.push(currentUser)
    localStorage.setItem('users',JSON.stringify(localStorageUsers))

  };
  const handlePassUser = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <h1>CandidateSearch</h1>
      {users[currentIndex] ? (
        <>
          <Card user={currentUser} />
          <button onClick={handleAddUser}>+</button>
          <button onClick={() => handlePassUser()}>-</button>
        </>
      ) : (
        <div>No more Candidates Available</div>
      )}
    </div>
  );
};

export default CandidateSearch;
