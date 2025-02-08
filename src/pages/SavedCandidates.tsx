import { useEffect, useState } from "react";
import type { Candidate } from "../interfaces/Candidate.interface";
import "./savedCandidates.css";

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
  useEffect(() => {
    const localStorageUsers = readLocalStorage();
    setSavedUsers(localStorageUsers);
  }, []);

  return (
    <div className="savedCandidatesContainer">
      <h1>Potential Candidates</h1>
      <div className="gridTable">
        {/* Headers */}
        <div className="tableRow header">
          <div>Image</div>
          <div>Name</div>
          <div>Location</div>
          <div>Email</div>
          <div>Company</div>
          <div>Repository</div>
          <div>Reject</div>
        </div>

        {/* Table Rows */}
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
        ) : (
          <div className="noCandidates">No Potential Candidates</div>
        )}
      </div>
    </div>
  );
};

export default SavedCandidates;
//   return (
//     <div className="savedCandidatesContainer">
//       <h1>Potential Candidates</h1>
//       <div className="gridContainer">
//         {savedUsers.length > 0 ? (
//           savedUsers.map((user) => (
//             <div key={user.login} className="gridItem">
//               <div className="gridRow">
//                 <img src={user.avatar_url} alt="User Avatar" className="userImage" />
//                 <div className="userInfo">
//                   <div className="userName">{user.name || user.login}</div>
//                   <div className="userDetails">Location: {user.location || "N/A"}</div>
//                   <div className="userDetails">Email: {user.email || "N/A"}</div>
//                   <div className="userDetails">Company: {user.company || "N/A"}</div>
//                   <div className="userDetails">Repository: {user.html_url || "No Repository"}</div>
//                 </div>
//                 <button className="removeButton" onClick={() => removeUser(user.login)}>
//                   x
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="noCandidates">No Potential Candidates</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SavedCandidates;

//   return (
//     <>
//       <h1>Potential Candidates</h1>
//       <div>
//         {savedUsers.length > 0 ? (
//           savedUsers.map((user) => {
//             return (
//               <div key={user.login} className="savedUserCard">
//                 <div>{user.login}</div>
//                 <img src={user.avatar_url} alt="" />
//                 <button onClick={() => removeUser(user.login)}>-</button>
//               </div>
//             );
//           })
//         ) : (
//           <div>No Potential Candidates</div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SavedCandidates;
