import type { CSSProperties } from 'react'
import './MemberCard.css'

// Author: Aziza Solace Afadhali
// Author: Victor Akin-Oladiran
// Author: Yvette Muhoracyeye
// Author: LeroY Carew

interface MemberCardProps {
  name: string
  role: string
  tasksCompleted: number
  isActive: boolean
  bio?: string
  onRemove: () => void
  onToggleStatus: () => void
}

function MemberCard({
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
  onRemove,
  onToggleStatus,
}: MemberCardProps) {
  // Task 27: Inline Styles (Typed)
  const statusStyle: CSSProperties = {
    color: isActive ? '#2f9e44' : '#868e96',
  }

  return (
    <div className={`member-card ${isActive ? 'member-card--active' : 'member-card--inactive'}`}>
      {/* Task 25: Multiple Classes */}
      <h2 className='member-name highlight'>{name}</h2>

      <p className='member-role'>Role: {role}</p>

      <p className='member-tasks'>Tasks Completed: {tasksCompleted}</p>

      <p className='member-status' style={statusStyle}>
        Status: {isActive ? 'Active' : 'Inactive'}
      </p>

      {bio && <p className='member-bio'>Bio: {bio}</p>}

      {/* Task 45: Remove member */}
      <button type="button" onClick={onRemove}>
        Remove
      </button>

      {/* Task 47: Toggle member status */}
      <button type="button" onClick={onToggleStatus}>
        {isActive ? 'Set Inactive' : 'Set Active'}
      </button>
    </div>
  )
}

export default MemberCard
