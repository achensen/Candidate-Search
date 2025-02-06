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
        <div>Company: {user?.company}</div>
        <div>E-Mail: {user?.email}</div>
        <div>Repository URL: {user?.html_url}</div>
        <div>Name: {user?.name}</div>
        <div>Location: {user?.location}</div>
    </div>
  )
}

export default Card