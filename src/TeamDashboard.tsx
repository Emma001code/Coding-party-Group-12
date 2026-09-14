import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import MemberCard from './MemberCard'

//Author: Emmanuel Ngwoke
//Author: Victor Akin-Oladiran
//Author: Yvette Muhoracyeye
//Author: LeroY Carew

interface MemberData {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

const memberList: MemberData[] = [
  { name: "Emmanuel Ngwoke", role: "Team Member", tasksCompleted: 10, isActive: true, bio: "A member of the React TypeScript development team." },
  { name: "Aziza Solace Afadhali", role: "Team Member", tasksCompleted: 8, isActive: false },
  { name: "Victor Akin-Oladiran", role: "Team Member", tasksCompleted: 7, isActive: true, bio: "A member working on component props and TypeScript." },
];

function TeamDashboard() {
  // Task 31: useState Hook (Typed) — numeric teamScore
  const [teamScore, setTeamScore] = useState<number>(0);

  // Task 36: String State — new member's name
  const [newMemberName, setNewMemberName] = useState<string>('');

  // Task 40: track the most recently submitted name so we have something to display
  const [lastSubmittedName, setLastSubmittedName] = useState<string>('');

  // Task 34: Functional Updates
  function handleIncreaseScore() {
    setTeamScore((previousScore) => previousScore + 1);
  }

  // Task 35: Decrease State, floored at 0
  function handleDecreaseScore() {
    setTeamScore((previousScore) => Math.max(0, previousScore - 1));
  }

  // Task 38: Change Event (Typed)
  function handleNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewMemberName(event.target.value);
  }

  // Task 39 & 40: Form Submission (Typed), preventDefault, use the input value
  function handleAddMemberSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = newMemberName.trim();
    if (trimmedName === '') {
      return;
    }

    console.log('Submitted member name:', trimmedName);
    setLastSubmittedName(trimmedName);
    setNewMemberName('');
  }

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>We are breakout room 12 working on React TypeScript tasks as a team.</p>

      {/* Task 32: Display State */}
      <p>Team Score: <strong>{teamScore}</strong></p>

      {/* Task 33 & 34: increase button, functional update */}
      <button type="button" onClick={handleIncreaseScore}>+ Increase</button>

      {/* Task 35: decrease button, floored at 0 */}
      <button type="button" onClick={handleDecreaseScore}>− Decrease</button>

      {/* Task 39: input lives inside a form with a typed submit handler */}
      <form onSubmit={handleAddMemberSubmit}>
        {/* Task 37 & 38: controlled input, typed onChange */}
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameInputChange}
          placeholder="New member name"
        />
        <button type="submit">Add Member</button>
      </form>

      {/* Task 40: display the submitted name */}
      {lastSubmittedName && <p>Last submitted member name: {lastSubmittedName}</p>}

      {/* Task 30: Dashboard Layout — grid container for the member cards */}
      <div className="dashboard-grid">
        {memberList.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            tasksCompleted={member.tasksCompleted}
            isActive={member.isActive}
            bio={member.bio}
          />
        ))}
      </div>
    </>
  )
}

export default TeamDashboard