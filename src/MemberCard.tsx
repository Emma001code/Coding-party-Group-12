import './MemberCard.css'
//Author: Aziza solace afadhali
//Author: Victor Akin-Oladiran

interface MemberCardProps {
  name: string
  role: string
  tasksCompleted: number
  isActive: boolean
  bio?: string
}

function MemberCard({
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
}: MemberCardProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Tasks Completed: {tasksCompleted}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      {bio && <p>Bio: {bio}</p>}
    </>
  )
}

export default MemberCard
