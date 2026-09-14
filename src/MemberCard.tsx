import type { CSSProperties } from 'react'
import './MemberCard.css'
//Author: Aziza solace afadhali
//Author: Victor Akin-Oladiran
// Yvette Muhoracyeye
//Author: LeroY Carew

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
  // Task 27: Inline Styles (Typed) — one inline style via React's style attribute
  const statusStyle: CSSProperties = {
    color: isActive ? '#2f9e44' : '#868e96',
  }

  return (
    // Task 26: Dynamic Classes — className depends on isActive
    <div className={`member-card ${isActive ? 'member-card--active' : 'member-card--inactive'}`}>
      {/* Task 25: Multiple Classes — "member-name" and "highlight" */}
      <h2 className='member-name highlight'>{name}</h2>
      <p className='member-role'>Role: {role}</p>
      <p className='member-tasks'>Tasks Completed: {tasksCompleted}</p>
      <p className='member-status' style={statusStyle}>Status: {isActive ? 'Active' : 'Inactive'}</p>
      {bio && <p className='member-bio'>Bio: {bio}</p>}
    </div>
  )
}

export default MemberCard