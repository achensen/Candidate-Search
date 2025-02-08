import { useEffect, useState } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";
import "./savedCandidates.css";

//Saves candidates to local Storage, or removes them from the array
const SavedCandidates = () => {
  const [savedUsers, setSavedUsers] = useState<Candidate[]>([]);
  const readLocalStorage = () => {
    const localStorageUsers: any = localStorage.getItem("users");
    if (localStorageUsers) {
      return JSON.parse(localStorageUsers);
    } else {
      return [];
    }
  };
  const removeUser = (userLogin: string) => {
    const localStorageUsers = readLocalStorage();
    const filteredUsers = localStorageUsers.filter(
      (user: Candidate) => user.login !== userLogin
    );
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    setSavedUsers(filteredUsers);
  };
  //reads local storage on page opening 
  useEffect(() => {
    const localStorageUsers = readLocalStorage();
    setSavedUsers(localStorageUsers);
  }, []);

  //Grid styling for user information
  return (
    <div className="savedCandidatesContainer">
      <h1>Potential Candidates</h1>
      <div className="gridTable">
        <div className="tableRow header">
          <div>Image</div>
          <div>Name</div>
          <div>Location</div>
          <div>Email</div>
          <div>Company</div>
          <div>Repository</div>
          <div>Reject</div>
        </div>

        {savedUsers.length > 0 ? (
          savedUsers.map((user) => (
            <div key={user.login} className="tableRow">
              <div>
                <img
                  src={user.avatar_url}
                  alt="User Avatar"
                  className="userImage"
                />
              </div>
              <div>
                <strong>{user.name || user.login}</strong>
              </div>
              <div>{user.location || "N/A"}</div>
              <div>{user.email || "N/A"}</div>
              <div>{user.company || "N/A"}</div>
              <div className="userDetails">
                {user.html_url ? (
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    {user.html_url}
                  </a>
                ) : (
                  "No Repository"
                )}
              </div>

              <div>
                <button
                  className="removeButton"
                  onClick={() => removeUser(user.login)}
                >
                  x
                </button>
              </div>
            </div>
          ))
          //Displays when all candidates have been removed from local storage
        ) : (
          <div className="noCandidates">No Potential Candidates</div>
        )}
      </div>
    </div>
  );
};

export default SavedCandidates;
