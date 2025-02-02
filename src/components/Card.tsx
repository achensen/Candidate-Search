import type { Candidate } from "../interfaces/Candidate.interface";
import './card.css'

interface CardProps {
    user: Candidate;
}

const Card = ({user}:CardProps) => {
  return (
    <div className="card">
        <img src={user.avatar_url} alt="user image" />
        <div>{user?.login}</div>
    </div>
  )
}

export default Card