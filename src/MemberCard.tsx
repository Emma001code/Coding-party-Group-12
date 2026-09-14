import './MemberCard.css'
//Author: Aziza solace afadhali
//Author: Victor Akin-Oladiran
//Author: Yvette Muhoracyeye
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
    //Author: Yvette Muhoracyeye
    <div className= "member-card">
      <h2 className= 'member-name highlight'>{name}</h2>
      <p className= 'member-role'>Role: {role}</p>
      <p className= 'member-tasks'>Tasks Completed: {tasksCompleted}</p>
      <p className= 'member-status'>Status: {isActive ? 'Active' : 'Inactive'}</p>
      {bio && <p className= 'member-bio'>Bio: {bio}</p>}
    </div>
  )
}

export default MemberCard
